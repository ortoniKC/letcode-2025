import React, { useState, useEffect, useRef } from "react";
import quizData from "../../../public/assets/quiz/playwright.json";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import {
  Clock,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Trophy,
  RotateCcw,
  Zap,
  BookOpen,
  Target,
  Play,
} from "lucide-react";

type QuizFormat = "Boolean" | "Multiple Choice";

interface QuizQuestion {
  format: QuizFormat;
  question: string;
  options?: string[];
  answer: string | boolean;
  answer_definition: string;
}

interface ParsedQuestion {
  qid: string;
  q: QuizQuestion;
}

const shuffleArray = <T,>(arr: T[]): T[] =>
  [...arr].sort(() => Math.random() - 0.5);

// Format seconds as mm:ss
const formatTime = (secs: number) => {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
};

// Score → grade + color
const getGrade = (pct: number) => {
  if (pct >= 90) return { label: "Excellent!", color: "text-emerald-500", ring: "ring-emerald-400" };
  if (pct >= 70) return { label: "Good Job!", color: "text-blue-500", ring: "ring-blue-400" };
  if (pct >= 50) return { label: "Keep Going!", color: "text-amber-500", ring: "ring-amber-400" };
  return { label: "Keep Practising", color: "text-red-500", ring: "ring-red-400" };
};

