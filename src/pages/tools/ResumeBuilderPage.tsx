import React, { CSSProperties, ChangeEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Check,
  Download,
  FileText,
  Github,
  GraduationCap,
  Heart,
  Layers,
  Link as LinkIcon,
  Mail,
  MapPin,
  Palette,
  Phone,
  Plus,
  RefreshCcw,
  Sparkles,
  Trash2,
  Upload,
  User,
  Wrench,
} from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";

type ResumeTheme = "emerald" | "indigo" | "teal" | "slate" | "rose" | "amber";
type ResumeLayout =
  | "ats"
  | "modern"
  | "timeline"
  | "elegant"
  | "technical"
  | "minimal";
type OptionalSection =
  | "projects"
  | "awards"
  | "contributions"
  | "hobbies"
  | "certifications";

interface ResumeExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string;
}

interface ResumeEducation {
  id: string;
  degree: string;
  institute: string;
  location: string;
  year: string;
  details: string;
}

interface ResumeProject {
  id: string;
  name: string;
  stack: string;
  link: string;
  details: string;
}

interface ResumeAward {
  id: string;
  title: string;
  issuer: string;
  year: string;
  details: string;
}

interface ResumeCertification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  link: string;
}

interface ResumeData {
  profile: {
    name: string;
    headline: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    portfolio: string;
    youtubeOrBlog: string;
    photo: string;
  };
  summary: string;
  skills: string;
  tools: string;
  experiences: ResumeExperience[];
  education: ResumeEducation[];
  projects: ResumeProject[];
  awards: ResumeAward[];
  contributions: string;
  hobbies: string;
  certifications: ResumeCertification[];
  enabledSections: Record<OptionalSection, boolean>;
  layout: ResumeLayout;
  theme: ResumeTheme;
}

interface StepConfig {
  key: string;
  label: string;
  hint: string;
  icon: React.ElementType;
  optional?: OptionalSection;
}

interface ThemeConfig {
  label: string;
  accent: string;
  accentSoft: string;
  text: string;
}

interface LayoutConfig {
  label: string;
  description: string;
}

const STORAGE_KEY = "letcode_resume_builder_draft";

const makeId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

const emptyExperience = (): ResumeExperience => ({
  id: makeId(),
  role: "",
  company: "",
  location: "",
  startDate: "",
  endDate: "",
  details: "",
});

const emptyEducation = (): ResumeEducation => ({
  id: makeId(),
  degree: "",
  institute: "",
  location: "",
  year: "",
  details: "",
});

const emptyProject = (): ResumeProject => ({
  id: makeId(),
  name: "",
  stack: "",
  link: "",
  details: "",
});

const emptyAward = (): ResumeAward => ({
  id: makeId(),
  title: "",
  issuer: "",
  year: "",
  details: "",
});

const emptyCertification = (): ResumeCertification => ({
  id: makeId(),
  name: "",
  issuer: "",
  year: "",
  link: "",
});

const createInitialData = (): ResumeData => ({
  profile: {
    name: "",
    headline: "QA Automation Engineer",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    portfolio: "",
    youtubeOrBlog: "",
    photo: "",
  },
  summary: "",
  skills: "",
  tools: "",
  experiences: [emptyExperience()],
  education: [emptyEducation()],
  projects: [emptyProject()],
  awards: [emptyAward()],
  contributions: "",
  hobbies: "",
  certifications: [emptyCertification()],
  enabledSections: {
    projects: true,
    awards: false,
    contributions: true,
    hobbies: false,
    certifications: true,
  },
  layout: "ats",
  theme: "emerald",
});

const themeOptions: Record<ResumeTheme, ThemeConfig> = {
  emerald: { label: "Emerald", accent: "#059669", accentSoft: "#d1fae5", text: "#064e3b" },
  indigo: { label: "Indigo", accent: "#4f46e5", accentSoft: "#e0e7ff", text: "#312e81" },
  teal: { label: "Teal", accent: "#0f766e", accentSoft: "#ccfbf1", text: "#134e4a" },
  slate: { label: "Slate", accent: "#334155", accentSoft: "#e2e8f0", text: "#0f172a" },
  rose: { label: "Rose", accent: "#e11d48", accentSoft: "#ffe4e6", text: "#881337" },
  amber: { label: "Amber", accent: "#d97706", accentSoft: "#fef3c7", text: "#78350f" },
};

const layoutOptions: Record<ResumeLayout, LayoutConfig> = {
  ats: {
    label: "ATS Classic",
    description: "Clean one-column format, no photo, easy for recruiters and parsers.",
  },
  modern: {
    label: "Modern Sidebar",
    description: "Visual sidebar with contact, skills, tools, and optional photo.",
  },
  timeline: {
    label: "Compact Timeline",
    description: "Dense experience-first format for senior automation profiles.",
  },
  elegant: {
    label: "Elegant Two Column",
    description: "Balanced resume with strong summary and grouped side details.",
  },
  technical: {
    label: "Technical Portfolio",
    description: "Highlights frameworks, projects, tooling, and measurable impact.",
  },
  minimal: {
    label: "Minimal Focus",
    description: "Quiet typography, generous spacing, and recruiter-friendly flow.",
  },
};

const optionalSectionLabels: Record<OptionalSection, string> = {
  projects: "Projects",
  awards: "Awards",
  contributions: "Contributions",
  hobbies: "Hobbies",
  certifications: "Certifications",
};

