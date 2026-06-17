import React from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import AdsVertical from "@/components/Ads";
import { Terminal, Settings, Play, CheckCircle2, Heart, Coffee } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const OrtoniProductPage: React.FC = () => {
  usePageMeta({
    title: "Ortoni Report for Playwright | LetCode with Koushik",
    description: "A visually appealing HTML report generator for Playwright tests featuring hierarchical grouping, stats dashboards, and themes.",
    keywords: "ortoni report, playwright, playwright report, html reporter, testing dashboard",
  });

  const codeConfig = `import { defineConfig } from "@playwright/test";
import { OrtoniReportConfig } from "ortoni-report";

const reportConfig: OrtoniReportConfig = {
  open: process.env.CI ? "never" : "always",
  folderPath: "report-db",
  filename: "index.html",
  title: "Ortoni Test Report",
  projectName: "Ortoni-Report",
  preferredTheme: "light"
};

export default defineConfig({
  reporter: [["ortoni-report", reportConfig]]
});`;

  return (
    <PageLayout>
        <section className="container mx-auto">
          <div className="max-w-4xl mx-auto border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-8 space-y-8 transition-shadow duration-300 hover:shadow-lg">
            
            {/* Header Title Banner */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/50 dark:bg-emerald-950/30 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Playwright HTML Reporter</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Ortoni Report
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                A visually stunning HTML report generator built specifically for Playwright tests, providing enhanced dashboards and grouping.
              </p>
            </div>

            {/* Preview GIF */}
            <div className="flex justify-center border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-inner bg-slate-950/5 dark:bg-slate-950/45">
              <img
                src="https://github.com/ortoniKC/ortoni-report/blob/V2.0.9/assets/images/release.gif?raw=true"
                alt="Ortoni Report Preview"
                className="max-w-full h-auto object-cover max-h-[350px] opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />
            
            {/* Ad Banner */}
            <div className="my-2">
              <AdsVertical />
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-100">
                <Settings className="w-5 h-5 text-emerald-500" />
                <span>Key Features</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Hierarchical Grouping", desc: "Organize tests by files, suites, and nesting levels cleanly." },
                  { title: "Dashboard & Insights", desc: "Detailed summary charts and status trends for test cycles." },
                  { title: "Flexible Configuration", desc: "Supports custom titles, project names, and output paths." },
                  { title: "Themes & Branding", desc: "Light/dark configuration with option for custom logo display." },
                  { title: "Filtering & Search", desc: "Instantly filter skipped, failed, or specific tests with search bounds." },
                  { title: "Detailed Attachments", desc: "Embedded trace logs, screenshots, and videos on test details." }
                ].map((feature, idx) => (
                  <div key={idx} className="border border-slate-100 dark:border-slate-800/50 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-950/40">
                    <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Installation */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800 dark:text-slate-100">
                <Terminal className="w-5 h-5 text-emerald-500" />
                <span>Installation & Configuration</span>
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold mb-2 text-slate-600 dark:text-slate-300">1. Install the package via npm</h3>
                  <div className="relative group">
                    <pre className="bg-slate-950 dark:bg-black text-slate-200 p-4 rounded-xl overflow-x-auto text-xs font-mono border border-slate-900">
                      <code>npm install -D ortoni-report</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold mb-2 text-slate-600 dark:text-slate-300">2. Configure in <code>playwright.config.ts</code></h3>
                  <pre className="bg-slate-950 dark:bg-black text-slate-200 p-4 rounded-xl overflow-x-auto text-xs font-mono border border-slate-900 leading-relaxed">
                    <code>{codeConfig}</code>
                  </pre>
                </div>
              </div>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* CLI Guide */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800 dark:text-slate-100">
                <Play className="w-5 h-5 text-emerald-500" />
                <span>Using the Ortoni Report CLI</span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Serve and inspect your local reports effortlessly via the CLI tool.
              </p>
              
              <div className="space-y-3">
                <pre className="bg-slate-950 dark:bg-black text-slate-200 p-4 rounded-xl overflow-x-auto text-xs font-mono border border-slate-900">
                  <code>npx ortoni-report show-report</code>
                </pre>
                <p className="text-xs text-slate-500 dark:text-slate-400">Specify directories or ports to serve on:</p>
                <pre className="bg-slate-950 dark:bg-black text-slate-200 p-4 rounded-xl overflow-x-auto text-xs font-mono border border-slate-900">
                  <code>npx ortoni-report show-report --dir custom-folder --file my-report.html --port 3000</code>
                </pre>
              </div>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Donation Support */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800 dark:text-slate-100">
                <Heart className="w-5 h-5 text-red-500" />
                <span>Support the Developer</span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                If Ortoni Report has saved you time or improved your automation reporting workflow, consider buying the creator a coffee or supporting via UPI!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-8 pt-2">
                <a
                  href="https://buymeacoffee.com/letcode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-emerald-600 hover:bg-emerald-700 text-white h-11 px-6 shadow-sm hover:shadow hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Coffee className="w-4 h-4 fill-current" />
                  <span>Buy me a Coffee</span>
                </a>
                
                <div className="flex items-center gap-4 border border-slate-100 dark:border-slate-800 p-3 rounded-2xl bg-white dark:bg-slate-950 shadow-sm">
                  <img
                    src="https://raw.githubusercontent.com/ortoniKC/ortoniKC/refs/heads/main/ortoni.png"
                    alt="UPI Payment QR Code"
                    className="w-24 h-24 rounded-lg"
                  />
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-250 uppercase tracking-wide">Donate via UPI</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 max-w-[150px] leading-relaxed">Scan the QR code to send your support directly.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
    </PageLayout>
  );
};

export default OrtoniProductPage;
