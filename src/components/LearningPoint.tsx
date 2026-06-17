import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, CheckCircle2, Play } from "lucide-react";

interface LearningPointProps {
  list: string[];
  link: string;
}

export const LearningPoint: React.FC<LearningPointProps> = ({ list, link }) => {
  // Map link to match routes/keys in VideoDetailPage
  const videoKey = link === "table" ? "webTable" : link === "calendar" ? "calender" : link;

  return (
    <div className="border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-5 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none space-y-5">
      <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-3">
        <BookOpen className="w-5 h-5 text-emerald-500" />
        <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
          Learning Points
        </h3>
      </div>
      
      <ul className="space-y-3">
        {list.map((point, index) => (
          <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
            <span className="leading-snug">{point}</span>
          </li>
        ))}
      </ul>

      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
        {/* Watch Lesson Link */}
        <Link
          to={`/video/${videoKey}`}
          className="w-full flex items-center justify-center gap-2 rounded-lg text-xs font-bold h-9 px-3 bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all duration-200 hover:shadow"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Watch Tutorial</span>
        </Link>

        {/* Practice ID Identifier */}
        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 text-center tracking-wide uppercase">
          Practice ID: <code className="bg-slate-100 dark:bg-slate-800/80 px-1.5 py-0.5 rounded text-emerald-600 dark:text-emerald-400 text-xs font-mono ml-1">{link}</code>
        </div>
      </div>
    </div>
  );
};

export default LearningPoint;

