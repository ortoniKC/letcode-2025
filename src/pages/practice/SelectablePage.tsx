import React, { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const SelectablePage: React.FC = () => {
  usePageMeta({
    title: "Selectable | LetCode with Koushik",
    description: "Practice selecting and interacting with selectable elements",
    keywords: "selenium selectable elements, playwright selectable elements, protractor selectable elements",
  });

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const items = [
    "Playwright",
    "Kurimurai",
    "Selenium",
    "Protractor",
    "Appium",
    "TestNg",
    "Postman",
    "Cypress",
    "Webdriver.io",
    "LetCode",
  ];

  const learningPoint = ["Actions", "Mouse Actions()", "Keyboard Actions"];

  const toggleSelection = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const isSelected = (item: string) => selectedItems.includes(item);

  return (
    <PageLayout>
      <PageHeader header="Selectable" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="field">
              <label className="block text-sm font-semibold mb-3 text-slate-800 dark:text-slate-200">
                Let's select 😉 all
              </label>
              <div id="container" className="ui-container">
                <div className="list-container flex flex-wrap gap-2">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => toggleSelection(item)}
                      className={`w-[250px] p-3 border rounded-md cursor-pointer transition-all duration-150 select-none text-sm ${
                        isSelected(item)
                          ? "selected bg-blue-100 border-blue-400 text-blue-900 font-bold dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-200"
                          : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="selectable" />
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

export default SelectablePage;