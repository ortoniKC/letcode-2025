import React from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import AdsVertical from "@/components/Ads";
import { Eye, Download, Compass, CheckCircle2, AlertCircle, Github, Play, HelpCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const LetxpathProductPage: React.FC = () => {
  usePageMeta({
    title: "LetXPath Chrome Extension | LetCode with Koushik",
    description: "LetXPath - Your Ultimate XPath & CSS Selector Finder. An open-source tool to find XPath and CSS selectors effortlessly.",
    keywords: "letxpath, chrome xpath plugin, chrome xpath, devtools plugin, selenium locator finder",
  });

  return (
    <PageLayout>
        <section className="container mx-auto">
          <div className="max-w-4xl mx-auto border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-8 space-y-8 transition-shadow duration-300 hover:shadow-lg">
            
            {/* Header Title Banner */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/50 dark:bg-emerald-950/30 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <Compass className="w-3.5 h-3.5" />
                <span>XPath & CSS Locator Finder</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                LetXPath Extension
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                An open-source browser extension that simplifies finding, building, and verifying complex XPath & CSS selectors inside your browser DevTools.
              </p>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Banner Image */}
            <div className="flex justify-center border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-inner bg-slate-950/5 dark:bg-slate-950/45">
              <img
                src="https://lh3.googleusercontent.com/7MuYtoO3T7BR47JFVs_gDNk3pSL_Vp-KAAehXgIZONKzeH-tB_YeK9JaHCXvKxj-MSjKISbfPHzyGsurQlCAR81DcA=s1600-w1600-h1000"
                alt="LetXPath Developer Interface"
                className="max-w-full h-auto object-cover max-h-[350px] opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* How to Use Section */}
            <div>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800 dark:text-slate-100">
                <Eye className="w-5 h-5 text-emerald-500" />
                <span>How to Use LetXPath</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
                {[
                  { step: "01", title: "Install", desc: "Add the extension to Chrome or Edge and restart." },
                  { step: "02", title: "Inspect", desc: "Right-click any element and choose Inspect (F12)." },
                  { step: "03", title: "Find Panel", desc: "Select the 'LetXPath' tab in the sidebar." },
                  { step: "04", title: "Click", desc: "Click any webpage element to capture it." },
                  { step: "05", title: "Copy", desc: "Copy the generated XPath or driver code lens." }
                ].map((item, idx) => (
                  <div key={idx} className="relative border border-slate-100 dark:border-slate-800/60 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-950/40 text-center space-y-1">
                    <span className="text-xl font-black text-emerald-500/25 dark:text-emerald-500/15 block">{item.step}</span>
                    <h3 className="font-bold text-slate-800 dark:text-slate-200 text-xs">{item.title}</h3>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Features list */}
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Features & Capabilities</span>
              </h2>
              <ul className="list-none grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-slate-700 dark:text-slate-300">
                {[
                  "Single-Click Generation: Capture unique selectors instantly.",
                  "Smart Ancestry XPath: Builds relative parent-child coordinates.",
                  "Dynamic Siblings: Supports following-sibling, preceding, and index checks.",
                  "Axis-Based Editor: Customize and test axes inside your DevTools panel.",
                  "Search & Verify: Validate if a locator is unique directly in the UI.",
                  "Code Snippets: Ready driver command syntaxes for multiple frameworks."
                ].map((feat, idx) => {
                  const [title, desc] = feat.split(":");
                  return (
                    <li key={idx} className="flex items-start gap-2 border border-transparent dark:border-transparent dark:hover:border-slate-900 rounded-lg p-1">
                      <span className="text-emerald-500 font-bold text-lg leading-none shrink-0">✓</span>
                      <div>
                        <strong>{title}:</strong><span className="text-slate-600 dark:text-slate-400 text-xs ml-1">{desc}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Snippet Support */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-2">Driver Snippet Integrations</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Generates ready-to-paste locators formatted for Selenium (Java, Python, C#), Playwright (Node, Python, Java), and Protractor JS codebases.
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-2">Why LetXPath?</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Unlike traditional inspector tools, LetXPath is completely open-source, features built-in verification, and includes step-by-step videos demonstrating how Koushik programmed the extension itself.
                </p>
              </div>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Actions / Get Started */}
            <div>
              <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">Get Started</h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://chromewebstore.google.com/detail/letxpath/bekehlnepmijedippfibbmbglglbmlgk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-emerald-600 hover:bg-emerald-700 text-white h-11 px-5 shadow-sm hover:shadow hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Extension</span>
                </a>
                <a
                  href="https://bit.ly/2S3eksW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-teal-600 hover:bg-teal-700 text-white h-11 px-5 shadow-sm hover:shadow hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Video Tutorial</span>
                </a>
                <a
                  href="https://github.com/ortoniKC/LetXPath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-slate-900 hover:bg-slate-800 text-white h-11 px-5 shadow-sm hover:shadow hover:-translate-y-0.5 active:scale-[0.98] dark:bg-slate-800 dark:hover:bg-slate-700"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source (GitHub)</span>
                </a>
              </div>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Help / Q&A */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-slate-700 dark:text-slate-300">
              <div className="space-y-2">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 text-sm">
                  <AlertCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Troubleshooting</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  If elements fail to capture, restart your browser. Report any locator edge cases or bugs directly on our GitHub Issues page.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 text-sm">
                  <HelpCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Is it Open Source and Free?</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Yes, LetXPath is 100% free under the MIT license. If you enjoy using it, don't forget to leave us a 5-star rating on the Chrome Store!
                </p>
              </div>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Ads vertical */}
            <div className="my-2">
              <AdsVertical />
            </div>

          </div>
        </section>
    </PageLayout>
  );
};

export default LetxpathProductPage;
