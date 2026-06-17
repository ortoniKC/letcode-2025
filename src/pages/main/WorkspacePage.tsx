import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import Ads from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

const imagepath = "/assets/mainicons/";

interface WorkspaceItem {
  header: string;
  title: string;
  desc: string;
  icon: string;
  alt: string;
  link: string;
  badgeColor?: string;
}

const menuItems: WorkspaceItem[] = [
  {
    header: "POM",
    title: "Page Object Model",
    desc: "Practice Page Object Model (POM) with a fully responsive fake store sandbox.",
    icon: imagepath + "edit.svg",
    alt: "product",
    link: "/home",
    badgeColor: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/50",
  },
  {
    header: "Input",
    title: "Edit Fields",
    desc: "Interact with text, read-only, disabled, append, and clearable input fields.",
    icon: imagepath + "edit.svg",
    alt: "edit",
    link: "/edit",
    badgeColor: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/50",
  },
  {
    header: "Button",
    title: "Click Actions",
    desc: "Test normal click, long hold click, double click, and status disabled buttons.",
    icon: imagepath + "buttons.svg",
    alt: "button",
    link: "/button",
    badgeColor: "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border-indigo-200/50 dark:border-indigo-900/50",
  },
  {
    header: "Select",
    title: "Drop-Down",
    desc: "Select single values, multiple choices, search queries, and match verification.",
    icon: imagepath + "select.svg",
    alt: "select",
    link: "/dropdowns",
    badgeColor: "bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 border-purple-200/50 dark:border-purple-900/50",
  },
  {
    header: "Alert",
    title: "Dialog Box",
    desc: "Confirm confirmation popups, prompt input alerts, simple alerts, and modal dialogs.",
    icon: imagepath + "alert.svg",
    alt: "alert",
    link: "/alert",
    badgeColor: "bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-200/50 dark:border-amber-900/50",
  },
  {
    header: "Frame",
    title: "Nested Frames",
    desc: "Switch contexts across outer, middle, and inner nested iframes dynamically.",
    icon: imagepath + "frame.svg",
    alt: "frame",
    link: "/frame",
    badgeColor: "bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 border-cyan-200/50 dark:border-cyan-900/50",
  },
  {
    header: "Radio",
    title: "Toggle States",
    desc: "Verify radio selection logic, check boxes, bug validation, and state assertions.",
    icon: imagepath + "radio.svg",
    alt: "radio",
    link: "/radio",
    badgeColor: "bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 border-teal-200/50 dark:border-teal-900/50",
  },
  {
    header: "Window",
    title: "Tabs Handler",
    desc: "Manage switching between tab windows, popups, multiple sessions, and close actions.",
    icon: imagepath + "window.svg",
    alt: "alert",
    link: "/window",
    badgeColor: "bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-200/50 dark:border-rose-900/50",
  },
  {
    header: "Elements",
    title: "Find Elements",
    desc: "Search Github profiles, retrieve lists, fetch data API, and run assertions.",
    icon: imagepath + "elements.svg",
    alt: "elements",
    link: "/elements",
    badgeColor: "bg-fuchsia-50 dark:bg-fuchsia-950/30 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-200/50 dark:border-fuchsia-900/50",
  },
  {
    header: "Drag",
    title: "AUI - Drag",
    desc: "Drag target nodes, perform offset coordinate relocations, and test constraints.",
    icon: imagepath + "drag.svg",
    alt: "drag",
    link: "/draggable",
    badgeColor: "bg-sky-50 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400 border-sky-200/50 dark:border-sky-900/50",
  },
  {
    header: "Drop",
    title: "AUI - Drop",
    desc: "Perform drop validations on dropzones and trigger state change updates.",
    icon: imagepath + "falling.svg",
    alt: "alert",
    link: "/droppable",
    badgeColor: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/50",
  },
  {
    header: "Sort",
    title: "AUI - Sort",
    desc: "Sort items inside container boxes using modern HTML5 drag/drop APIs.",
    icon: imagepath + "filter.svg",
    alt: "sort",
    link: "/sortable",
    badgeColor: "bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 border-violet-200/50 dark:border-violet-900/50",
  },
  {
    header: "Multi-Select",
    title: "AUI - Selectable",
    desc: "Select single items or drag to multi-select items in a list grid.",
    icon: imagepath + "selectable.svg",
    alt: "selectable",
    link: "/selectable",
    badgeColor: "bg-pink-50 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400 border-pink-200/50 dark:border-pink-900/50",
  },
  {
    header: "Slider",
    title: "AUI - Slider",
    desc: "Slide values, check range limits, and trigger event dispatch loops.",
    icon: imagepath + "slider.svg",
    alt: "slider",
    link: "/slider",
    badgeColor: "bg-lime-50 dark:bg-lime-950/30 text-lime-600 dark:text-lime-400 border-lime-200/50 dark:border-lime-900/50",
  },
  {
    header: "Waits",
    title: "Timeouts",
    desc: "Observe explicit waits, handle timed alerts, and perform synchronization tests.",
    icon: imagepath + "waits.svg",
    alt: "waits",
    link: "/waits",
    badgeColor: "bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-200/50 dark:border-amber-900/50",
  },
  {
    header: "Table",
    title: "WebTable",
    desc: "Interact with row counts, cell text extractions, totals, and values summing.",
    icon: imagepath + "simtable.svg",
    alt: "table",
    link: "/table",
    badgeColor: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/50",
  },
  {
    header: "Table",
    title: "Advanced Table",
    desc: "Verify pagination pages, select page sizes, search queries filter, and header sorting.",
    icon: imagepath + "advtable.svg",
    alt: "table2",
    link: "/advancedtable",
    badgeColor: "bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 border-purple-200/50 dark:border-purple-900/50",
  },
  {
    header: "Calendar",
    title: "Date Pickers",
    desc: "Select dates, verify formatting output, and validate calendar events.",
    icon: imagepath + "calendar.svg",
    alt: "calendar",
    link: "/calendar",
    badgeColor: "bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 border-orange-200/50 dark:border-orange-900/50",
  },
  {
    header: "Forms",
    title: "Form Inputs",
    desc: "Practice auto-completes, address lines validation, phone digits pattern, and options.",
    icon: imagepath + "sign-form.svg",
    alt: "forms",
    link: "/forms",
    badgeColor: "bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 border-teal-200/50 dark:border-teal-900/50",
  },
  {
    header: "File",
    title: "File Operations",
    desc: "Practice browser file downloads, type validation, and input upload detector.",
    icon: imagepath + "download.svg",
    alt: "file",
    link: "/file",
    badgeColor: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/50",
  },
  {
    header: "Shadow",
    title: "DOM Elements",
    desc: "Access fields wrapped in open and closed shadow roots using custom scripts.",
    icon: imagepath + "mario.svg",
    alt: "shadow",
    link: "/shadow",
    badgeColor: "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border-indigo-200/50 dark:border-indigo-900/50",
  },
];

