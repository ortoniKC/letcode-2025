import React from "react";
import { Link } from "react-router-dom";
import { coursesData } from "@/services/courseData";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import AdsHorizontal from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const CoursesMainPage: React.FC = () => {
  usePageMeta({
    title: "Courses | LetCode with Koushik",
    description: "Free courses offered by LetCode with Koushik",
    keywords: "free test automation course, best automation course, free playwright, selenium",
  });

  return (
    <PageLayout>
      <PageHeader header="Courses" />
        
        <section className="container mx-auto py-6">
          <div className="text-center mb-8">
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
              Explore our available free courses on YouTube
            </p>
          </div>

          <div className="my-6">
            <AdsHorizontal />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {coursesData.map((course) => (
              <div
                key={course.id}
                className="flex flex-col justify-between border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none hover:shadow-lg transition-all duration-300 p-6 hover:-translate-y-0.5 group"
              >
                <div className="space-y-3">
                  {/* Language Badges */}
                  <div className="flex gap-2">
                    {course.englishPlaylist && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100/60 dark:border-emerald-900/40">
                        🇬🇧 English
                      </span>
                    )}
                    {course.tamilPlaylist && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border border-teal-100/60 dark:border-teal-900/40">
                        🇮🇳 Tamil
                      </span>
                    )}
                  </div>

                  <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {course.title}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {course.shortDescription}
                  </p>
                </div>
                
                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800/80">
                  <Link
                    to={`/course/${course.id}`}
                    className="w-full inline-flex items-center justify-center rounded-xl text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-emerald-600 hover:bg-emerald-700 text-white h-9 px-4 shadow-sm hover:shadow active:scale-[0.98]"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
    </PageLayout>
  );
};

export default CoursesMainPage;
