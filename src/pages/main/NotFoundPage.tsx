import React from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageLayout from "@/components/PageLayout";

export const NotFoundPage: React.FC = () => {
  usePageMeta({
    title: "Page Not Found | LetCode",
    description: "The requested page was not found.",
  });

  return (
    <PageLayout>
      <div className="min-h-[70vh] flex flex-col justify-center items-center">
        <div className="text-center max-w-md">
          <h1 className="text-6xl md:text-8xl font-black text-slate-300 dark:text-slate-800 mb-4 tracking-wider">
            404
          </h1>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            Page Not Found
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
            The page you are looking for does not exist or has been moved to a new route.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md text-sm font-semibold h-11 px-6 btn-primary shadow-sm"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
