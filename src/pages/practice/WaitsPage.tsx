import React from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const WaitsPage: React.FC = () => {
  usePageMeta({
    title: "Waits | LetCode with Koushik",
    description: "Practice handling waits and synchronization",
    keywords: "selenium waits, playwright waits, protractor waits",
  });

  const learningPoint = ["ExpectedConditions", "Waits for an alert"];

  const triggerAlert = () => {
    setTimeout(() => {
      alert("Finally I'm here, just to say Hi :)");
    }, 4500);
  };

  return (
    <PageLayout>
      <PageHeader header="Wait" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="accept" className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Accept the Alert
                </label>
                <div className="control">
                  <button
                    onClick={triggerAlert}
                    className="inline-flex items-center justify-center rounded-md text-sm font-semibold h-10 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                    id="accept"
                  >
                    Simple Alert
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="content">
                  <h4 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    TODO
                  </h4>
                  <ol className="list-decimal pl-5 text-xs text-slate-500 dark:text-slate-400 space-y-1">
                    <li>Accept the alert</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="waits" />
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

export default WaitsPage;