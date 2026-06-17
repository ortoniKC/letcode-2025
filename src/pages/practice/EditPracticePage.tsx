import React, { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const EditPracticePage: React.FC = () => {
  usePageMeta({
    title: "Edit Fields | LetCode with Koushik",
    description: "Practice interacting with input fields",
    keywords: "selenium input field, playwright input field, protractor input field",
  });

  const [fullName, setFullName] = useState<string>("");
  const [joinVal, setJoinVal] = useState<string>("I am good");
  const [getMeVal, setGetMeVal] = useState<string>("ortonikc");
  const [clearVal, setClearVal] = useState<string>("Koushik Chatterjee");

  const learningPoint = [
    "sendKeys()",
    "Keyboard TAB",
    "getAttribute()",
    "clear()",
    "isEnabled()",
  ];

  return (
    <PageLayout>
      <PageHeader header="Input" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="space-y-6">
              {/* Field 1 */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Enter your full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter first &amp; last name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  autoFocus
                />
              </div>

              {/* Field 2 */}
              <div>
                <label htmlFor="join" className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Append a text and press keyboard tab
                </label>
                <input
                  id="join"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter"
                  value={joinVal}
                  onChange={(e) => setJoinVal(e.target.value)}
                />
              </div>

              {/* Field 3 */}
              <div>
                <label htmlFor="getMe" className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  What is inside the text box
                </label>
                <input
                  id="getMe"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter"
                  value={getMeVal}
                  onChange={(e) => setGetMeVal(e.target.value)}
                />
              </div>

              {/* Field 4 */}
              <div>
                <label htmlFor="clearMe" className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Clear the text
                </label>
                <input
                  id="clearMe"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter"
                  value={clearVal}
                  onChange={(e) => setClearVal(e.target.value)}
                />
              </div>

              {/* Field 5 */}
              <div>
                <label htmlFor="noEdit" className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Confirm edit field is disabled
                </label>
                <input
                  id="noEdit"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-slate-100 dark:bg-slate-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 cursor-not-allowed opacity-50"
                  placeholder="Enter"
                  disabled
                />
              </div>

              {/* Field 6 */}
              <div>
                <label htmlFor="dontwrite" className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Confirm text is readonly
                </label>
                <input
                  id="dontwrite"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                  value="This text is readonly"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="edit" />
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

export default EditPracticePage;