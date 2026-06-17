import React from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import AdsHorizontal from "@/components/Ads";
import PageHeader from "@/components/PageHeader";
import { HelpCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";

interface InterviewEntry {
  title: string;
  datavid: string;
  vid: string;
  Question1: string;
  Question2: string;
  Question3: string;
}

const allquestions: InterviewEntry[] = [
  {
    title: "Q & A Part 1",
    datavid: "selenium-interview-videos-part1",
    vid: "hQvU3DW8T_k",
    Question1: "In a table, there are few items with prices, How do you sum up all the prices?",
    Question2: "How do you click on an element providing the property like it has a name & title?",
    Question3: "When you click on a button, a text appears on the screen, let’s say it will appear after 10, 20 seconds, or even 1 minute. So how do you handle this situation?",
  },
  {
    title: "Q & A Part 2",
    datavid: "selenium-interview-videos-part2",
    vid: "i-t7COgw7_o",
    Question1: "How to switch between 2 tabs? Is tab or window are same?",
    Question2: "Difference between Checked and Unchecked Exception?",
    Question3: "Can you explain the concept of overloading and override?",
  },
  {
    title: "Q & A Part 3",
    datavid: "selenium-interview-videos-part3",
    vid: "BLhHxj9YqLw",
    Question1: "How to prevent a method from override?",
    Question2: "What is Given, When & Then ?",
    Question3: "What is the output ?",
  },
  {
    title: "Q & A Part 4",
    datavid: "selenium-interview-videos-part4",
    vid: "aKEK5ly5k0c",
    Question1: "Name few exception that you faced in automation?",
    Question2: "When we cannot use @FindBY?",
    Question3: "Write a program to find the largest number in the given array?",
  },
  {
    title: "Q & A Part 5",
    datavid: "selenium-interview-videos-part5",
    vid: "E8CU1Wsemwk",
    Question1: "What is the difference between close and quit?",
    Question2: "When we will get failure and skip in TestNG?",
    Question3: "What will be the output?",
  },
  {
    title: "Q & A Part 6",
    datavid: "selenium-interview-videos-part6",
    vid: "m2K9yY_4O_0",
    Question1: "Where do you use Enum in your framework?",
    Question2: "How to print all the dropdown values?",
    Question3: "How to print the page title without using getTitle function?",
  },
  {
    title: "Q & A Part 7",
    datavid: "selenium-interview-videos-part6",
    vid: "WkjGgWhBWTw",
    Question1: "There is an alert with 4 buttons OK, Cancel, Yes, No. How do you handle it",
    Question2: "You are doing a click action using Selenium, After the click no response in the UI. What you’ll do?",
    Question3: "As soon as you load the QA it’s asking for username and password in the Alert. How to handle this?",
  },
];

export const InterviewPage: React.FC = () => {
  usePageMeta({
    title: "Interview Questions | LetCode with Koushik",
    description: "Practice common automation testing interview questions",
    keywords: "selenium interview questions, playwright interview questions, protractor interview questions",
  });

  return (
    <PageLayout>
      <PageHeader header="Interview Q & A" />

      <section className="container mx-auto py-6">
          <div className="max-w-6xl mx-auto space-y-8 relative z-10">
            <div className="text-center mb-8">
              <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
                Learn common test automation concepts to crack your dream job!
              </p>
            </div>

            <div className="my-6">
              <AdsHorizontal />
            </div>

            <div className="space-y-8">
              {allquestions.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 shadow-md shadow-slate-100/50 dark:shadow-none hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  {/* Questions */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2.5 mb-2 pb-2.5 border-b border-slate-100 dark:border-slate-800/80">
                      <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      <h2 className="text-base font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                        {item.title}
                      </h2>
                    </div>

                    <div className="space-y-3 pl-1">
                      {[item.Question1, item.Question2, item.Question3].map((q, qIdx) => (
                        <div key={qIdx} className="flex gap-3 items-start">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100/60 dark:border-emerald-900/40 font-bold text-[10px] flex items-center justify-center mt-0.5">
                            {qIdx + 1}
                          </span>
                          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
                            {q}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Video embed */}
                  {item.vid && (
                    <div className="lg:col-span-5">
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-inner">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${item.vid}`}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
      </section>
    </PageLayout>
  );
};

export default InterviewPage;