export const WorkspacePage: React.FC = () => {
  usePageMeta({
    title: "Workspace | LetCode with Koushik",
    description: "Practice and learn test automation with 21+ compliance sandboxes.",
    keywords: "test automation, selenium practice site, playwright practice sandboxes, letcode practice",
  });

  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredItems = menuItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.header.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageLayout>
      <div className="py-16 border-b border-border/40">
        <div className="container mx-auto max-w-5xl text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Practice{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 dark:from-emerald-400 dark:via-teal-300 dark:to-indigo-400">
              Workspace
            </span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-md max-w-xl mx-auto font-light leading-relaxed">
            Choose from 21 interactive compliance sandboxes to build, debug, and run Selenium, Playwright, and Cypress tests.
          </p>

          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                <i className="fa-solid fa-magnifying-glass text-xs" />
              </span>
              <input
                type="text"
                className="flex h-11 w-full rounded-xl border border-input bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm pl-9 pr-4 py-2 text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 shadow-sm transition-all"
                placeholder="Search practice labs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-14">
          <div className="container mx-auto max-w-6xl">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col justify-between border border-slate-200/80 dark:border-slate-800/50 rounded-xl bg-white/80 dark:bg-slate-900/40 backdrop-blur-sm text-card-foreground shadow-sm hover:shadow-lg hover:border-emerald-500/30 dark:hover:border-emerald-500/20 hover:-translate-y-0.5 transition-all duration-300 p-5"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${item.badgeColor || "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                        {item.header}
                      </span>
                      <img
                        src={item.icon}
                        alt={item.alt}
                        className="w-7 h-7 opacity-75 dark:opacity-90 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-md font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    to={item.link}
                    className="w-full inline-flex items-center justify-center rounded-lg text-xs font-bold h-9 btn-primary shadow-none hover:shadow-sm"
                  >
                    Play Sandbox
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl text-slate-300 dark:text-slate-700 mb-2">
                <i className="fa-solid fa-circle-question"></i>
              </div>
              <p className="text-slate-500 dark:text-slate-400">No practice labs matched your search.</p>
            </div>
          )}
        </div>
      </section>

      <div className="container mx-auto mt-4">
        <Ads />
      </div>
    </PageLayout>
  );
};

export default WorkspacePage;
