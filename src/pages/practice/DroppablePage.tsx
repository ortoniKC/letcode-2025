import React, { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const DroppablePage: React.FC = () => {
  usePageMeta({
    title: "Droppable | LetCode with Koushik",
    description: "Practice the droppable interaction concept",
    keywords: "selenium droppable, playwright droppable, protractor droppable",
  });

  const [sourceList, setSourceList] = useState<string[]>(["Drag me to my target"]);
  const [targetList, setTargetList] = useState<string[]>([]);

  const learningPoint = ["Actions", "dragAndDrop()", "perform()"];

  const handleDragStart = (e: React.DragEvent, idx: number, fromSource: boolean) => {
    e.dataTransfer.setData("text/plain", JSON.stringify({ idx, fromSource }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, toSource: boolean) => {
    e.preventDefault();
    const dataStr = e.dataTransfer.getData("text/plain");
    if (!dataStr) return;

    try {
      const { idx, fromSource } = JSON.parse(dataStr);

      if (fromSource && !toSource) {
        // Drag from source to target
        const item = sourceList[idx];
        setSourceList(sourceList.filter((_, i) => i !== idx));
        setTargetList([...targetList, item]);
      } else if (!fromSource && toSource) {
        // Drag from target to source
        const item = targetList[idx];
        setTargetList(targetList.filter((_, i) => i !== idx));
        setSourceList([...sourceList, item]);
      }
    } catch (err) {
      console.error("Drag and drop parsing error:", err);
    }
  };

  return (
    <PageLayout>
      <PageHeader header="Drop" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Source List */}
              <div
                className="flex flex-col h-[250px] p-4 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, true)}
              >
                <h2 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">
                  Source
                </h2>
                <div className="flex-1 space-y-2">
                  {sourceList.map((item, idx) => (
                    <div
                      key={idx}
                      id="draggable"
                      draggable
                      onDragStart={(e) => handleDragStart(e, idx, true)}
                      className="p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded shadow-sm text-center text-sm font-medium text-slate-800 dark:text-slate-200 cursor-move hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                    >
                      <p>{item}</p>
                    </div>
                  ))}
                  {sourceList.length === 0 && (
                    <div className="h-full flex items-center justify-center text-xs text-slate-400 italic">
                      Empty source
                    </div>
                  )}
                </div>
              </div>

              {/* Target List */}
              <div
                id="droppable"
                className="flex flex-col h-[250px] p-4 border-2 border-dashed border-blue-500 rounded-lg bg-emerald-50/20 dark:bg-slate-900/40"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, false)}
              >
                <h2 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-3 uppercase tracking-wider">
                  Target
                </h2>
                <div className="flex-1 space-y-2">
                  {targetList.map((item, idx) => (
                    <div
                      key={idx}
                      draggable
                      onDragStart={(e) => handleDragStart(e, idx, false)}
                      className="p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded shadow-sm text-center text-sm font-medium text-slate-800 dark:text-slate-200 cursor-move"
                    >
                      <p>{item}</p>
                    </div>
                  ))}
                  {targetList.length === 0 && (
                    <div className="h-full flex items-center justify-center text-xs text-emerald-500/60 dark:text-emerald-400/50 italic">
                      Drop here
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="content">
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  TODO
                </h4>
                <ol className="list-decimal pl-5 text-xs text-slate-500 dark:text-slate-400 space-y-1">
                  <li>Drag the source box and drop it into the target box</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="droppable" />
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

export default DroppablePage;