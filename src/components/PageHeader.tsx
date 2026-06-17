import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, LayoutGrid, BookOpen, Layers, Home } from "lucide-react";

interface PageHeaderProps {
  header: string;
  description?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ header, description }) => {
  const location = useLocation();
  const path = location.pathname;

  let parentName = "Workspace";
  let parentLink = "/test";
  let ParentIcon = LayoutGrid;

  if (path === "/courses") {
    parentName = "Home";
    parentLink = "/";
    ParentIcon = Home;
  } else if (path.startsWith("/course") || path.startsWith("/video")) {
    parentName = "Courses";
    parentLink = "/courses";
    ParentIcon = BookOpen;
  } else if (path.startsWith("/product")) {
    parentName = "Products";
    parentLink = "/";
    ParentIcon = Layers;
  } else if (
    path.startsWith("/pw-quiz") ||
    path.startsWith("/interview") ||
    path.startsWith("/test-practice")
  ) {
    parentName = "Home";
    parentLink = "/";
    ParentIcon = Home;
  }

  return (
    <div className="relative overflow-hidden bg-slate-50/60 dark:bg-slate-950/40 border-b border-slate-200/60 dark:border-slate-800/60 backdrop-blur-sm">
      {/* Visual background accent */}
      <div className="absolute top-0 right-0 w-[250px] sm:w-[350px] h-full bg-gradient-to-l from-emerald-500/5 dark:from-emerald-500/10 to-transparent pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none -z-10" />

      <div className="container mx-auto py-5 md:py-6 flex flex-col gap-2">
        {/* Breadcrumbs */}
        <nav
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400"
          aria-label="Breadcrumb"
        >
          <Link
            to={parentLink}
            className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-150"
          >
            <ParentIcon className="w-3.5 h-3.5 shrink-0" />
            <span>{parentName}</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0" />
          <span className="text-slate-800 dark:text-slate-200 truncate max-w-[200px] sm:max-w-none">
            {header}
          </span>
        </nav>

        {/* Title */}
        <div className="relative pl-4">
          <div className="absolute left-0 top-1 bottom-1 w-1 bg-gradient-to-b from-emerald-600 to-teal-500 dark:from-emerald-500 dark:to-teal-400 rounded-full" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-tight">
            {header}
          </h1>
          {description && (
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed max-w-xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
