import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import Yt from "@/components/Yt";
import Ads from "@/components/Ads";
import {
  FlaskConical,
  GraduationCap,
  Brain,
  Boxes,
  ArrowRight,
  Youtube,
  FileText,
} from "lucide-react";

interface Joke {
  joke: string;
}

const featureCards = [
  {
    icon: FlaskConical,
    color: "emerald",
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    hoverBorder: "hover:border-emerald-500/40",
    hoverTitle: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
    accentColor: "bg-emerald-500",
    title: "Interactive Practice Workspace",
    desc: "21 compliance sandboxes covering Shadow DOM, alerts, nested iframes, waits, table sorting, and draggable targets — all with stable POM selectors.",
    cta: "Enter Workspace",
    ctaColor: "text-emerald-600 dark:text-emerald-400",
    link: "/test",
  },
  {
    icon: GraduationCap,
    color: "indigo",
    iconBg: "bg-indigo-500/10 dark:bg-indigo-500/15",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    hoverBorder: "hover:border-indigo-500/40",
    hoverTitle: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
    accentColor: "bg-indigo-500",
    title: "Free Automation Courses",
    desc: "Video series on Playwright TypeScript, Selenium Webdriver, API Testing, Cucumber, LetXPath extension, and mobile testing.",
    cta: "View Courses",
    ctaColor: "text-indigo-600 dark:text-indigo-400",
    link: "/courses",
  },
  {
    icon: Brain,
    color: "violet",
    iconBg: "bg-violet-500/10 dark:bg-violet-500/15",
    iconColor: "text-violet-600 dark:text-violet-400",
    hoverBorder: "hover:border-violet-500/40",
    hoverTitle: "group-hover:text-violet-600 dark:group-hover:text-violet-400",
    accentColor: "bg-violet-500",
    title: "Grooming & Quiz Sandboxes",
    desc: "Crack automation interviews with 7-part playlists. Test your knowledge with the live, persistent Playwright Quiz application.",
    cta: "Take Quiz",
    ctaColor: "text-violet-600 dark:text-violet-400",
    link: "/pw-quiz",
    secondaryCta: { label: "Interview Prep", link: "/interview" },
  },
  {
    icon: FileText,
    color: "rose",
    iconBg: "bg-rose-500/10 dark:bg-rose-500/15",
    iconColor: "text-rose-600 dark:text-rose-400",
    hoverBorder: "hover:border-rose-500/40",
    hoverTitle: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
    accentColor: "bg-rose-500",
    title: "Resume Builder",
    desc: "Create a QA/SDET resume with guided prompts, live templates, themes, local drafts, and print-ready PDF download.",
    cta: "Build Resume",
    ctaColor: "text-rose-600 dark:text-rose-400",
    link: "/resume-builder",
  },
  {
    icon: Boxes,
    color: "teal",
    iconBg: "bg-teal-500/10 dark:bg-teal-500/15",
    iconColor: "text-teal-600 dark:text-teal-400",
    hoverBorder: "hover:border-teal-500/40",
    hoverTitle: "group-hover:text-teal-600 dark:group-hover:text-teal-400",
    accentColor: "bg-teal-500",
    title: "Open Source Projects",
    desc: "Learn npm development by building Ortoni Report, LetXPath Chrome extension selector finder, and Playwright Runner extensions.",
    cta: "Ortoni Report",
    ctaColor: "text-teal-600 dark:text-teal-400",
    link: "/product/ortoni-report",
    extraLinks: [
      { label: "LetXPath", link: "/product/letxpath" },
      { label: "PW Runner", link: "/product/playwright-runner" },
    ],
  },
];

