import React, { useRef } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const FramePracticePage: React.FC = () => {
  usePageMeta({
    title: "Frame | LetCode with Koushik",
    description: "Practice switching between frames",
    keywords: "selenium frame switching, playwright frame switching, protractor frame switching",
  });

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const learningPoint = [
    "Target Locator",
    "switchTo()",
    "defaultContent()",
    "parentFrame()",
    "Overloading concept - JAVA",
  ];

  return (
    <PageLayout>
      <PageHeader header="Frame" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="field">
              <label className="block text-sm font-semibold mb-3 text-slate-800 dark:text-slate-200">
                Let's go for a frame practice 😉
              </label>
              <div className="border rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-900">
                <iframe
                  ref={iframeRef}
                  src="/frameui"
                  id="firstFr"
                  name="firstFr"
                  className="w-full h-[550px] block border-none"
                  title="First Frame"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="frame" />
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

export default FramePracticePage;