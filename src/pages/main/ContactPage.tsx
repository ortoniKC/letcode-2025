import React, { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import Ads from "@/components/Ads";
import PageLayout from "@/components/PageLayout";
import {
  Mail,
  Copy,
  Check,
  Briefcase,
  Layers,
  Terminal,
  ExternalLink,
  Chrome,
  Coffee,
  PlayCircle,
} from "lucide-react";

const person = {
  name: "Koushik Chatterjee",
  title: "SDET Architect & Open Source Creator",
  bio: "Senior Software Test Automation Specialist passionate about designing robust automation infrastructures, developing developer tools, and sharing quality engineering knowledge with the community.",
  email: "koushik350@gmail.com",
  linkedin: "https://www.linkedin.com/in/ortoni/",
  github: "https://github.com/ortonikc",
  youtube: "https://www.youtube.com/@letcode",
  kurimurai: "https://www.youtube.com/@kurimurai",
  coffee: "https://buymeacoffee.com/letcode",
  telegram: "https://t.me/letcode_with_koushik",
  workExperience: [
    {
      title: "Senior Software Test Automation Engineer - Epam Systems",
      period: "At present",
      location: "Chennai, India",
    },
    {
      title: "Senior Software Analyst - TVS Next",
      period: "Jul 2023 - Nov 2024",
      location: "Chennai, India",
    },
    {
      title: "Software Test Engineer - Allegion",
      period: "May 2021 - Jul 2022",
      location: "Bangalore, India",
    },
    {
      title: "Quality Assurance Engineer - Allegion",
      period: "Jan 2020 - Apr 2021",
      location: "Bangalore, India",
    },
    {
      title: "SDET - TestLeaf Software Solutions Private Limited",
      period: "Dec 2017 - Jan 2020",
      location: "Chennai, India",
    },
  ],
  products: [
    {
      name: "Ortoni Report",
      link: "https://www.npmjs.com/package/ortoni-report",
      type: "NPM Package",
      cta: "Get NPM Package",
      icon: Terminal,
      color: "from-emerald-500 to-teal-400",
      description:
        "A comprehensive and visually appealing HTML report generator tailored for Playwright tests. Designed with powerful features and customizable options, Ortoni Report simplifies the process of reviewing and managing test results, making test reporting more intuitive and accessible.",
    },
    {
      name: "LetXPath",
      link: "https://chromewebstore.google.com/detail/letxpath/bekehlnepmijedippfibbmbglglbmlgk",
      type: "Chrome Extension",
      cta: "Install Chrome Extension",
      icon: Chrome,
      color: "from-teal-500 to-cyan-400",
      description:
        "LetXPath is an open-source project designed to help you find XPath and CSS selectors with a single click, complete with code snippets tailored to the element type. Your Ultimate XPath & CSS Selector Finder",
    },
    {
      name: "Playwright Runner",
      link: "https://marketplace.visualstudio.com/items?itemName=ortoni.ortoni",
      type: "VS Code Extension",
      cta: "Download Extension",
      icon: PlayCircle,
      color: "from-emerald-600 to-emerald-400",
      description:
        "The Playwright Runner by Koushik VS Code extension simplifies the process of running Playwright tests directly from your editor. With this extension, you can easily execute Playwright tests & Cucumber tests, manage different test environments, and streamline your testing workflow without leaving VS Code.",
    },
  ],
};

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  usePageMeta({
    title: "Contact | LetCode with Koushik",
    description:
      "Check out Koushik's professional background and open source creations",
    keywords: "LetCode with koushik, LetCode koushik, koushik, SDET Portfolio",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(person.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageLayout>
      <section className="container mx-auto py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {/* Left Profile Hub */}
          <div className="lg:col-span-1 space-y-6">
            <div className="border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 shadow-md shadow-slate-100/50 dark:shadow-none text-center">
              {/* Avatar */}
              <div className="relative w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 p-1 shadow-lg shadow-emerald-500/20 dark:shadow-emerald-500/10">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-950 border-2 border-white dark:border-slate-900">
                  <img
                    src="/assets/logo.png"
                    alt="LetCode logo"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div
                  className="absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center shadow-sm"
                  title="Active"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                </div>
              </div>

              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
                {person.name}
              </h1>
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                {person.title}
              </p>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 leading-relaxed max-w-sm mx-auto">
                {person.bio}
              </p>

              {/* Email copy card */}
              <div className="mt-6 p-3 rounded-xl bg-slate-50/70 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-xs text-slate-700 dark:text-slate-300 select-all font-mono truncate">
                    {person.email}
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-colors text-slate-500 dark:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  title="Copy Email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Social Grid */}
              <div className="grid grid-cols-5 gap-2 md:gap-3 mt-6">
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-950/20 hover:bg-sky-50 dark:hover:bg-sky-950/20 hover:border-sky-200 dark:hover:border-sky-900/40 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-all group"
                  title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin text-lg" />
                </a>
                <a
                  href={person.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-950/20 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all group"
                  title="GitHub"
                >
                  <i className="fa-brands fa-github text-lg" />
                </a>
                <a
                  href={person.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-950/20 hover:bg-red-50 dark:hover:bg-red-950/20 hover:border-red-200 dark:hover:border-red-900/40 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-all group"
                  title="LetCode YouTube (English)"
                >
                  <i className="fa-brands fa-youtube text-lg" />
                </a>
                <a
                  href={person.kurimurai}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-950/20 hover:bg-rose-50 dark:hover:bg-rose-950/20 hover:border-rose-200 dark:hover:border-rose-900/40 text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-all group"
                  title="Kurimurai YouTube (Tamil)"
                >
                  <i className="fa-brands fa-youtube text-lg" />
                </a>
                <a
                  href={person.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-950/20 hover:bg-sky-50 dark:hover:bg-sky-950/20 hover:border-sky-200 dark:hover:border-sky-900/40 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-all group"
                  title="Telegram Group"
                >
                  <i className="fa-brands fa-telegram text-lg" />
                </a>
              </div>
            </div>

            {/* Extra community cards */}
            <div className="border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-5 shadow-md shadow-slate-100/50 dark:shadow-none space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100">
                    Support Our Work
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Help keep our platform open and ad-free
                  </p>
                </div>
              </div>
              <a
                href={person.coffee}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-emerald-600 hover:bg-emerald-700 text-white h-9 px-4 shadow-sm hover:shadow active:scale-[0.98]"
              >
                <Coffee className="w-4 h-4" /> Buy me a Coffee
              </a>
            </div>
          </div>

          {/* Right Professional details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Timeline Section */}
            <div className="border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 shadow-md shadow-slate-100/50 dark:shadow-none">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-200 dark:border-slate-800/80">
                <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h2 className="text-base font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                  Professional Timeline
                </h2>
              </div>

              <div className="relative border-l-2 border-emerald-500/30 dark:border-emerald-500/20 ml-2.5 pl-6 space-y-6">
                {person.workExperience.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline dot */}
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-emerald-500 group-hover:bg-emerald-500 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:bg-white transition-colors" />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100/60 dark:border-emerald-900/40">
                          {exp.period}
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-50">
                        {exp.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Products Section */}
            <div className="border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 shadow-md shadow-slate-100/50 dark:shadow-none">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-200 dark:border-slate-800/80">
                <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h2 className="text-base font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                  Our Open Source Projects
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {person.products.map((prod, idx) => {
                  const IconComp = prod.icon;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col justify-between border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/20 dark:bg-slate-950/20 p-4 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100/60 dark:border-emerald-900/40">
                            {prod.type}
                          </span>
                          <div className="text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            <IconComp className="w-4 h-4" />
                          </div>
                        </div>

                        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {prod.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                          {prod.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                        <a
                          href={prod.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-1 rounded-lg text-[10px] font-bold transition-all bg-emerald-600 hover:bg-emerald-700 text-white h-7.5 px-3 shadow-sm hover:shadow active:scale-[0.98]"
                        >
                          {prod.cta} <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto mt-4">
        <Ads />
      </div>
    </PageLayout>
  );
};

export default ContactPage;