export const MainPage: React.FC = () => {
  usePageMeta({
    title: "LetCode with Koushik | Software Test Automation Hub",
    description:
      "Testing Hub — A platform to learn and master test automation with hands-on labs, free courses, and Selenium/Playwright POM testing sandboxes.",
    keywords:
      "LetCode, LetCode koushik, selenium, playwright, automation testing sandbox, learn automation, QA engineering",
  });

  const [joke, setJoke] = useState<string>("");
  const [copiedConsole, setCopiedConsole] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data: Joke) => {
        if (data && data.joke) setJoke(data.joke);
      })
      .catch((err) => console.error("Error fetching joke:", err));
  }, []);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText("npx playletcode run");
    setCopiedConsole(true);
    setTimeout(() => setCopiedConsole(false), 2000);
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* ── Global ambient glow layer ── */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full glow-orb-emerald opacity-60 dark:opacity-100 animate-glow-pulse" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full glow-orb-indigo opacity-50 dark:opacity-90 animate-glow-pulse [animation-delay:1.5s]" />
        <div className="absolute top-[40%] left-[40%] w-[40%] h-[40%] rounded-full glow-orb-violet opacity-30 dark:opacity-60 animate-glow-pulse [animation-delay:3s]" />
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern opacity-40" />
      </div>

      {/* ── Hero Section ── */}
      <section className="relative z-10 pt-20 pb-16 md:pt-36 md:pb-28">
        <div className="container mx-auto text-center max-w-4xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/40 text-xs font-bold text-emerald-700 dark:text-emerald-300 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 -ml-3.5" />
            <span>New! Playwright Quiz Sandbox Ready</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Master Test Automation
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 dark:from-emerald-400 dark:via-teal-300 dark:to-indigo-400">
              With Interactive Labs
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            The ultimate playground for QA automation engineers. Practice Selenium,
            Playwright, and Cypress with stable POM selectors, interactive sandboxes,
            and zero placeholders.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/test"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl text-sm font-bold h-12 px-8 btn-primary"
            >
              <FlaskConical className="w-4 h-4" />
              Start Practicing
            </Link>
            <Link
              to="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold h-12 px-8 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm hover:shadow"
            >
              <GraduationCap className="w-4 h-4" />
              Explore Free Courses
            </Link>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-3xl mx-auto border-t border-slate-200/60 dark:border-slate-800/60 mt-12">
            {[
              { value: "21+", label: "Practice Labs" },
              { value: "17+", label: "Free Courses" },
              { value: "38",  label: "Active Routes" },
              { value: "100k", label: "Target Subs" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
                  {value}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-500 font-semibold uppercase tracking-widest mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Terminal section ── */}
      <section className="relative z-10 py-6 max-w-2xl mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 dark:ring-white/5 bg-[#0e1525] font-mono text-xs text-slate-100">
          {/* Terminal chrome */}
          <div className="bg-[#161f30] px-4 py-3 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500 block shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 block shadow-[0_0_6px_rgba(250,204,21,0.6)]" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 block shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
            </div>
            <span className="text-slate-500 text-[10px] tracking-widest select-none uppercase">
              letcode-terminal
            </span>
            <div className="w-14" />
          </div>
          {/* Terminal body */}
          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-emerald-400 font-semibold">
                <span className="text-indigo-400">$</span> npx playletcode run
              </span>
              <button
                onClick={handleCopyCommand}
                className="text-slate-500 hover:text-slate-200 transition-colors p-1 rounded"
                title="Copy to clipboard"
              >
                <i className={`fa-regular ${copiedConsole ? "fa-circle-check text-emerald-400" : "fa-copy"}`} />
              </button>
            </div>
            {joke ? (
              <div className="border-l-2 border-emerald-500/70 pl-4 py-1 bg-white/[0.03] rounded-r-lg">
                <p className="text-slate-300 leading-relaxed italic">"{joke}"</p>
              </div>
            ) : (
              <p className="text-slate-600 animate-pulse">Fetching daily automation humor…</p>
            )}
            <div className="text-[10px] text-slate-600 pt-1">
              <span className="text-indigo-400/60">//</span>{" "}
              Goal: Once Koushik hits 100k YouTube subscribers, this platform goes ad-free.
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="relative z-10 py-16 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Structured{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                Learning Paths
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Production-quality training grounds — no placeholders, no shortcuts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`group relative flex flex-col justify-between border border-slate-200/80 dark:border-slate-800/60 ${card.hoverBorder} hover:shadow-xl rounded-2xl bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden`}
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 ${card.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="space-y-4">
                    <div className={`w-11 h-11 rounded-xl ${card.iconBg} ${card.iconColor} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className={`text-lg font-extrabold text-slate-900 dark:text-slate-50 ${card.hoverTitle} transition-colors`}>
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center gap-4">
                    <Link
                      to={card.link}
                      className={`inline-flex items-center gap-1.5 text-sm font-bold ${card.ctaColor} hover:gap-2.5 transition-all`}
                    >
                      {card.cta}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {card.secondaryCta && (
                      <>
                        <span className="text-slate-200 dark:text-slate-700">|</span>
                        <Link
                          to={card.secondaryCta.link}
                          className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                        >
                          {card.secondaryCta.label}
                        </Link>
                      </>
                    )}
                    {card.extraLinks?.map((el) => (
                      <React.Fragment key={el.link}>
                        <span className="text-slate-200 dark:text-slate-700">•</span>
                        <Link
                          to={el.link}
                          className={`text-sm font-semibold ${card.ctaColor} opacity-75 hover:opacity-100 transition-opacity`}
                        >
                          {el.label}
                        </Link>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── YouTube CTA ── */}
      <section className="relative z-10 py-10">
        <div className="container mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl p-px bg-gradient-to-r from-emerald-500/40 via-teal-500/30 to-indigo-500/40 dark:from-emerald-500/30 dark:via-teal-500/25 dark:to-indigo-500/30 shadow-xl">
            <div className="relative rounded-[calc(1.5rem-1px)] bg-white/90 dark:bg-[#0c1428]/90 backdrop-blur-xl p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Glow orbs inside card */}
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full glow-orb-emerald opacity-60 pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full glow-orb-indigo opacity-50 pointer-events-none" />

              <div className="space-y-4 flex-1 text-center lg:text-left z-10 w-full">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-md">
                    <Youtube className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
                    Support Our YouTube Channel
                  </h2>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                  Get advanced test automation guides, framework tutorials, and free live streams.
                  Help us reach our{" "}
                  <strong className="text-emerald-600 dark:text-emerald-400 font-extrabold">
                    100k subscribers
                  </strong>{" "}
                  goal to keep this workspace completely ad-free!
                </p>

                {/* Progress bar */}
                <div className="space-y-1.5 pt-1 max-w-sm mx-auto lg:mx-0">
                  <div className="flex justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                    <span>Progress to 100k Goal</span>
                    <span className="text-emerald-600 dark:text-emerald-400">43.3%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-950/60 rounded-full overflow-hidden p-0.5 border border-slate-200/50 dark:border-slate-800/40">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500"
                      style={{ width: "43.3%" }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-600 font-semibold">
                    <span>43,300+ Subs</span>
                    <span>100,000 Subs</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full lg:w-auto justify-center">
                <a
                  href="https://buymeacoffee.com/letcode"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl text-xs font-extrabold h-11 px-6 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-slate-950 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
                >
                  🍕 Buy me a Pizza
                </a>
                <div className="w-full sm:w-auto flex justify-center">
                  <Yt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ads ── */}
      <section className="relative z-10 py-8">
        <div className="container mx-auto max-w-4xl">
          <Ads />
        </div>
      </section>
    </div>
  );
};

export default MainPage;
