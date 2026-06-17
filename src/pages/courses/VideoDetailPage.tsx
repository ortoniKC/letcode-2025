import React from "react";
import { useParams } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import Yt from "@/components/Yt";
import AdsHorizontal from "@/components/Ads";
import NotFoundPage from "@/pages/main/NotFoundPage";
import { Play } from "lucide-react";
import PageLayout from "@/components/PageLayout";

interface VideoEntry {
  selenium: string | null;
  protractors: string | null;
  playwright: string | null;
  title: string;
}

const embedPrefix = "https://www.youtube.com/embed/";

const videos: Record<string, VideoEntry> = {
  edit: {
    selenium: embedPrefix + "ZT-IeKZiy5s",
    protractors: embedPrefix + "4Xd9shK8iOc",
    playwright: embedPrefix + "Slv5fuTrIZg",
    title: "Interact with Inputs",
  },
  button: {
    selenium: embedPrefix + "ovImXEsKz1M",
    protractors: embedPrefix + "u3M6Ofm839c",
    playwright: null,
    title: "Interact with Button",
  },
  dropdowns: {
    selenium: embedPrefix + "AePUqXdnJUo",
    protractors: embedPrefix + "_AIX58lGuFs",
    playwright: embedPrefix + "IubdSQFOdiU",
    title: "Interact with Drop-Downs",
  },
  alert: {
    selenium: embedPrefix + "KOiSz_50rIU",
    protractors: embedPrefix + "VztGNaaBSh4",
    playwright: embedPrefix + "RzBlwacFIl0",
    title: "Interact with Alerts",
  },
  frame: {
    selenium: embedPrefix + "TPolii6kKWo",
    protractors: embedPrefix + "rr7VMTizgGs",
    playwright: embedPrefix + "Vqm-8G81W8w",
    title: "Interact with Frames",
  },
  radio: {
    selenium: null,
    protractors: embedPrefix + "1Ej2Bx8V7mQ",
    playwright: embedPrefix + "340d_Kkl9Eg",
    title: "Interact with radioButton",
  },
  window: {
    selenium: embedPrefix + "YmqHlHpP3Xo",
    protractors: embedPrefix + "N1nYNky7zwk",
    playwright: embedPrefix + "DyHQ3G442jY",
    title: "Interact with Windows",
  },
  elements: {
    selenium: embedPrefix + "AzCzzPWfrl0",
    protractors: embedPrefix + "DND7KaQS2To",
    playwright: embedPrefix + "54OwsiRa_eE",
    title: "Interact with Elements",
  },
  draggable: {
    selenium: embedPrefix + "DnXlb8Toz8Q",
    protractors: embedPrefix + "03xNi6HIbx8",
    playwright: null,
    title: "Interact with Drag And Drop By",
  },
  droppable: {
    selenium: embedPrefix + "0YPbAlPHj9I",
    protractors: embedPrefix + "FavXQLVy4w4",
    playwright: embedPrefix + "0wFkhkdcT8A",
    title: "Interact with Drag And Drop",
  },
  sortable: {
    selenium: null,
    protractors: embedPrefix + "wzMy1uGN9Dg",
    playwright: null,
    title: "Interact with Sortable",
  },
  selectable: {
    selenium: null,
    protractors: embedPrefix + "Kcc9_t-BL2s",
    playwright: null,
    title: "Interact with Selectable",
  },
  webTable: {
    selenium: embedPrefix + "A8DLNSWJdbU",
    protractors: embedPrefix + "qjBEc6FIKoY",
    playwright: null,
    title: "Interact with WebTable",
  },
  advancetable: {
    selenium: null,
    protractors: embedPrefix + "46Fn5g_C1d8",
    playwright: null,
    title: "Interact with AdvancedTable",
  },
  calender: {
    selenium: null,
    protractors: embedPrefix + "WABPZ29p5Hw",
    playwright: null,
    title: "Interact with Calender",
  },
  waits: {
    selenium: null,
    protractors: embedPrefix + "BV6SRxDSr3Q",
    playwright: null,
    title: "Interact with Waits",
  },
  forms: {
    selenium: null,
    protractors: null,
    playwright: null,
    title: "Interact with Forms",
  },
  file: {
    selenium: embedPrefix + "Xg0DVe61kbY",
    protractors: null,
    playwright: embedPrefix + "e8jfjV71E6Q",
    title: "Interact with FileUploads",
  },
  shadow: {
    selenium: embedPrefix + "lj9A73okFb8",
    protractors: null,
    playwright: embedPrefix + "4v8iPJH8_hg",
    title: "Interact with ShadowElements",
  },
  slider: {
    selenium: null,
    protractors: null,
    playwright: embedPrefix + "OKsPOxNYQWI",
    title: "Interact with Slider",
  },
};

export const VideoDetailPage: React.FC = () => {
  const { link } = useParams<{ link: string }>();

  const selectedVideo = link ? videos[link] : undefined;

  usePageMeta({
    title: selectedVideo ? `${selectedVideo.title} | LetCode with Koushik` : "Test Automation Learning | LetCode with Koushik",
    description: "Watch videos on test automation concepts",
    keywords: "selenium tutorial, playwright tutorial, protractor tutorial, API testing",
  });

  if (!selectedVideo) {
    return <NotFoundPage />;
  }

  // Count active tutorials
  const activeCount = [
    selectedVideo.selenium,
    selectedVideo.protractors,
    selectedVideo.playwright,
  ].filter(Boolean).length;

  // Resolve grid columns based on active count
  const gridClass =
    activeCount === 3
      ? "grid-cols-1 md:grid-cols-3"
      : activeCount === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 max-w-xl mx-auto";

  return (
    <PageLayout>
      <PageHeader header={selectedVideo.title} />

        <section className="container mx-auto py-6">
          <div className="max-w-6xl mx-auto space-y-8 relative z-10">

            <div className={`grid ${gridClass} gap-8 mt-6`}>
              {selectedVideo.selenium && (
                <div className="border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 shadow-md shadow-slate-100/50 dark:shadow-none space-y-4">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-100">
                    <Play className="w-4.5 h-4.5 text-emerald-500 fill-current" />
                    <h3 className="text-sm font-bold tracking-tight">
                      Selenium
                    </h3>
                  </div>
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-inner">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={selectedVideo.selenium}
                      title={`${selectedVideo.title} Selenium Tutorial`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {selectedVideo.protractors && (
                <div className="border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 shadow-md shadow-slate-100/50 dark:shadow-none space-y-4">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-100">
                    <Play className="w-4.5 h-4.5 text-teal-500 fill-current" />
                    <h3 className="text-sm font-bold tracking-tight">
                      Protractor
                    </h3>
                  </div>
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-inner">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={selectedVideo.protractors}
                      title={`${selectedVideo.title} Protractor Tutorial`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {selectedVideo.playwright && (
                <div className="border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 shadow-md shadow-slate-100/50 dark:shadow-none space-y-4">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-100">
                    <Play className="w-4.5 h-4.5 text-emerald-500 fill-current" />
                    <h3 className="text-sm font-bold tracking-tight">
                      Playwright
                    </h3>
                  </div>
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-inner">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={selectedVideo.playwright}
                      title={`${selectedVideo.title} Playwright Tutorial`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center pt-6">
              <Yt />
            </div>

            <div className="pt-6">
              <AdsHorizontal />
            </div>
          </div>
        </section>
    </PageLayout>
  );
};

export default VideoDetailPage;
