import React, { useEffect, useRef } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

// Declare custom element for TypeScript compilation
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "my-web-component": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

// Register custom element once
if (typeof window !== "undefined" && !window.customElements.get("my-web-component")) {
  class MyWebComponent extends HTMLElement {
    myRoot: any;
    constructor() {
      super();
      this.myRoot = this.attachShadow({ mode: "closed" });
    }
    connectedCallback() {
      this.myRoot.innerHTML = `<div class="control mt-4">
            <label for="name" class="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">Enter your last name</label>
            <input type="text" id="lname" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200">
            </div>`;
    }
  }
  window.customElements.define("my-web-component", MyWebComponent);
}

export const ShadowPage: React.FC = () => {
  usePageMeta({
    title: "Shadow DOM | LetCode with Koushik",
    description: "Practice handling shadow DOM elements",
    keywords: "selenium shadow DOM, playwright shadow DOM, protractor shadow DOM",
  });

  const openRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLDivElement>(null);

  const learningPoint = [
    "What is shadow DOM?",
    "What is open & close Shadow DOM",
    "How to interact with open & close Shadow DOM",
  ];

  useEffect(() => {
    if (openRef.current && !openRef.current.shadowRoot) {
      const s = openRef.current.attachShadow({ mode: "open" });
      s.innerHTML = `<div class="control">
      <label for="name" class="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">Enter your first name</label>
      <input type="text" id="fname" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200">
      </div>`;
    }

    if (closeRef.current && !closeRef.current.hasAttribute("data-shadow-attached")) {
      const myS = closeRef.current.attachShadow({ mode: "closed" });
      myS.innerHTML = `<div class="control mt-4">
      <label for="name" class="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">Enter your email</label>
      <input type="text" id="email" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200">
      </div>`;
      closeRef.current.setAttribute("data-shadow-attached", "true");
    }
  }, []);

  return (
    <PageLayout>
      <PageHeader header="Shadow DOM" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg space-y-6">
            <div ref={openRef} id="open-shadow" className="control"></div>
            
            <div className="field">
              <my-web-component></my-web-component>
            </div>

            <div ref={closeRef} id="close-shadow"></div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="shadow" />
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

export default ShadowPage;