const allSteps: StepConfig[] = [
  {
    key: "profile",
    label: "Profile",
    hint: "Start with the role you want next: QA Automation Engineer, SDET, Playwright Specialist, or Test Architect.",
    icon: User,
  },
  {
    key: "summary",
    label: "Summary",
    hint: "Write 2-4 lines with years of experience, automation stack, domain exposure, and one measurable outcome.",
    icon: Sparkles,
  },
  {
    key: "skills",
    label: "Skills",
    hint: "Group practical strengths: UI automation, API testing, CI/CD, test design, debugging, reporting, and mentoring.",
    icon: Wrench,
  },
  {
    key: "experience",
    label: "Work Experience",
    hint: "Use impact bullets: reduced regression time, improved stability, built frameworks, mentored teams, or prevented defects.",
    icon: Briefcase,
  },
  {
    key: "education",
    label: "Education",
    hint: "Keep it concise. Include relevant coursework only when it supports your target QA/SDET role.",
    icon: GraduationCap,
  },
  {
    key: "sections",
    label: "Optional Sections",
    hint: "Switch on the sections that strengthen this resume. Empty optional sections will not print.",
    icon: Layers,
  },
  {
    key: "projects",
    label: "Projects",
    hint: "Good QA projects show stack, test scope, framework architecture, reporting, and CI execution.",
    icon: FileText,
    optional: "projects",
  },
  {
    key: "awards",
    label: "Awards",
    hint: "Mention awards that prove ownership, delivery quality, mentoring, customer impact, or innovation.",
    icon: Award,
    optional: "awards",
  },
  {
    key: "contributions",
    label: "Contributions",
    hint: "Add framework contributions, reusable utilities, process improvements, open source work, talks, or documentation.",
    icon: Github,
    optional: "contributions",
  },
  {
    key: "hobbies",
    label: "Hobbies",
    hint: "Keep hobbies short and human. Prefer interests that add personality without taking space from career impact.",
    icon: Heart,
    optional: "hobbies",
  },
  {
    key: "certifications",
    label: "Certifications",
    hint: "Include certifications from testing, cloud, agile, accessibility, security, or automation platforms.",
    icon: BookOpen,
    optional: "certifications",
  },
  {
    key: "design",
    label: "Design & Download",
    hint: "Pick a layout and color theme, check the preview, then download using your browser PDF printer.",
    icon: Palette,
  },
];

const splitItems = (value: string) =>
  value
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);

const hasText = (value: string) => value.trim().length > 0;

const hasExperience = (item: ResumeExperience) =>
  [item.role, item.company, item.location, item.startDate, item.endDate, item.details].some(hasText);

const hasEducation = (item: ResumeEducation) =>
  [item.degree, item.institute, item.location, item.year, item.details].some(hasText);

const hasProject = (item: ResumeProject) =>
  [item.name, item.stack, item.link, item.details].some(hasText);

const hasAward = (item: ResumeAward) =>
  [item.title, item.issuer, item.year, item.details].some(hasText);

const hasCertification = (item: ResumeCertification) =>
  [item.name, item.issuer, item.year, item.link].some(hasText);

const mergeDraft = (draft: Partial<ResumeData>): ResumeData => {
  const initial = createInitialData();
  return {
    ...initial,
    ...draft,
    profile: { ...initial.profile, ...draft.profile },
    enabledSections: { ...initial.enabledSections, ...draft.enabledSections },
    experiences: draft.experiences?.length ? draft.experiences : initial.experiences,
    education: draft.education?.length ? draft.education : initial.education,
    projects: draft.projects?.length ? draft.projects : initial.projects,
    awards: draft.awards?.length ? draft.awards : initial.awards,
    certifications: draft.certifications?.length ? draft.certifications : initial.certifications,
    layout: draft.layout || initial.layout,
    theme: draft.theme || initial.theme,
  };
};

const inputClass =
  "w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950/60 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition";

const labelClass = "text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400";

const Field: React.FC<{
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (value: string) => void;
}> = ({ label, value, placeholder, type = "text", onChange }) => (
  <label className="space-y-1.5">
    <span className={labelClass}>{label}</span>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      className={inputClass}
    />
  </label>
);

const TextArea: React.FC<{
  label: string;
  value: string;
  placeholder?: string;
  rows?: number;
  onChange: (value: string) => void;
}> = ({ label, value, placeholder, rows = 5, onChange }) => (
  <label className="space-y-1.5">
    <span className={labelClass}>{label}</span>
    <textarea
      value={value}
      placeholder={placeholder}
      rows={rows}
      onChange={(event) => onChange(event.target.value)}
      className={`${inputClass} resize-y leading-relaxed`}
    />
  </label>
);

const SectionTitle: React.FC<{ title: string; action?: React.ReactNode }> = ({ title, action }) => (
  <div className="flex items-center justify-between gap-3">
    <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-50">{title}</h3>
    {action}
  </div>
);

