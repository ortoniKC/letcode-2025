import React, { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const RadioPracticePage: React.FC = () => {
  usePageMeta({
    title: "Radio Buttons | LetCode with Koushik",
    description: "Practice selecting radio buttons",
    keywords: "selenium radio button, playwright radio button, protractor radio button",
  });

  const [oneAnswer, setOneAnswer] = useState<string>("yes");
  const [confirmOne, setConfirmOne] = useState<string>("");
  const [nobugAnswer, setNobugAnswer] = useState<boolean>(false);
  const [bugAnswer, setBugAnswer] = useState<boolean>(false);
  const [foobar, setFoobar] = useState<string>("notfoo");
  const [plan, setPlan] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);

  const learningPoint = ["click()", "isSelected()", "isEnabled()"];

  return (
    <PageLayout>
      <PageHeader header="Radio &amp; Checkbox" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="space-y-6">
              {/* Field 1 */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Select any one
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                    <input
                      type="radio"
                      name="answer"
                      id="yes"
                      checked={oneAnswer === "yes"}
                      onChange={() => setOneAnswer("yes")}
                      className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                    <input
                      type="radio"
                      name="answer"
                      id="no"
                      checked={oneAnswer === "no"}
                      onChange={() => setOneAnswer("no")}
                      className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              {/* Field 2 */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Confirm you can select only one radio button
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                    <input
                      type="radio"
                      name="one"
                      id="one"
                      checked={confirmOne === "one"}
                      onChange={() => setConfirmOne("one")}
                      className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                    <input
                      type="radio"
                      name="one"
                      id="two"
                      checked={confirmOne === "two"}
                      onChange={() => setConfirmOne("two")}
                      className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              {/* Field 3: "Find the bug" radio name mismatch */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Find the bug
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                    <input
                      type="radio"
                      name="nobug" // Bug: different name
                      id="nobug"
                      checked={nobugAnswer}
                      onChange={(e) => setNobugAnswer(e.target.checked)}
                      className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                    <input
                      type="radio"
                      name="bug" // Bug: different name
                      id="bug"
                      checked={bugAnswer}
                      onChange={(e) => setBugAnswer(e.target.checked)}
                      className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                    />
                    <span>No</span>
                  </label>
                </div>
                <div className="mt-1 text-xs text-amber-600 dark:text-amber-500">
                  * Notice: both buttons can be active due to non-matching radio names (intentional bug).
                </div>
              </div>

              {/* Field 4 */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Find which one is selected
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                    <input
                      type="radio"
                      name="foobar"
                      id="foo"
                      checked={foobar === "foo"}
                      onChange={() => setFoobar("foo")}
                      className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                    />
                    <span>Foo</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                    <input
                      type="radio"
                      name="foobar"
                      id="notfoo"
                      checked={foobar === "notfoo"}
                      onChange={() => setFoobar("notfoo")}
                      className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                    />
                    <span>Bar</span>
                  </label>
                </div>
              </div>

              {/* Field 5 */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Confirm last field is disabled
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                    <input
                      type="radio"
                      name="plan"
                      id="going"
                      checked={plan === "going"}
                      onChange={() => setPlan("going")}
                      className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                    />
                    <span>Going</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                    <input
                      type="radio"
                      name="plan"
                      id="notG"
                      checked={plan === "notG"}
                      onChange={() => setPlan("notG")}
                      className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                    />
                    <span>Not going</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer select-none opacity-50 cursor-not-allowed">
                    <input
                      type="radio"
                      name="plan"
                      id="maybe"
                      disabled
                      className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 cursor-not-allowed"
                    />
                    <span>Maybe</span>
                  </label>
                </div>
              </div>

              {/* Checkboxes 1 */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Find if the checkbox is selected?
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                  />
                  <span>Remember me</span>
                </label>
              </div>

              {/* Checkboxes 2 */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Accept the T&amp;C
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                  />
                  <span>
                    I agree to the <a className="text-emerald-600 dark:text-emerald-400 hover:underline">FAKE terms and conditions</a>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="radio" />
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

export default RadioPracticePage;