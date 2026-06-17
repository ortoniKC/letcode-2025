import React, { useState, useRef, useEffect } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const DraggablePage: React.FC = () => {
  usePageMeta({
    title: "Draggable | LetCode with Koushik",
    description: "Practice the draggable interaction concept",
    keywords: "selenium draggable, playwright draggable, protractor draggable",
  });

  const [position, setPosition] = useState({ x: 40, y: 40 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const boxStart = useRef({ x: 0, y: 0 });

  const boundaryRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const learningPoint = ["Actions", "dragAndDropBy()", "perform()"];

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only drag with left click
    if (e.button !== 0) return;

    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    boxStart.current = { x: position.x, y: position.y };
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;

      let newX = boxStart.current.x + deltaX;
      let newY = boxStart.current.y + deltaY;

      // Bound clamping
      if (boundaryRef.current && boxRef.current) {
        const boundary = boundaryRef.current.getBoundingClientRect();
        const box = boxRef.current.getBoundingClientRect();

        const maxX = boundary.width - box.width - 8; // Adjust for borders
        const maxY = boundary.height - box.height - 8;

        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));
      }

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <PageLayout>
      <PageHeader header="Drag" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="field">
              <label className="block text-sm font-semibold mb-3 text-slate-800 dark:text-slate-200">
                Let's go for a ride 😉 drag me around
              </label>

              {/* Boundary */}
              <div ref={boundaryRef} className="example-boundary bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-blue-500 rounded-lg h-[300px] w-full relative overflow-hidden">
                {/* Draggable Box */}
                <div
                  ref={boxRef}
                  id="sample-box"
                  className="example-box bg-emerald-600 text-white rounded p-3 select-none flex items-center justify-center text-center text-xs font-medium shadow-md cursor-move"
                  style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                  }}
                  onMouseDown={handleMouseDown}
                >
                  <h3 id="header" className="pointer-events-none">
                    I can only be dragged within the dotted container
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="draggable" />
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

export default DraggablePage;