const ResumeBuilderPage: React.FC = () => {
  usePageMeta({
    title: "Resume Builder | LetCode with Koushik",
    description: "Build a QA/SDET resume with guided prompts, live themes, layouts, and PDF download.",
    keywords: "resume builder, SDET resume, QA automation resume, test automation resume",
  });

  const [resume, setResume] = useState<ResumeData>(() => {
    if (typeof window === "undefined") return createInitialData();
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return createInitialData();
    try {
      return mergeDraft(JSON.parse(saved) as Partial<ResumeData>);
    } catch {
      return createInitialData();
    }
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [draftSaved, setDraftSaved] = useState(false);

  const steps = useMemo(
    () =>
      allSteps.filter((step) => {
        if (!step.optional) return true;
        return resume.enabledSections[step.optional];
      }),
    [resume.enabledSections]
  );

  const activeStepIndex = Math.min(currentStep, steps.length - 1);
  const activeStep = steps[activeStepIndex];
  const progress = steps.length <= 1 ? 100 : Math.round((activeStepIndex / (steps.length - 1)) * 100);

  useEffect(() => {
    setCurrentStep((prev) => Math.min(prev, steps.length - 1));
  }, [steps.length]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(resume));
    setDraftSaved(true);
    const timer = window.setTimeout(() => setDraftSaved(false), 1200);
    return () => window.clearTimeout(timer);
  }, [resume]);

  const updateResume = (updater: (previous: ResumeData) => ResumeData) => {
    setResume((previous) => updater(previous));
  };

  const updateProfile = (key: keyof ResumeData["profile"], value: string) => {
    updateResume((previous) => ({
      ...previous,
      profile: { ...previous.profile, [key]: value },
    }));
  };

  const updateEnabledSection = (key: OptionalSection, value: boolean) => {
    updateResume((previous) => ({
      ...previous,
      enabledSections: { ...previous.enabledSections, [key]: value },
    }));
  };

  const updateListItem = <T extends { id: string },>(
    listKey: keyof Pick<
      ResumeData,
      "experiences" | "education" | "projects" | "awards" | "certifications"
    >,
    id: string,
    patch: Partial<T>
  ) => {
    updateResume((previous) => ({
      ...previous,
      [listKey]: (previous[listKey] as T[]).map((item) =>
        item.id === id ? { ...item, ...patch } : item
      ),
    }));
  };

  const addListItem = (
    listKey: "experiences" | "education" | "projects" | "awards" | "certifications"
  ) => {
    const factories = {
      experiences: emptyExperience,
      education: emptyEducation,
      projects: emptyProject,
      awards: emptyAward,
      certifications: emptyCertification,
    };
    updateResume((previous) => ({
      ...previous,
      [listKey]: [...previous[listKey], factories[listKey]()],
    }));
  };

  const removeListItem = (
    listKey: "experiences" | "education" | "projects" | "awards" | "certifications",
    id: string
  ) => {
    updateResume((previous) => {
      const next = previous[listKey].filter((item) => item.id !== id);
      return {
        ...previous,
        [listKey]: next.length ? next : [createInitialData()[listKey][0]],
      };
    });
  };

  const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      updateProfile("photo", String(reader.result || ""));
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  };

  const resetDraft = () => {
    const fresh = createInitialData();
    window.localStorage.removeItem(STORAGE_KEY);
    setResume(fresh);
    setCurrentStep(0);
  };

  const goNext = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const goBack = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const stepComplete = (step: StepConfig) => {
    switch (step.key) {
      case "profile":
        return hasText(resume.profile.name) && hasText(resume.profile.email);
      case "summary":
        return hasText(resume.summary);
      case "skills":
        return hasText(resume.skills) || hasText(resume.tools);
      case "experience":
        return resume.experiences.some(hasExperience);
      case "education":
        return resume.education.some(hasEducation);
      case "projects":
        return resume.projects.some(hasProject);
      case "awards":
        return resume.awards.some(hasAward);
      case "contributions":
        return hasText(resume.contributions);
      case "hobbies":
        return hasText(resume.hobbies);
      case "certifications":
        return resume.certifications.some(hasCertification);
      default:
        return true;
    }
  };

  const renderStepContent = () => {
    switch (activeStep.key) {
      case "profile":
        return (
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Full name" value={resume.profile.name} placeholder="Koushik Chatterjee" onChange={(value) => updateProfile("name", value)} />
              <Field label="Target headline" value={resume.profile.headline} placeholder="Senior SDET | Playwright | API Testing" onChange={(value) => updateProfile("headline", value)} />
              <Field label="Email" type="email" value={resume.profile.email} placeholder="you@example.com" onChange={(value) => updateProfile("email", value)} />
              <Field label="Phone" value={resume.profile.phone} placeholder="+91 98765 43210" onChange={(value) => updateProfile("phone", value)} />
              <Field label="Location" value={resume.profile.location} placeholder="Chennai, India" onChange={(value) => updateProfile("location", value)} />
              <Field label="LinkedIn" value={resume.profile.linkedin} placeholder="linkedin.com/in/username" onChange={(value) => updateProfile("linkedin", value)} />
              <Field label="GitHub" value={resume.profile.github} placeholder="github.com/username" onChange={(value) => updateProfile("github", value)} />
              <Field label="Portfolio" value={resume.profile.portfolio} placeholder="your-site.dev" onChange={(value) => updateProfile("portfolio", value)} />
              <Field label="YouTube or blog" value={resume.profile.youtubeOrBlog} placeholder="youtube.com/@yourchannel" onChange={(value) => updateProfile("youtubeOrBlog", value)} />
            </div>

            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/40 p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Optional profile photo</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Visual layouts can show it. ATS Classic hides it automatically.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <label className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200 hover:border-emerald-400 cursor-pointer transition">
                    <Upload className="w-4 h-4" />
                    Upload
                    <input type="file" accept="image/*" onChange={handlePhotoUpload} className="sr-only" />
                  </label>
                  {resume.profile.photo && (
                    <button
                      type="button"
                      onClick={() => updateProfile("photo", "")}
                      className="inline-flex items-center gap-2 h-10 px-4 rounded-lg border border-rose-200 dark:border-rose-900/60 text-sm font-bold text-rose-600 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                      Clear photo
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case "summary":
        return (
          <TextArea
            label="Professional summary"
            value={resume.summary}
            rows={8}
            placeholder="Example: SDET with 6+ years of experience building Playwright and Selenium automation frameworks for web, API, and CI pipelines. Reduced regression execution time by 45% through parallel execution, stable selectors, and service-level test coverage."
            onChange={(value) => updateResume((previous) => ({ ...previous, summary: value }))}
          />
        );
      case "skills":
        return (
          <div className="space-y-4">
            <TextArea
              label="Key skills"
              value={resume.skills}
              rows={5}
              placeholder="UI automation, API testing, test strategy, defect analysis, accessibility testing, CI quality gates"
              onChange={(value) => updateResume((previous) => ({ ...previous, skills: value }))}
            />
            <TextArea
              label="Tools and frameworks"
              value={resume.tools}
              rows={5}
              placeholder="Playwright, Selenium, Cypress, TypeScript, Java, REST Assured, Postman, Jenkins, GitHub Actions, Docker"
              onChange={(value) => updateResume((previous) => ({ ...previous, tools: value }))}
            />
          </div>
        );
      case "experience":
        return (
          <ListEditor
            title="Work experience"
            addLabel="Add experience"
            onAdd={() => addListItem("experiences")}
          >
            {resume.experiences.map((item, index) => (
              <div key={item.id} className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 space-y-4 bg-white/70 dark:bg-slate-950/30">
                <SectionTitle
                  title={`Experience ${index + 1}`}
                  action={
                    <RemoveButton onClick={() => removeListItem("experiences", item.id)} disabled={resume.experiences.length === 1} />
                  }
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Role" value={item.role} placeholder="Senior QA Automation Engineer" onChange={(value) => updateListItem<ResumeExperience>("experiences", item.id, { role: value })} />
                  <Field label="Company" value={item.company} placeholder="Acme Technologies" onChange={(value) => updateListItem<ResumeExperience>("experiences", item.id, { company: value })} />
                  <Field label="Location" value={item.location} placeholder="Remote / Chennai" onChange={(value) => updateListItem<ResumeExperience>("experiences", item.id, { location: value })} />
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Start" value={item.startDate} placeholder="Jan 2021" onChange={(value) => updateListItem<ResumeExperience>("experiences", item.id, { startDate: value })} />
                    <Field label="End" value={item.endDate} placeholder="Present" onChange={(value) => updateListItem<ResumeExperience>("experiences", item.id, { endDate: value })} />
                  </div>
                </div>
                <TextArea
                  label="Impact bullets"
                  value={item.details}
                  rows={5}
                  placeholder={"Built a Playwright TypeScript framework for 180+ tests\nReduced smoke suite runtime from 42 minutes to 14 minutes\nIntegrated test reports into CI/CD quality gates"}
                  onChange={(value) => updateListItem<ResumeExperience>("experiences", item.id, { details: value })}
                />
              </div>
            ))}
          </ListEditor>
        );
      case "education":
        return (
          <ListEditor title="Education" addLabel="Add education" onAdd={() => addListItem("education")}>
            {resume.education.map((item, index) => (
              <div key={item.id} className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 space-y-4 bg-white/70 dark:bg-slate-950/30">
                <SectionTitle
                  title={`Education ${index + 1}`}
                  action={<RemoveButton onClick={() => removeListItem("education", item.id)} disabled={resume.education.length === 1} />}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Degree" value={item.degree} placeholder="B.E. Computer Science" onChange={(value) => updateListItem<ResumeEducation>("education", item.id, { degree: value })} />
                  <Field label="Institute" value={item.institute} placeholder="Anna University" onChange={(value) => updateListItem<ResumeEducation>("education", item.id, { institute: value })} />
                  <Field label="Location" value={item.location} placeholder="Chennai" onChange={(value) => updateListItem<ResumeEducation>("education", item.id, { location: value })} />
                  <Field label="Year" value={item.year} placeholder="2018" onChange={(value) => updateListItem<ResumeEducation>("education", item.id, { year: value })} />
                </div>
                <TextArea label="Notes" value={item.details} rows={3} placeholder="Relevant coursework, honors, or specialization" onChange={(value) => updateListItem<ResumeEducation>("education", item.id, { details: value })} />
              </div>
            ))}
          </ListEditor>
        );
      case "sections":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(Object.keys(optionalSectionLabels) as OptionalSection[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => updateEnabledSection(key, !resume.enabledSections[key])}
                className={`text-left rounded-xl border p-4 transition ${
                  resume.enabledSections[key]
                    ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200"
                    : "border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/30 text-slate-600 dark:text-slate-400"
                }`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-extrabold">{optionalSectionLabels[key]}</span>
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${resume.enabledSections[key] ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-300 dark:border-slate-700"}`}>
                    {resume.enabledSections[key] && <Check className="w-3.5 h-3.5" />}
                  </span>
                </span>
                <span className="block mt-2 text-xs opacity-80">Include this section in the question flow and resume preview.</span>
              </button>
            ))}
          </div>
        );
      case "projects":
        return (
          <ListEditor title="Projects" addLabel="Add project" onAdd={() => addListItem("projects")}>
            {resume.projects.map((item, index) => (
              <div key={item.id} className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 space-y-4 bg-white/70 dark:bg-slate-950/30">
                <SectionTitle title={`Project ${index + 1}`} action={<RemoveButton onClick={() => removeListItem("projects", item.id)} disabled={resume.projects.length === 1} />} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Project name" value={item.name} placeholder="Playwright Automation Framework" onChange={(value) => updateListItem<ResumeProject>("projects", item.id, { name: value })} />
                  <Field label="Stack" value={item.stack} placeholder="Playwright, TypeScript, GitHub Actions" onChange={(value) => updateListItem<ResumeProject>("projects", item.id, { stack: value })} />
                  <Field label="Link" value={item.link} placeholder="github.com/username/project" onChange={(value) => updateListItem<ResumeProject>("projects", item.id, { link: value })} />
                </div>
                <TextArea label="Project bullets" value={item.details} rows={4} placeholder="Built reusable fixtures, page objects, visual reports, and CI execution matrix" onChange={(value) => updateListItem<ResumeProject>("projects", item.id, { details: value })} />
              </div>
            ))}
          </ListEditor>
        );
      case "awards":
        return (
          <ListEditor title="Awards" addLabel="Add award" onAdd={() => addListItem("awards")}>
            {resume.awards.map((item, index) => (
              <div key={item.id} className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 space-y-4 bg-white/70 dark:bg-slate-950/30">
                <SectionTitle title={`Award ${index + 1}`} action={<RemoveButton onClick={() => removeListItem("awards", item.id)} disabled={resume.awards.length === 1} />} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Field label="Title" value={item.title} placeholder="Quality Champion" onChange={(value) => updateListItem<ResumeAward>("awards", item.id, { title: value })} />
                  <Field label="Issuer" value={item.issuer} placeholder="Company / Community" onChange={(value) => updateListItem<ResumeAward>("awards", item.id, { issuer: value })} />
                  <Field label="Year" value={item.year} placeholder="2025" onChange={(value) => updateListItem<ResumeAward>("awards", item.id, { year: value })} />
                </div>
                <TextArea label="Why it matters" value={item.details} rows={3} placeholder="Recognized for improving release confidence and mentoring QA engineers" onChange={(value) => updateListItem<ResumeAward>("awards", item.id, { details: value })} />
              </div>
            ))}
          </ListEditor>
        );
      case "contributions":
        return (
          <TextArea
            label="Contributions"
            value={resume.contributions}
            rows={7}
            placeholder={"Created shared Playwright fixtures used by 8 squads\nPublished internal docs for stable locator strategy\nContributed to open source reporting utilities"}
            onChange={(value) => updateResume((previous) => ({ ...previous, contributions: value }))}
          />
        );
      case "hobbies":
        return (
          <TextArea
            label="Hobbies"
            value={resume.hobbies}
            rows={5}
            placeholder="Teaching automation, technical blogging, community talks, chess, long-distance running"
            onChange={(value) => updateResume((previous) => ({ ...previous, hobbies: value }))}
          />
        );
      case "certifications":
        return (
          <ListEditor title="Certifications" addLabel="Add certification" onAdd={() => addListItem("certifications")}>
            {resume.certifications.map((item, index) => (
              <div key={item.id} className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 space-y-4 bg-white/70 dark:bg-slate-950/30">
                <SectionTitle title={`Certification ${index + 1}`} action={<RemoveButton onClick={() => removeListItem("certifications", item.id)} disabled={resume.certifications.length === 1} />} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Name" value={item.name} placeholder="ISTQB / AWS / Playwright" onChange={(value) => updateListItem<ResumeCertification>("certifications", item.id, { name: value })} />
                  <Field label="Issuer" value={item.issuer} placeholder="Issuer" onChange={(value) => updateListItem<ResumeCertification>("certifications", item.id, { issuer: value })} />
                  <Field label="Year" value={item.year} placeholder="2026" onChange={(value) => updateListItem<ResumeCertification>("certifications", item.id, { year: value })} />
                  <Field label="Credential link" value={item.link} placeholder="Credential URL" onChange={(value) => updateListItem<ResumeCertification>("certifications", item.id, { link: value })} />
                </div>
              </div>
            ))}
          </ListEditor>
        );
      case "design":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-slate-100 mb-3">Choose a format</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(Object.keys(layoutOptions) as ResumeLayout[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => updateResume((previous) => ({ ...previous, layout: key }))}
                    className={`text-left rounded-xl border p-4 transition ${
                      resume.layout === key
                        ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                        : "border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/30 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <span className="font-extrabold text-slate-900 dark:text-slate-100">{layoutOptions[key].label}</span>
                    <span className="block mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{layoutOptions[key].description}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-slate-100 mb-3">Choose a theme</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {(Object.keys(themeOptions) as ResumeTheme[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => updateResume((previous) => ({ ...previous, theme: key }))}
                    className={`flex items-center gap-3 rounded-xl border p-3 text-left transition ${
                      resume.theme === key
                        ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                        : "border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/30"
                    }`}
                  >
                    <span className="w-7 h-7 rounded-full border border-white shadow" style={{ background: themeOptions[key].accent }} />
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{themeOptions[key].label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="resume-no-print w-full inline-flex items-center justify-center gap-2 h-12 rounded-xl btn-primary text-sm font-extrabold"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  const ActiveIcon = activeStep.icon;

  return (
    <PageLayout glowColor="teal" className="resume-builder-page">
      <PageHeader
        header="Resume Builder"
        description="Build a QA/SDET resume through guided questions, choose a format, and download it as a PDF."
      />

      <section className="container mx-auto py-6 lg:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-[320px_minmax(0,1fr)] gap-6">
          <aside className="xl:sticky xl:top-24 xl:self-start rounded-2xl border border-slate-200/80 dark:border-slate-800/60 bg-white/85 dark:bg-slate-900/60 backdrop-blur p-4 shadow-sm">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Progress</p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-50">{progress}%</p>
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                {draftSaved ? "Saved" : "Draft ready"}
              </span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden mb-5">
              <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" style={{ width: `${progress}%` }} />
            </div>

            <div className="space-y-2">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === activeStepIndex;
                const isDone = stepComplete(step);
                return (
                  <button
                    key={step.key}
                    type="button"
                    onClick={() => setCurrentStep(index)}
                    className={`w-full flex items-center gap-3 rounded-xl p-3 text-left transition ${
                      isActive
                        ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200"
                        : "hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? "bg-emerald-500 text-white" : "bg-slate-100 dark:bg-slate-800"}`}>
                      {isDone && !isActive ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <StepIcon className="w-4 h-4" />}
                    </span>
                    <span>
                      <span className="block text-sm font-extrabold">{step.label}</span>
                      <span className="block text-[11px] opacity-70">Step {index + 1} of {steps.length}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={resetDraft}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 h-10 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-extrabold text-slate-600 dark:text-slate-300 hover:border-rose-300 hover:text-rose-600 dark:hover:border-rose-800 dark:hover:text-rose-300 transition"
            >
              <RefreshCcw className="w-4 h-4" />
              Reset draft
            </button>
          </aside>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] gap-6 items-start">
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/60 bg-white/90 dark:bg-slate-900/60 backdrop-blur shadow-sm overflow-hidden">
              <div className="p-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-3">
                  <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
                    <ActiveIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900 dark:text-slate-50">{activeStep.label}</h2>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{activeStep.hint}</p>
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-6">{renderStepContent()}</div>

              <div className="p-5 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={activeStepIndex === 0}
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800/60 transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={activeStepIndex === steps.length - 1}
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl btn-primary text-sm font-extrabold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="resume-no-print flex items-center justify-between gap-3 mb-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Live preview</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{layoutOptions[resume.layout].label} / {themeOptions[resume.theme].label}</p>
                </div>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 h-10 px-4 rounded-lg btn-primary text-xs font-extrabold"
                >
                  <Download className="w-4 h-4" />
                  PDF
                </button>
              </div>
              <ResumePreview resume={resume} />
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

const ListEditor: React.FC<{
  title: string;
  addLabel: string;
  onAdd: () => void;
  children: React.ReactNode;
}> = ({ title, addLabel, onAdd, children }) => (
  <div className="space-y-4">
    <SectionTitle
      title={title}
      action={
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-extrabold hover:bg-emerald-100 dark:hover:bg-emerald-950/50 transition"
        >
          <Plus className="w-4 h-4" />
          {addLabel}
        </button>
      }
    />
    {children}
  </div>
);

const RemoveButton: React.FC<{ onClick: () => void; disabled?: boolean }> = ({ onClick, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-500 dark:text-slate-400 hover:border-rose-300 hover:text-rose-600 disabled:opacity-40 disabled:cursor-not-allowed transition"
  >
    <Trash2 className="w-3.5 h-3.5" />
    Remove
  </button>
);

const ResumePreview: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const theme = themeOptions[resume.theme];
  const style = {
    "--resume-accent": theme.accent,
    "--resume-accent-soft": theme.accentSoft,
    "--resume-accent-text": theme.text,
  } as CSSProperties;

  return (
    <article
      id="resume-print-area"
      className={`resume-sheet resume-layout-${resume.layout}`}
      style={style}
    >
      {resume.layout === "modern" ? (
        <ModernResume resume={resume} />
      ) : resume.layout === "timeline" ? (
        <TimelineResume resume={resume} />
      ) : resume.layout === "elegant" ? (
        <ElegantResume resume={resume} />
      ) : resume.layout === "technical" ? (
        <TechnicalResume resume={resume} />
      ) : resume.layout === "minimal" ? (
        <MinimalResume resume={resume} />
      ) : (
        <AtsResume resume={resume} />
      )}
    </article>
  );
};

const HeaderBlock: React.FC<{ resume: ResumeData; centered?: boolean; showPhoto?: boolean }> = ({
  resume,
  centered,
  showPhoto,
}) => {
  const contact = getContactItems(resume);
  return (
    <header className={`resume-header ${centered ? "text-center" : ""}`}>
      {showPhoto && resume.profile.photo && (
        <img src={resume.profile.photo} alt="" className="resume-photo" />
      )}
      <div>
        <h1>{resume.profile.name || "Your Name"}</h1>
        <p className="resume-headline">{resume.profile.headline || "QA Automation Engineer"}</p>
        <div className={`resume-contact ${centered ? "justify-center" : ""}`}>
          {contact.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </header>
  );
};

const getContactItems = (resume: ResumeData) =>
  [
    resume.profile.email,
    resume.profile.phone,
    resume.profile.location,
    resume.profile.linkedin,
    resume.profile.github,
    resume.profile.portfolio,
    resume.profile.youtubeOrBlog,
  ].filter(hasText);

const ResumeSection: React.FC<{ title: string; children: React.ReactNode; show?: boolean }> = ({
  title,
  children,
  show = true,
}) => {
  if (!show) return null;
  return (
    <section className="resume-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

const BulletList: React.FC<{ value: string }> = ({ value }) => {
  const items = value.split("\n").map((item) => item.trim()).filter(Boolean);
  if (!items.length) return null;
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const SkillPills: React.FC<{ value: string }> = ({ value }) => {
  const items = splitItems(value);
  if (!items.length) return <p className="resume-muted">Add skills to preview them here.</p>;
  return (
    <div className="resume-pills">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
};

const ExperienceList: React.FC<{ resume: ResumeData; timeline?: boolean }> = ({ resume, timeline }) => {
  const items = resume.experiences.filter(hasExperience);
  if (!items.length) return <p className="resume-muted">Add your work experience to complete this section.</p>;
  return (
    <div className={timeline ? "resume-timeline" : "resume-stack"}>
      {items.map((item) => (
        <div key={item.id} className="resume-item">
          <div className="resume-item-head">
            <div>
              <h3>{item.role || "Role title"}</h3>
              <p>{item.company || "Company"}{item.location ? `, ${item.location}` : ""}</p>
            </div>
            <span>{[item.startDate, item.endDate].filter(Boolean).join(" - ")}</span>
          </div>
          <BulletList value={item.details} />
        </div>
      ))}
    </div>
  );
};

const EducationList: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const items = resume.education.filter(hasEducation);
  if (!items.length) return null;
  return (
    <div className="resume-stack">
      {items.map((item) => (
        <div key={item.id} className="resume-item">
          <div className="resume-item-head">
            <div>
              <h3>{item.degree || "Degree"}</h3>
              <p>{item.institute || "Institute"}{item.location ? `, ${item.location}` : ""}</p>
            </div>
            <span>{item.year}</span>
          </div>
          {hasText(item.details) && <p>{item.details}</p>}
        </div>
      ))}
    </div>
  );
};

const ProjectList: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  if (!resume.enabledSections.projects) return null;
  const items = resume.projects.filter(hasProject);
  if (!items.length) return null;
  return (
    <ResumeSection title="Projects">
      <div className="resume-stack">
        {items.map((item) => (
          <div key={item.id} className="resume-item">
            <div className="resume-item-head">
              <div>
                <h3>{item.name || "Project name"}</h3>
                <p>{item.stack}</p>
              </div>
              <span>{item.link}</span>
            </div>
            <BulletList value={item.details} />
          </div>
        ))}
      </div>
    </ResumeSection>
  );
};

const AwardsList: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  if (!resume.enabledSections.awards) return null;
  const items = resume.awards.filter(hasAward);
  if (!items.length) return null;
  return (
    <ResumeSection title="Awards">
      <div className="resume-stack">
        {items.map((item) => (
          <div key={item.id} className="resume-item">
            <div className="resume-item-head">
              <div>
                <h3>{item.title || "Award title"}</h3>
                <p>{item.issuer}</p>
              </div>
              <span>{item.year}</span>
            </div>
            {hasText(item.details) && <p>{item.details}</p>}
          </div>
        ))}
      </div>
    </ResumeSection>
  );
};

const CertificationsList: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  if (!resume.enabledSections.certifications) return null;
  const items = resume.certifications.filter(hasCertification);
  if (!items.length) return null;
  return (
    <ResumeSection title="Certifications">
      <ul className="resume-simple-list">
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name || "Certification"}</strong>
            {[item.issuer, item.year, item.link].filter(Boolean).length > 0 && (
              <span> - {[item.issuer, item.year, item.link].filter(Boolean).join(" | ")}</span>
            )}
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
};

const OptionalTextSections: React.FC<{ resume: ResumeData }> = ({ resume }) => (
  <>
    <ResumeSection title="Contributions" show={resume.enabledSections.contributions && hasText(resume.contributions)}>
      <BulletList value={resume.contributions} />
    </ResumeSection>
    <ResumeSection title="Hobbies" show={resume.enabledSections.hobbies && hasText(resume.hobbies)}>
      <p>{resume.hobbies}</p>
    </ResumeSection>
  </>
);

const AtsResume: React.FC<{ resume: ResumeData }> = ({ resume }) => (
  <>
    <HeaderBlock resume={resume} centered />
    <ResumeSection title="Summary" show={hasText(resume.summary)}>
      <p>{resume.summary}</p>
    </ResumeSection>
    <ResumeSection title="Skills">
      <SkillPills value={resume.skills} />
    </ResumeSection>
    <ResumeSection title="Tools & Frameworks" show={hasText(resume.tools)}>
      <SkillPills value={resume.tools} />
    </ResumeSection>
    <ResumeSection title="Experience">
      <ExperienceList resume={resume} />
    </ResumeSection>
    <ProjectList resume={resume} />
    <ResumeSection title="Education">
      <EducationList resume={resume} />
    </ResumeSection>
    <CertificationsList resume={resume} />
    <AwardsList resume={resume} />
    <OptionalTextSections resume={resume} />
  </>
);

const ModernResume: React.FC<{ resume: ResumeData }> = ({ resume }) => (
  <div className="resume-modern-grid">
    <aside>
      {resume.profile.photo && <img src={resume.profile.photo} alt="" className="resume-photo large" />}
      <h1>{resume.profile.name || "Your Name"}</h1>
      <p className="resume-headline">{resume.profile.headline || "QA Automation Engineer"}</p>
      <ResumeSection title="Contact">
        <ul className="resume-simple-list">
          {getContactItems(resume).map((item) => <li key={item}>{item}</li>)}
        </ul>
      </ResumeSection>
      <ResumeSection title="Skills">
        <SkillPills value={resume.skills} />
      </ResumeSection>
      <ResumeSection title="Tools" show={hasText(resume.tools)}>
        <SkillPills value={resume.tools} />
      </ResumeSection>
    </aside>
    <main>
      <ResumeSection title="Summary" show={hasText(resume.summary)}><p>{resume.summary}</p></ResumeSection>
      <ResumeSection title="Experience"><ExperienceList resume={resume} /></ResumeSection>
      <ProjectList resume={resume} />
      <ResumeSection title="Education"><EducationList resume={resume} /></ResumeSection>
      <CertificationsList resume={resume} />
      <AwardsList resume={resume} />
      <OptionalTextSections resume={resume} />
    </main>
  </div>
);

const TimelineResume: React.FC<{ resume: ResumeData }> = ({ resume }) => (
  <>
    <HeaderBlock resume={resume} showPhoto />
    <div className="resume-two-column">
      <main>
        <ResumeSection title="Experience"><ExperienceList resume={resume} timeline /></ResumeSection>
        <ProjectList resume={resume} />
        <OptionalTextSections resume={resume} />
      </main>
      <aside>
        <ResumeSection title="Summary" show={hasText(resume.summary)}><p>{resume.summary}</p></ResumeSection>
        <ResumeSection title="Skills"><SkillPills value={resume.skills} /></ResumeSection>
        <ResumeSection title="Tools" show={hasText(resume.tools)}><SkillPills value={resume.tools} /></ResumeSection>
        <ResumeSection title="Education"><EducationList resume={resume} /></ResumeSection>
        <CertificationsList resume={resume} />
        <AwardsList resume={resume} />
      </aside>
    </div>
  </>
);

const ElegantResume: React.FC<{ resume: ResumeData }> = ({ resume }) => (
  <>
    <HeaderBlock resume={resume} centered showPhoto />
    <ResumeSection title="Profile" show={hasText(resume.summary)}><p>{resume.summary}</p></ResumeSection>
    <div className="resume-two-column balanced">
      <main>
        <ResumeSection title="Experience"><ExperienceList resume={resume} /></ResumeSection>
        <ProjectList resume={resume} />
        <AwardsList resume={resume} />
      </main>
      <aside>
        <ResumeSection title="Core Skills"><SkillPills value={resume.skills} /></ResumeSection>
        <ResumeSection title="Tools" show={hasText(resume.tools)}><SkillPills value={resume.tools} /></ResumeSection>
        <ResumeSection title="Education"><EducationList resume={resume} /></ResumeSection>
        <CertificationsList resume={resume} />
        <OptionalTextSections resume={resume} />
      </aside>
    </div>
  </>
);

const TechnicalResume: React.FC<{ resume: ResumeData }> = ({ resume }) => (
  <>
    <HeaderBlock resume={resume} showPhoto />
    <div className="resume-tech-band">
      <div><strong>Skills</strong><SkillPills value={resume.skills} /></div>
      {hasText(resume.tools) && <div><strong>Stack</strong><SkillPills value={resume.tools} /></div>}
    </div>
    <ResumeSection title="Automation Impact" show={hasText(resume.summary)}><p>{resume.summary}</p></ResumeSection>
    <ProjectList resume={resume} />
    <ResumeSection title="Professional Experience"><ExperienceList resume={resume} /></ResumeSection>
    <ResumeSection title="Education"><EducationList resume={resume} /></ResumeSection>
    <CertificationsList resume={resume} />
    <AwardsList resume={resume} />
    <OptionalTextSections resume={resume} />
  </>
);

const MinimalResume: React.FC<{ resume: ResumeData }> = ({ resume }) => (
  <>
    <HeaderBlock resume={resume} centered />
    <ResumeSection title="Summary" show={hasText(resume.summary)}><p>{resume.summary}</p></ResumeSection>
    <ResumeSection title="Experience"><ExperienceList resume={resume} /></ResumeSection>
    <ResumeSection title="Skills"><p>{splitItems(resume.skills).join(" / ") || "Add skills to preview them here."}</p></ResumeSection>
    <ResumeSection title="Tools" show={hasText(resume.tools)}><p>{splitItems(resume.tools).join(" / ")}</p></ResumeSection>
    <ProjectList resume={resume} />
    <ResumeSection title="Education"><EducationList resume={resume} /></ResumeSection>
    <CertificationsList resume={resume} />
    <AwardsList resume={resume} />
    <OptionalTextSections resume={resume} />
  </>
);

export default ResumeBuilderPage;
