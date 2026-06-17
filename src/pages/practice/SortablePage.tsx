import React, { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const SortablePage: React.FC = () => {
  usePageMeta({
    title: "Sortable | LetCode with Koushik",
    description: "Practice the sortable table concept",
    keywords: "selenium sortable table, playwright sortable table, protractor sortable table",
  });

  const [todo, setTodo] = useState<string[]>([
    "Get to work",
    "Pick up groceries",
    "Go home",
    "Fall asleep",
  ]);

  const [done, setDone] = useState<string[]>([
    "Get up",
    "Brush teeth",
    "Take a shower",
    "Check e-mail",
    "Walk dog",
  ]);

  const learningPoint = [
    "Actions",
    "getLocation()",
    "moveToElement()",
    "moveByOffset()",
  ];

  const handleDragStart = (e: React.DragEvent, index: number, source: "todo" | "done") => {
    e.dataTransfer.setData("text/plain", JSON.stringify({ index, source }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetContainer: "todo" | "done", targetIdx?: number) => {
    e.preventDefault();
    const dataStr = e.dataTransfer.getData("text/plain");
    if (!dataStr) return;

    try {
      const { index: sourceIdx, source: sourceContainer } = JSON.parse(dataStr);

      const sourceList = sourceContainer === "todo" ? [...todo] : [...done];
      const targetList = targetContainer === "todo" ? [...todo] : [...done];

      const item = sourceList[sourceIdx];

      // If dragging within the same list
      if (sourceContainer === targetContainer) {
        const list = [...sourceList];
        // Remove from old index
        list.splice(sourceIdx, 1);
        // Insert at new index
        const insertIdx = targetIdx !== undefined ? targetIdx : list.length;
        list.splice(insertIdx, 0, item);

        if (targetContainer === "todo") {
          setTodo(list);
        } else {
          setDone(list);
        }
      } else {
        // Dragging to a different list
        // Remove from source
        sourceList.splice(sourceIdx, 1);
        // Insert into target
        const insertIdx = targetIdx !== undefined ? targetIdx : targetList.length;
        targetList.splice(insertIdx, 0, item);

        if (sourceContainer === "todo") {
          setTodo(sourceList);
          setDone(targetList);
        } else {
          setDone(sourceList);
          setTodo(targetList);
        }
      }
    } catch (err) {
      console.error("Sortable drag and drop error:", err);
    }
  };

  return (
    <PageLayout>
      <PageHeader header="Sort" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* To do Container */}
              <div
                className="flex flex-col p-4 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "todo")}
              >
                <h2 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-3 uppercase tracking-wider">
                  To do
                </h2>
                <div className="flex-1 space-y-2">
                  {todo.map((item, idx) => (
                    <div
                      key={idx}
                      id="sample-box1" // Preserved original selector ID
                      draggable
                      onDragStart={(e) => handleDragStart(e, idx, "todo")}
                      onDragOver={handleDragOver}
                      onDrop={(e) => {
                        e.stopPropagation();
                        handleDrop(e, "todo", idx);
                      }}
                      className="p-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded shadow-sm text-sm font-medium text-slate-800 dark:text-slate-300 cursor-move hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                  {todo.length === 0 && (
                    <div className="h-full min-h-[100px] flex items-center justify-center text-xs text-slate-400 italic">
                      No tasks remaining!
                    </div>
                  )}
                </div>
              </div>

              {/* Done Container */}
              <div
                className="flex flex-col p-4 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "done")}
              >
                <h2 className="text-sm font-bold text-green-600 dark:text-green-400 mb-3 uppercase tracking-wider">
                  Done
                </h2>
                <div className="flex-1 space-y-2">
                  {done.map((item, idx) => (
                    <div
                      key={idx}
                      id="sample-box1" // Preserved original selector ID
                      draggable
                      onDragStart={(e) => handleDragStart(e, idx, "done")}
                      onDragOver={handleDragOver}
                      onDrop={(e) => {
                        e.stopPropagation();
                        handleDrop(e, "done", idx);
                      }}
                      className="p-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded shadow-sm text-sm font-medium text-slate-800 dark:text-slate-300 cursor-move hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                  {done.length === 0 && (
                    <div className="h-full min-h-[100px] flex items-center justify-center text-xs text-slate-400 italic">
                      Empty list
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Todo block instructions */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="content">
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  TODO
                </h4>
                <ol className="list-decimal pl-5 text-xs text-slate-500 dark:text-slate-400 space-y-1">
                  <li>Move the content from to do to done</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="sortable" />
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

export default SortablePage;