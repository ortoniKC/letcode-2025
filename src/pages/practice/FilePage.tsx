import React, { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const FilePage: React.FC = () => {
  usePageMeta({
    title: "File Upload | LetCode with Koushik",
    description: "Practice handling file uploads and downloads",
    keywords: "selenium file upload, playwright file upload, protractor file upload",
  });

  const [fileName, setFileName] = useState<string>("");

  const learningPoint = [
    "How to download & upload files",
    "ChromeOption class",
    "SetFileDetector",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <PageLayout>
      <PageHeader header="Upload and Download" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg space-y-8">
            {/* Upload Area */}
            <div>
              <h2 className="text-xl font-bold mb-2">Upload</h2>
              <label htmlFor="resume" className="block text-sm text-slate-500 mb-4">
                No file is uploaded, it's a dummy site for learning.
              </label>
              
              <div className="flex items-center space-x-4">
                <label className="flex items-center justify-center border border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 rounded-lg p-6 cursor-pointer bg-slate-50 dark:bg-slate-900 transition-colors w-full">
                  <input
                    id="resume"
                    type="file"
                    name="resume"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <div className="text-center space-y-2">
                    <div className="text-emerald-500">
                      <i className="fa-solid fa-upload text-2xl"></i>
                    </div>
                    <span className="block text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Choose a file…
                    </span>
                  </div>
                </label>
              </div>
              {fileName && (
                <p className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Selected File: {fileName}
                </p>
              )}
            </div>

            {/* Download Area */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-900">
              <h2 className="text-xl font-bold mb-4">Download</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  id="xls"
                  href="/assets/files/sample.xlsx"
                  download="sample.xlsx"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-emerald-600 hover:bg-emerald-700 text-white h-10 px-4 py-2"
                >
                  Download Excel
                </a>
                <a
                  id="pdf"
                  href="/assets/files/sample.pdf"
                  download="sample.pdf"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-emerald-600 hover:bg-emerald-700 text-white h-10 px-4 py-2"
                >
                  Download Pdf
                </a>
                <a
                  id="txt"
                  href="/assets/files/sample.txt"
                  download="sample.txt"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-slate-600 hover:bg-slate-700 text-white h-10 px-4 py-2"
                >
                  Download Text
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="file" />
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

export default FilePage;