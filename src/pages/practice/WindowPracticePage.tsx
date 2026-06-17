import React from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const WindowPracticePage: React.FC = () => {
  usePageMeta({
    title: "Windows | LetCode with Koushik",
    description: "Practice handling multiple windows and tabs",
    keywords: "selenium window handling, playwright window handling, protractor window handling",
  });

  const learningPoint = [
    "Window Handling concept",
    "close()",
    "quit()",
    "getTitle()",
    "List",
    "Set - LinkedHashSet",
    "Iterator or loop",
  ];

  const openRequestedPopup = () => {
    window.open(
      "/test",
      "test-site",
      "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
    );
  };

  const openRequestedPopup2 = () => {
    window.open(
      "/alert",
      "alert",
      "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
    );
    window.open(
      "/dropdowns",
      "dropdowns",
      "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
    );
  };

  return (
    <PageLayout>
      <PageHeader header="Windows" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="space-y-6">
              {/* Field 1 */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Goto Home
                </label>
                <div className="control">
                  <button
                    id="home"
                    onClick={openRequestedPopup}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white transition-colors"
                  >
                    Open Home Page
                  </button>
                </div>
              </div>

              {/* Field 2 */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Open multiple windows
                </label>
                <div className="control">
                  <button
                    id="multi"
                    onClick={openRequestedPopup2}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-colors bg-transparent"
                  >
                    Multiple windows
                  </button>
                </div>
              </div>

              {/* Instructions */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="content">
                  <ol className="list-decimal pl-5 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                    <li>Click on the home button</li>
                    <li>Goto the newly opened tab</li>
                    <li>Print the title of the page</li>
                    <li>Close the parent window</li>
                    <li>Close the child window</li>
                    <li>Click on the Multiple windows button</li>
                    <li>Print all the window titles</li>
                    <li>Close all the windows</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="window" />
          </div>
          <div className="md:col-span-3">
            <AdsVertical />
          </div>
        </div>
      </section>
      <div className="container mx-auto mt-4">
        <Ads />
      </div>
    </PageLayout>
  );
};

export default WindowPracticePage;