import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, ChevronDown } from "lucide-react";

export const Header: React.FC = () => {
  const [themeStatus, setThemeStatus] = useState<string>("light");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  // Load theme on mount
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const savedTheme = localStorage.getItem("theme") || "light";
      setThemeStatus(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const applyTheme = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("theme", theme);
    }
  };

  const toggleTheme = () => {
    const nextTheme = themeStatus === "light" ? "dark" : "light";
    setThemeStatus(nextTheme);
    applyTheme(nextTheme);
  };

  const isActive = (paths: string[]) =>
    paths.some((p) => location.pathname === p || location.pathname.startsWith(p + "/"));

  const navLinkClass = (active: boolean) =>
    `py-2 md:py-0 text-sm font-medium transition-colors duration-200 hover:text-emerald-600 dark:hover:text-emerald-400 ${
      active
        ? "text-emerald-600 dark:text-emerald-400"
        : "text-slate-600 dark:text-slate-300"
    }`;

  const workspacePaths = [
    "/test", "/edit", "/button", "/dropdowns", "/alert", "/frame", "/radio",
    "/window", "/elements", "/draggable", "/droppable", "/sortable",
    "/selectable", "/slider", "/waits", "/table", "/advancedtable",
    "/calendar", "/forms", "/file", "/shadow",
  ];

  return (
    <nav
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/85 dark:bg-[#080d1a]/85 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/5 shadow-sm shadow-black/5 dark:shadow-black/30"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container mx-auto flex items-center justify-between h-full px-4 md:px-6 lg:px-8">
        {/* Brand/Logo */}
        <Link to="/" className="flex items-center shrink-0" aria-label="LetCode Home">
          <img src="/assets/logo.png" alt="LetCode" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 flex-1 justify-center ml-6 lg:ml-10">
          <Link
            to="/test"
            id="testing"
            className={`px-3 py-1.5 rounded-md ${navLinkClass(isActive(workspacePaths))}`}
          >
            Work-Space
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("products")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 hover:text-emerald-600 dark:hover:text-emerald-400 focus:outline-none ${
                isActive(["/product"])
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-slate-600 dark:text-slate-300"
              }`}
              onClick={() => setOpenDropdown(openDropdown === "products" ? null : "products")}
            >
              Products
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "products" ? "rotate-180" : ""}`} />
            </button>
            {/* Invisible bridge fills the gap so mouseLeave doesn't fire between button and panel */}
            <div className="absolute top-full left-0 w-full h-2" />
            <div
              className={`absolute top-[calc(100%+0.25rem)] left-0 flex flex-col bg-white dark:bg-[#0c1428] border border-slate-200/80 dark:border-white/8 rounded-xl shadow-xl shadow-black/5 dark:shadow-black/40 py-1.5 min-w-[190px] z-[60] transition-all duration-150 ${
                openDropdown === "products"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              <Link to="/product/ortoni-report" className="px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50/70 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Ortoni Report
              </Link>
              <Link to="/product/letxpath" className="px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50/70 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                LetXPath
              </Link>
              <Link to="/product/playwright-runner" className="px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50/70 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Playwright Runner
              </Link>
            </div>
          </div>

          {/* Grooming Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("grooming")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 hover:text-emerald-600 dark:hover:text-emerald-400 focus:outline-none ${
                isActive(["/test-practice", "/interview", "/pw-quiz"])
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-slate-600 dark:text-slate-300"
              }`}
              onClick={() => setOpenDropdown(openDropdown === "grooming" ? null : "grooming")}
            >
              Grooming
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "grooming" ? "rotate-180" : ""}`} />
            </button>
            {/* Invisible bridge fills the gap so mouseLeave doesn't fire between button and panel */}
            <div className="absolute top-full left-0 w-full h-2" />
            <div
              className={`absolute top-[calc(100%+0.25rem)] left-0 flex flex-col bg-white dark:bg-[#0c1428] border border-slate-200/80 dark:border-white/8 rounded-xl shadow-xl shadow-black/5 dark:shadow-black/40 py-1.5 min-w-[190px] z-[60] transition-all duration-150 ${
                openDropdown === "grooming"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              <Link to="/test-practice" className="px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50/70 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Test Practice
              </Link>
              <Link to="/interview" className="px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50/70 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Interview Q &amp; A
              </Link>
              <Link to="/pw-quiz" className="px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50/70 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Playwright Quiz
              </Link>
            </div>
          </div>

          <Link
            to="/courses"
            className={`px-3 py-1.5 rounded-md ${navLinkClass(
              isActive(["/courses", "/course", "/video"])
            )}`}
          >
            Courses
          </Link>

          <Link
            to="/contact"
            className={`px-3 py-1.5 rounded-md ${navLinkClass(
              isActive(["/contact"])
            )}`}
          >
            Contact
          </Link>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            id="toggle-theme"
            aria-label={`Switch to ${themeStatus === "dark" ? "light" : "dark"} mode`}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            data-theme-status={themeStatus}
            onClick={toggleTheme}
          >
            {themeStatus === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" id="theme-icon" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" id="theme-icon" />
            )}
          </button>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`w-5 h-0.5 bg-slate-600 dark:bg-slate-300 rounded-full transition-all duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-slate-600 dark:bg-slate-300 rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-slate-600 dark:bg-slate-300 rounded-full transition-all duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="navbar-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-200/60 dark:border-white/5 bg-white/95 dark:bg-[#080d1a]/95 backdrop-blur-xl ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
          <Link
            to="/test"
            className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive(workspacePaths)
                ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70"
            }`}
          >
            Work-Space
          </Link>

          {/* Mobile Products */}
          <div>
            <button
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(["/product"])
                  ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70"
              }`}
              onClick={() => setOpenDropdown(openDropdown === "m-products" ? null : "m-products")}
            >
              <span>Products</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === "m-products" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "m-products" && (
              <div className="ml-4 mt-1 border-l-2 border-emerald-200 dark:border-emerald-900 pl-3 flex flex-col gap-0.5">
                <Link to="/product/ortoni-report" className="py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Ortoni Report</Link>
                <Link to="/product/letxpath" className="py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">LetXPath</Link>
                <Link to="/product/playwright-runner" className="py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Playwright Runner</Link>
              </div>
            )}
          </div>

          {/* Mobile Grooming */}
          <div>
            <button
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(["/test-practice", "/interview", "/pw-quiz"])
                  ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70"
              }`}
              onClick={() => setOpenDropdown(openDropdown === "m-grooming" ? null : "m-grooming")}
            >
              <span>Grooming</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === "m-grooming" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "m-grooming" && (
              <div className="ml-4 mt-1 border-l-2 border-emerald-200 dark:border-emerald-900 pl-3 flex flex-col gap-0.5">
                <Link to="/test-practice" className="py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Test Practice</Link>
                <Link to="/interview" className="py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Interview Q &amp; A</Link>
                <Link to="/pw-quiz" className="py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Playwright Quiz</Link>
              </div>
            )}
          </div>

          <Link
            to="/courses"
            className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive(["/courses", "/course", "/video"])
                ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70"
            }`}
          >
            Courses
          </Link>

          <Link
            to="/contact"
            className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive(["/contact"])
                ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
