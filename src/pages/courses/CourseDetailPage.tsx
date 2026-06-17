import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getCourseById } from "@/services/courseData";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import Yt from "@/components/Yt";
import AdsHorizontal from "@/components/Ads";
import NotFoundPage from "@/pages/main/NotFoundPage";
import { Play } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const course = id ? getCourseById(id) : undefined;

  usePageMeta({
    title: course ? `${course.title} | LetCode with Koushik` : "Course | LetCode with Koushik",
    description: course ? course.shortDescription : "Explore detailed course content",
    keywords: "LetCode course, automation learning, testing tutorials",
  });

  if (!course) {
    return <NotFoundPage />;
  }

  return (
    <PageLayout>
      <PageHeader header={course.title} />

        <section className="container mx-auto py-6">
          <div className="max-w-5xl mx-auto space-y-8 relative z-10">
            <div className="text-center">
              <p className="text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                {course.shortDescription}
              </p>
            </div>

            {/* Playlists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {course.englishPlaylist && (
                <div className="border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 shadow-md shadow-slate-100/50 dark:shadow-none space-y-4">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-100">
                    <Play className="w-4.5 h-4.5 text-emerald-500 fill-current" />
                    <h2 className="text-base font-bold tracking-tight">
                      LetCode Playlist (English)
                    </h2>
                  </div>
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-inner">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/videoseries?list=${course.englishPlaylist}`}
                      title={`${course.title} English Playlist`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {course.tamilPlaylist && (
                <div className="border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 shadow-md shadow-slate-100/50 dark:shadow-none space-y-4">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-100">
                    <Play className="w-4.5 h-4.5 text-teal-500 fill-current" />
                    <h2 className="text-base font-bold tracking-tight">
                      Kurimurai Playlist (Tamil)
                    </h2>
                  </div>
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-inner">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/videoseries?list=${course.tamilPlaylist}`}
                      title={`${course.title} Tamil Playlist`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center py-4">
              <Yt />
            </div>

            <hr className="border-slate-200/60 dark:border-slate-800/60" />

            {/* Description */}
            {course.description && (
              <article className="prose dark:prose-invert max-w-none border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-8 shadow-md shadow-slate-100/50 dark:shadow-none">
                <ReactMarkdown>{course.description}</ReactMarkdown>
              </article>
            )}

            <div className="pt-6">
              <AdsHorizontal />
            </div>
          </div>
        </section>
    </PageLayout>
  );
};

export default CourseDetailPage;
