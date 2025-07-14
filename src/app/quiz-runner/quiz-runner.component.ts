import { Component, OnInit } from '@angular/core';
import quizData from '../../../public/assets/quiz/playwright.json'; // Adjust path as needed
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

type QuizFormat = 'Boolean' | 'Multiple Choice';

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

@Component({
  selector: 'app-quiz-runner',
  templateUrl: './quiz-runner.component.html',
  imports: [FormsModule, CommonModule],
  styles: [
    `
      .radio {
        display: block;
        margin-bottom: 0.5rem;
      }
    `,
  ],
  standalone: true,
})
export class QuizRunnerComponent implements OnInit {
  quiz: [string, QuizQuestion][] = [];
  currentPage = 0;
  questionsPerPage = 5;
  timerSeconds = 300;
  timer!: ReturnType<typeof setInterval>;
  timerStarted = false;
  showAnswers = false;
  quizStarted = false;
  selectedAnswers: Record<string, string | boolean> = {};
  quizFinished = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    const parsedQuiz = quizData as Record<string, QuizQuestion>;
    this.quiz = this.shuffleArray(Object.entries(parsedQuiz)).map(
      ([qid, q]) => {
        if (q.options) {
          q.options = this.shuffleArray(q.options);
        }
        return [qid, q];
      }
    );

    this.loadProgress();
  }

  get currentQuestions(): ParsedQuestion[] {
    const start = this.currentPage * this.questionsPerPage;
    return this.quiz
      .slice(start, start + this.questionsPerPage)
      .map(([qid, q]) => ({ qid, q }));
  }

  get totalPages(): number {
    return Math.ceil(this.quiz.length / this.questionsPerPage);
  }

  get currentPageScore(): number {
    return this.currentQuestions.filter(
      ({ qid, q }) => this.selectedAnswers[qid] === q.answer
    ).length;
  }

  get totalCorrect(): number {
    return this.quiz.filter(
      ([qid, q]) => this.selectedAnswers[qid] === q.answer
    ).length;
  }

  startQuiz(): void {
    this.quizStarted = true;
    this.timerStarted = true;
    this.startTimer();
    this.saveProgress();
  }

  selectAnswer(qid: string, value: string | boolean): void {
    this.selectedAnswers[qid] = value;
  }

  startTimer(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.timer = setInterval(() => {
        if (this.timerSeconds > 0) {
          this.timerSeconds--;
          this.saveProgress();
        } else {
          this.submitPage();
        }
      }, 1000);
    }
  }

  submitPage(): void {
    clearInterval(this.timer);
    this.showAnswers = true;
    this.saveProgress();
  }

  moveToNextPage(): void {
    if (this.currentPage + 1 < this.totalPages) {
      this.currentPage++;
      this.timerSeconds = 300;
      this.showAnswers = false;
      this.timerStarted = true;
      this.startTimer();
      this.saveProgress();
    } else {
      this.quizFinished = true;
      if (isPlatformBrowser(this.platformId)) {
        localStorage.removeItem('quizState');
      }
    }
  }

  saveProgress(): void {
    if (isPlatformBrowser(this.platformId)) {
      const state = {
        currentPage: this.currentPage,
        selectedAnswers: this.selectedAnswers,
        timerSeconds: this.timerSeconds,
        quizStarted: this.quizStarted,
      };
      localStorage.setItem('quizState', JSON.stringify(state));
    }
  }

  loadProgress(): void {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('quizState');
      if (saved) {
        const state = JSON.parse(saved);
        this.currentPage = state.currentPage ?? 0;
        this.selectedAnswers = state.selectedAnswers ?? {};
        this.timerSeconds = state.timerSeconds ?? 300;
        this.quizStarted = state.quizStarted ?? false;

        if (this.quizStarted) {
          this.startTimer();
          this.timerStarted = true;
        }
      }
    }
  }

  isCorrect(qid: string, actual: string | boolean): boolean {
    return (
      this.selectedAnswers[qid] !== undefined &&
      this.selectedAnswers[qid] === actual
    );
  }

  shuffleArray<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  getSelectedAnswersCount(): number {
    return Object.keys(this.selectedAnswers).length;
  }
}