export const PlaywrightQuizPage: React.FC = () => {
  usePageMeta({
    title: "Playwright Quiz | LetCode with Koushik",
    description: "Test your Playwright knowledge with this interactive quiz",
    keywords: "playwright quiz, test automation quiz, playwright testing",
  });

  const [quizList, setQuizList] = useState<[string, QuizQuestion][]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(300);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string | boolean>>({});
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const questionsPerPage = 5;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("quizState");
    const parsedQuiz = quizData as Record<string, QuizQuestion>;
    let initialQuizList: [string, QuizQuestion][] = [];

    if (saved) {
      const state = JSON.parse(saved);
      if (state.quizOrder) {
        initialQuizList = state.quizOrder.map((qid: string) => [qid, parsedQuiz[qid]]);
      } else {
        initialQuizList = shuffleArray(Object.entries(parsedQuiz)).map(([qid, q]) => {
          if (q.options) q.options = shuffleArray(q.options);
          return [qid, q];
        });
      }
      setCurrentPage(state.currentPage ?? 0);
      setSelectedAnswers(state.selectedAnswers ?? {});
      setTimerSeconds(state.timerSeconds ?? 300);
      setQuizStarted(state.quizStarted ?? false);
    } else {
      initialQuizList = shuffleArray(Object.entries(parsedQuiz)).map(([qid, q]) => {
        if (q.options) q.options = shuffleArray(q.options);
        return [qid, q];
      });
    }
    setQuizList(initialQuizList);
  }, []);

  const saveProgress = (
    cPage: number,
    selAnswers: Record<string, string | boolean>,
    tSecs: number,
    qStarted: boolean
  ) => {
    if (quizList.length === 0) return;
    localStorage.setItem(
      "quizState",
      JSON.stringify({
        currentPage: cPage,
        selectedAnswers: selAnswers,
        timerSeconds: tSecs,
        quizStarted: qStarted,
        quizOrder: quizList.map(([qid]) => qid),
      })
    );
  };

  useEffect(() => {
    if (quizStarted && !quizFinished && !showAnswers) {
      timerRef.current = setInterval(() => {
        setTimerSeconds((prev) => {
          const next = prev - 1;
          if (next <= 0) {
            if (timerRef.current) clearInterval(timerRef.current);
            setShowAnswers(true);
            saveProgress(currentPage, selectedAnswers, 0, quizStarted);
            return 0;
          }
          saveProgress(currentPage, selectedAnswers, next, quizStarted);
          return next;
        });
      }, 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [quizStarted, quizFinished, showAnswers, currentPage, selectedAnswers]);

  // Derived
  const startIdx = currentPage * questionsPerPage;
  const currentQuestions: ParsedQuestion[] = quizList
    .slice(startIdx, startIdx + questionsPerPage)
    .map(([qid, q]) => ({ qid, q }));
  const totalPages = Math.ceil(quizList.length / questionsPerPage);
  const totalCorrect = quizList.filter(([qid, q]) => selectedAnswers[qid] === q.answer).length;
  const currentPageScore = currentQuestions.filter(({ qid, q }) => selectedAnswers[qid] === q.answer).length;
  const answeredOnPage = currentQuestions.filter(({ qid }) => selectedAnswers[qid] !== undefined).length;
  const timerPct = (timerSeconds / 300) * 100;
  const timerUrgent = timerSeconds <= 60;

  const startQuiz = () => {
    setQuizStarted(true);
    setTimerSeconds(300);
    saveProgress(currentPage, selectedAnswers, 300, true);
  };

  const selectAnswer = (qid: string, value: string | boolean) => {
    if (showAnswers) return;
    const updated = { ...selectedAnswers, [qid]: value };
    setSelectedAnswers(updated);
    saveProgress(currentPage, updated, timerSeconds, quizStarted);
  };

  const submitPage = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setShowAnswers(true);
    saveProgress(currentPage, selectedAnswers, timerSeconds, quizStarted);
  };

  const moveToNextPage = () => {
    if (currentPage + 1 < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      setTimerSeconds(300);
      setShowAnswers(false);
      saveProgress(nextPage, selectedAnswers, 300, quizStarted);
    } else {
      setQuizFinished(true);
      localStorage.removeItem("quizState");
    }
  };

  const restartQuiz = () => {
    localStorage.removeItem("quizState");
    const parsedQuiz = quizData as Record<string, QuizQuestion>;
    const fresh = shuffleArray(Object.entries(parsedQuiz)).map(([qid, q]) => {
      if (q.options) q.options = shuffleArray(q.options);
      return [qid, q] as [string, QuizQuestion];
    });
    setQuizList(fresh);
    setQuizFinished(false);
    setQuizStarted(false);
    setShowAnswers(false);
    setCurrentPage(0);
    setSelectedAnswers({});
    setTimerSeconds(300);
  };

  const isCorrect = (qid: string, actual: string | boolean) =>
    selectedAnswers[qid] !== undefined && selectedAnswers[qid] === actual;

  // Option button style
  const optionStyle = (
    qid: string,
    optValue: string | boolean,
    correctAnswer: string | boolean
  ) => {
    const isSelected = selectedAnswers[qid] === optValue;
    const isRight = optValue === correctAnswer;

    if (!showAnswers) {
      return isSelected
        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 shadow-sm ring-1 ring-indigo-400/40"
        : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/40 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20 text-slate-700 dark:text-slate-300 cursor-pointer";
    }
    if (isRight)
      return "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 ring-1 ring-emerald-400/40";
    if (isSelected && !isRight)
      return "border-red-400 bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300 ring-1 ring-red-400/40";
    return "border-slate-200/60 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/20 text-slate-400 dark:text-slate-600 opacity-60";
  };

  const finalPct = Math.round((totalCorrect / (quizList.length || 1)) * 100);
  const grade = getGrade(finalPct);

  return (
    <PageLayout glowColor="indigo">
        <PageHeader header="Playwright Quiz" description="Test your Playwright knowledge — 5 questions per round, 5 minutes on the clock." />

        <section className="container mx-auto py-8 max-w-2xl">

          {/* ── Welcome Screen ── */}
          {!quizStarted && !quizFinished && (
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/50 backdrop-blur-md shadow-xl p-8 md:p-10 space-y-8 text-center">
              {/* Decorative top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 rounded-t-2xl" />

              <div className="space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/25">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  Playwright{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500">
                    Quiz
                  </span>
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                  Challenge yourself with {quizList.length} Playwright questions — shuffled fresh every time.
                </p>
              </div>

              {/* Rules */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                {[
                  { icon: Target, label: "5 questions", sub: "per page" },
                  { icon: Clock, label: "5 minutes", sub: "per round" },
                  { icon: Zap, label: "Instant", sub: "feedback" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5 p-4 rounded-xl border border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/30">
                    <Icon className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                    <span className="font-bold text-slate-800 dark:text-slate-100">{label}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-500">{sub}</span>
                  </div>
                ))}
              </div>

              <button
                id="start-quiz"
                onClick={startQuiz}
                className="inline-flex items-center gap-2 btn-primary rounded-xl h-12 px-10 text-sm font-bold"
              >
                <Play className="w-4 h-4 fill-current" />
                Start Quiz
              </button>
            </div>
          )}

          {/* ── Active Quiz ── */}
          {quizStarted && !quizFinished && (
            <div className="space-y-5">

              {/* Progress + Timer bar */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/50 backdrop-blur-md p-4 shadow-sm">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  {/* Page progress */}
                  <div className="space-y-1 flex-1 min-w-[140px]">
                    <div className="flex justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <span>Page {currentPage + 1} of {totalPages}</span>
                      <span>{answeredOnPage}/{questionsPerPage} answered</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
                        style={{ width: `${(answeredOnPage / questionsPerPage) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Score badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {totalCorrect}/{quizList.length} correct
                  </div>

                  {/* Timer */}
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors ${
                    timerUrgent
                      ? "bg-red-50 dark:bg-red-950/30 border-red-200/60 dark:border-red-900/40 text-red-600 dark:text-red-400"
                      : "bg-slate-50 dark:bg-slate-900/50 border-slate-200/60 dark:border-slate-800/40 text-slate-600 dark:text-slate-400"
                  }`}>
                    <Clock className={`w-3.5 h-3.5 ${timerUrgent ? "animate-pulse" : ""}`} />
                    {formatTime(timerSeconds)}
                  </div>
                </div>

                {/* Timer progress bar */}
                <div className="mt-3 h-1 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      timerUrgent
                        ? "bg-gradient-to-r from-red-500 to-orange-500"
                        : "bg-gradient-to-r from-emerald-500 to-teal-400"
                    }`}
                    style={{ width: `${timerPct}%` }}
                  />
                </div>
              </div>

              {/* Question cards */}
              <div className="space-y-4">
                {currentQuestions.map(({ qid, q }, qi) => {
                  const answered = selectedAnswers[qid] !== undefined;
                  const correct = showAnswers && isCorrect(qid, q.answer);
                  const wrong = showAnswers && answered && !correct;

                  // Build options list
                  const options: Array<{ label: string; value: string | boolean }> =
                    q.format === "Boolean"
                      ? [
                          { label: "True", value: true },
                          { label: "False", value: false },
                        ]
                      : (q.options ?? []).map((o) => ({ label: o, value: o }));

                  return (
                    <div
                      key={qid}
                      className={`relative rounded-2xl border transition-all duration-300 bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm shadow-sm ${
                        showAnswers
                          ? correct
                            ? "border-emerald-300/70 dark:border-emerald-700/50 shadow-emerald-100 dark:shadow-none"
                            : wrong
                            ? "border-red-300/70 dark:border-red-800/50 shadow-red-100 dark:shadow-none"
                            : "border-slate-200/60 dark:border-slate-800/40"
                          : "border-slate-200/80 dark:border-slate-800/60 hover:border-indigo-200 dark:hover:border-indigo-900/50"
                      }`}
                    >
                      {/* Status strip */}
                      {showAnswers && (
                        <div className={`absolute top-0 left-0 bottom-0 w-1 rounded-l-2xl ${correct ? "bg-emerald-500" : wrong ? "bg-red-500" : "bg-slate-300 dark:bg-slate-700"}`} />
                      )}

                      <div className="p-5 md:p-6 space-y-4">
                        {/* Question header */}
                        <div className="flex items-start gap-3">
                          <span className="shrink-0 w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40 text-xs font-bold flex items-center justify-center">
                            {qi + 1 + startIdx}
                          </span>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                                q.format === "Boolean"
                                  ? "bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-200/60 dark:border-amber-900/40"
                                  : "bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border-blue-200/60 dark:border-blue-900/40"
                              }`}>
                                {q.format}
                              </span>
                              {showAnswers && (
                                correct
                                  ? <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                  : wrong
                                  ? <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                                  : null
                              )}
                            </div>
                            <p className="text-sm md:text-base font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                              {q.question}
                            </p>
                          </div>
                        </div>

                        {/* Options */}
                        <div className="grid grid-cols-1 gap-2 pl-10">
                          {options.map(({ label, value }) => (
                            <button
                              key={String(value)}
                              onClick={() => selectAnswer(qid, value)}
                              disabled={showAnswers}
                              className={`text-left px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-150 ${optionStyle(qid, value, q.answer)}`}
                            >
                              <span className="flex items-center gap-2">
                                {showAnswers && value === q.answer && (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                )}
                                {showAnswers && selectedAnswers[qid] === value && value !== q.answer && (
                                  <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                                )}
                                {label}
                              </span>
                            </button>
                          ))}
                        </div>

                        {/* Answer explanation */}
                        {showAnswers && (
                          <div className={`ml-10 p-3.5 rounded-xl border text-xs leading-relaxed ${
                            correct
                              ? "bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-200/60 dark:border-emerald-900/30 text-emerald-800 dark:text-emerald-300"
                              : "bg-red-50/70 dark:bg-red-950/20 border-red-200/60 dark:border-red-900/30 text-red-800 dark:text-red-300"
                          }`}>
                            <p className="font-bold mb-0.5">
                              Correct answer:{" "}
                              <span className="font-mono">{String(q.answer)}</span>
                            </p>
                            <p className="opacity-80">{q.answer_definition}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Page score summary */}
              {showAnswers && (
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm p-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      Page {currentPage + 1} Result
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {currentPageScore === questionsPerPage
                        ? "Perfect score! 🎉"
                        : currentPageScore >= 3
                        ? "Good work!"
                        : "Keep practising!"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-extrabold ${currentPageScore >= 4 ? "text-emerald-600 dark:text-emerald-400" : currentPageScore >= 3 ? "text-amber-500" : "text-red-500"}`}>
                      {currentPageScore}/{questionsPerPage}
                    </p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">this page</p>
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex items-center justify-between pt-1">
                <p className={`text-xs font-semibold flex items-center gap-1.5 ${timerUrgent ? "text-red-500" : "text-slate-400 dark:text-slate-500"}`}>
                  <Clock className={`w-3.5 h-3.5 ${timerUrgent ? "animate-pulse" : ""}`} />
                  {formatTime(timerSeconds)} remaining
                </p>

                {!showAnswers ? (
                  <button
                    id="submit-quiz"
                    onClick={submitPage}
                    disabled={answeredOnPage === 0}
                    className="inline-flex items-center gap-2 rounded-xl text-sm font-bold h-11 px-7 btn-primary disabled:opacity-40 disabled:pointer-events-none"
                  >
                    Submit Page
                  </button>
                ) : (
                  <button
                    id="next-quiz"
                    onClick={moveToNextPage}
                    className="inline-flex items-center gap-2 rounded-xl text-sm font-bold h-11 px-7 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-md shadow-indigo-500/20 hover:-translate-y-0.5 transition-all"
                  >
                    {currentPage + 1 < totalPages ? (
                      <>Next Page <ChevronRight className="w-4 h-4" /></>
                    ) : (
                      <>View Results <Trophy className="w-4 h-4" /></>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ── Results Screen ── */}
          {quizFinished && (
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/50 backdrop-blur-md shadow-xl p-8 md:p-12 text-center space-y-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 rounded-t-2xl" />

              {/* Score ring */}
              <div className="space-y-3">
                <div className={`w-28 h-28 mx-auto rounded-full ring-4 ${grade.ring} ring-offset-4 ring-offset-white dark:ring-offset-slate-900 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-center shadow-lg`}>
                  <span className={`text-3xl font-extrabold ${grade.color}`}>{finalPct}%</span>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">score</span>
                </div>
                <div>
                  <h2 className={`text-2xl font-extrabold ${grade.color}`}>{grade.label}</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                    You answered{" "}
                    <strong className="text-slate-900 dark:text-slate-100">{totalCorrect}</strong>{" "}
                    out of{" "}
                    <strong className="text-slate-900 dark:text-slate-100">{quizList.length}</strong>{" "}
                    questions correctly
                  </p>
                </div>
              </div>

              {/* Stat pills */}
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 text-sm font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />{totalCorrect} Correct
                </div>
                <div className="px-4 py-2 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200/60 dark:border-red-900/40 text-sm font-bold text-red-600 dark:text-red-400 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" />{quizList.length - totalCorrect} Incorrect
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/40 text-sm font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                  <Target className="w-4 h-4" />{quizList.length} Total
                </div>
              </div>

              <button
                onClick={restartQuiz}
                className="inline-flex items-center gap-2 rounded-xl text-sm font-bold h-12 px-10 btn-primary"
              >
                <RotateCcw className="w-4 h-4" />
                Restart Quiz
              </button>
            </div>
          )}
        </section>
    </PageLayout>
  );
};

export default PlaywrightQuizPage;
