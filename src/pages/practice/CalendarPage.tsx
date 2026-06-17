import React, { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const CalendarPage: React.FC = () => {
  usePageMeta({
    title: "Calendar | LetCode with Koushik",
    description: "Practice working with date pickers and calendars",
    keywords: "selenium calendar handling, playwright calendar handling, protractor calendar handling",
  });

  const [birthday, setBirthday] = useState<string>("");

  const learningPoint = [
    "How to handle calendar elements",
    "How to set dynamic dates",
    "Java calendar & moment.js",
  ];

  return (
    <PageLayout>
      <PageHeader header="Date Picker" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="space-y-4">
              <div className="field">
                <label htmlFor="birthday" className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Select your Birthday:
                </label>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="date"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                    id="birthday"
                    name="birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </form>
                {birthday && (
                  <p className="block text-sm font-semibold mt-4 text-slate-800 dark:text-slate-200 label pt-3">
                    {birthday}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="calender" />
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

export default CalendarPage;