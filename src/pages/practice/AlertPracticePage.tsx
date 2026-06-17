import React, { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const AlertPracticePage: React.FC = () => {
  usePageMeta({
    title: "Alert | LetCode with Koushik",
    description: "Practice handling alert pop-ups",
    keywords: "selenium alert handling, playwright alert handling, protractor alert handling",
  });

  const [confirmHappy, setConfirmHappy] = useState<boolean | null>(null);
  const [promptName, setPromptName] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const learningPoint = [
    "switchTo()",
    "accept()",
    "dismiss()",
    "getText()",
    "sendKeys()",
    "Sweet Alert",
  ];

  const handleSimpleAlert = () => {
    alert("Hey! Welcome to LetCode");
  };

  const handleConfirmAlert = () => {
    const isHappy = window.confirm("Are you happy with LetCode?");
    setConfirmHappy(isHappy);
  };

  const handlePromptAlert = () => {
    const name = window.prompt("Enter your name");
    if (name !== null) {
      setPromptName(name);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageLayout>
      <PageHeader header="Alert" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="space-y-6">
              {/* Simple Alert */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Accept the Alert
                </label>
                <div className="control">
                  <button
                    onClick={handleSimpleAlert}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                    id="accept"
                  >
                    Simple Alert
                  </button>
                </div>
              </div>

              {/* Confirm Alert */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Dismiss the Alert &amp; print the alert text
                </label>
                <div className="control">
                  <button
                    onClick={handleConfirmAlert}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-colors bg-transparent"
                    id="confirm"
                  >
                    Confirm Alert
                  </button>
                </div>
                {confirmHappy !== null && (
                  <div className="mt-3 text-xs text-slate-500">
                    User selected: {confirmHappy ? "OK (True)" : "Cancel (False)"}
                  </div>
                )}
              </div>

              {/* Prompt Alert */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Type your name &amp; accept
                </label>
                <div className="control">
                  <button
                    onClick={handlePromptAlert}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white transition-colors"
                    id="prompt"
                  >
                    Prompt Alert
                  </button>
                  {promptName && (
                    <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 dark:bg-emerald-950/20 dark:border-blue-800/30 dark:text-emerald-400 rounded-md">
                      <p id="myName" className="text-sm font-medium">Your name is: {promptName}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Sweet Alert */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Sweet alert
                </label>
                <div className="control">
                  <button
                    onClick={openModal}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-green-600 hover:bg-green-700 text-white transition-colors"
                    id="modern"
                  >
                    Modern Alert
                  </button>
                </div>
              </div>

              {/* Custom Modal for Sweet Alert compliance */}
              <div className={`modal ${isModalOpen ? "is-active block" : "hidden"} fixed inset-0 z-[100] flex items-center justify-center`}>
                <div className="modal-background absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={closeModal}></div>
                <div className="modal-content relative bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl max-w-md w-full p-6 shadow-xl z-10 mx-4">
                  <div className="card">
                    <div className="card-content">
                      <p className="text-lg font-bold text-slate-800 dark:text-slate-100">
                        Modern Alert - Some people address me as sweet alert as well
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="modal-close absolute top-3 right-3 text-slate-400 hover:text-slate-600 text-2xl font-semibold leading-none focus:outline-none"
                    aria-label="close"
                  >
                    &times;
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="alert" />
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

export default AlertPracticePage;