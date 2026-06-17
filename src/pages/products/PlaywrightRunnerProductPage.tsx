import React from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import AdsVertical from "@/components/Ads";
import { Terminal, Download, Play, Settings, Layers, ToggleLeft, Info } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const PlaywrightRunnerProductPage: React.FC = () => {
  usePageMeta({
    title: "Playwright Runner VS Code Extension | LetCode with Koushik",
    description: "Run Playwright & Cucumber tests with one click. A custom VS Code extension with environment selectors and code lenses.",
    keywords: "playwright runner, vscode extension, cucumber runner, sdet vscode tools",
  });

  const configCode = `"ENV_NAME": "TEST_ENV=stagingNational \${--config=play.config.ts --headed}"`;

  return (
    <PageLayout>
        <section className="container mx-auto">
          <div className="max-w-4xl mx-auto border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-8 space-y-8 transition-shadow duration-300 hover:shadow-lg">
            
            {/* Header Title Banner */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/50 dark:bg-emerald-950/30 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <ToggleLeft className="w-3.5 h-3.5" />
                <span>VS Code Editor Extension</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Playwright Runner
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Run Playwright tests and Cucumber scenarios directly from your code files with single-click code lens indicators.
              </p>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Note: Official vs Community Tool */}
            <div className="p-4 rounded-xl border border-blue-200/50 dark:border-blue-900/50 bg-blue-50/40 dark:bg-blue-950/20 text-slate-700 dark:text-slate-300 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-blue-600 dark:text-blue-400">
                <Info className="w-4 h-4 shrink-0" />
                <span>Important Extension Guide</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                Microsoft provides an official <strong>"Playwright Test for VS Code"</strong> extension containing built-in tracing, native Test Explorer tabs, and test generation. Koushik's community-driven <strong>"Playwright Runner"</strong> is an excellent choice if you specifically require <strong>integrated environment selectors</strong> in the sidebar activity view, or run hybrid <strong>Cucumber features & scenarios</strong> directly.
              </p>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Core Usage Flow */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800 dark:text-slate-100">
                  <Play className="w-5 h-5 text-emerald-500" />
                  <span>Test Execution</span>
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">Playwright Lenses</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Automatically detects test files and displays a "Run Playwright Test" indicator directly above your test blocks.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">Cucumber Scenarios</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Detects feature scenarios and scenario outlines inside your Cucumber files and appends the scenario name to your execution scripts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800 dark:text-slate-100">
                  <Layers className="w-5 h-5 text-emerald-500" />
                  <span>Environment Selection</span>
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">Activity Bar Tree View</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Access the environment selector tree in the activity view to pick Dev, Staging, or Prod as your active runtime target.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">Custom variables</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Append configuration arguments dynamically by adding your own key-values inside `settings.json`.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Settings config snippet */}
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-100">
                <Settings className="w-5 h-5 text-emerald-500" />
                <span>Configuration in Settings JSON</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
                Add environment profiles inside your VS Code settings to run configurations on clicking the code lenses:
              </p>
              <pre className="bg-slate-950 dark:bg-black text-slate-200 p-4 rounded-xl overflow-x-auto text-xs font-mono border border-slate-900 leading-relaxed">
                <code>{configCode}</code>
              </pre>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Actions / Get Started */}
            <div>
              <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">Get Started</h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=ortoni.ortoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-emerald-600 hover:bg-emerald-700 text-white h-11 px-5 shadow-sm hover:shadow hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Extension</span>
                </a>
              </div>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Visual Guide Settings Image */}
            <div>
              <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">Setup Preview</h2>
              <div className="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow bg-white p-2 max-w-xl">
                <img
                  src="https://raw.githubusercontent.com/ortoniKC/playwright-runner-vscode-extension/master/Set%20the%20environment.png"
                  alt="VS Code Settings JSON example"
                  className="max-w-full h-auto rounded opacity-90"
                />
              </div>
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Prerequisites */}
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-100">
                <Terminal className="w-5 h-5 text-emerald-500" />
                <span>Prerequisites</span>
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                <li>Make sure to use GitBash as your default VS Code shell on Windows platforms.</li>
                <li>Ensure a valid `playwright.config.ts` (or `.js`) is present in the workspace root.</li>
                <li>Configure the test script search paths using the `testMatch` parameter inside the config.</li>
                <li>If using Cucumber scenarios, configure step definitions to parse step parameters.</li>
              </ul>
            </div>

            {/* Ads vertical */}
            <div className="my-2">
              <AdsVertical />
            </div>

            {/* Enjoy title block */}
            <hr className="border-slate-200/60 dark:border-slate-800/60" />
            <div className="text-center py-2">
              <h2 className="text-2xl font-black text-emerald-600 dark:text-emerald-400 tracking-wider">ENJOY CODING!</h2>
            </div>

          </div>
        </section>
    </PageLayout>
  );
};

export default PlaywrightRunnerProductPage;
