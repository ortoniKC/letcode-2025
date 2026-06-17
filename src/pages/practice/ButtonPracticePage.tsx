import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const ButtonPracticePage: React.FC = () => {
  usePageMeta({
    title: "Buttons | LetCode with Koushik",
    description: "Practice button interactions and events",
    keywords: "selenium button click, playwright button click, protractor button click",
  });

  const [holdName, setHoldName] = useState<string>("Hold!");
  const timeoutRef = useRef<any>(null);

  const learningPoint = [
    "click()",
    "driver navigation commands",
    "getLocation()",
    "getCss()",
    "getSize()",
    "isEnabled()",
  ];

  const handleMouseDown = () => {
    timeoutRef.current = setTimeout(() => {
      setHoldName("has been long pressed");
      timeoutRef.current = null;
    }, 500);
  };

  const handleMouseUp = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  return (
    <PageLayout>
      <PageHeader header="Button" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="space-y-6">
              {/* Field 1 */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Goto Home and come back here using driver commands
                </label>
                <div className="control">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                    id="home"
                  >
                    Goto Home
                  </Link>
                </div>
              </div>

              {/* Field 2 */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Get the X &amp; Y co-ordinates
                </label>
                <div className="control">
                  <button
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-colors bg-transparent"
                    id="position"
                  >
                    Find Location
                  </button>
                </div>
              </div>

              {/* Field 3 */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Find the color of the button
                </label>
                <div className="control">
                  <button
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white transition-colors"
                    id="color"
                  >
                    What is my color?
                  </button>
                </div>
              </div>

              {/* Field 4 */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Find the height &amp; width of the button
                </label>
                <div className="control">
                  <button
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-12 px-6 bg-green-600 hover:bg-green-700 text-white transition-colors"
                    id="property"
                  >
                    How tall &amp; fat I am?
                  </button>
                </div>
              </div>

              {/* Field 5 */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Confirm button is disabled
                </label>
                <div className="control">
                  <button
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-slate-200 text-slate-400 cursor-not-allowed dark:bg-slate-800 dark:text-slate-600"
                    title="Disabled button"
                    id="isDisabled"
                    disabled
                  >
                    Disabled
                  </button>
                </div>
              </div>

              {/* Field 6 */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Click and Hold Button
                </label>
                <div className="control">
                  <button
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-14 px-6 bg-teal-600 hover:bg-teal-700 text-white transition-colors"
                    id="isDisabled" // Preserved original duplicate ID
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                  >
                    <div>
                      <h2>Button {holdName}</h2>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="button" />
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

export default ButtonPracticePage;