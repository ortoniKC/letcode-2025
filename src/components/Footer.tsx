import React from "react";
import { Link } from "react-router-dom";
import { Github, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ortoniKC",
    icon: Github,
    hover: "hover:text-slate-900 dark:hover:text-white",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@letcode",
    icon: Youtube,
    hover: "hover:text-red-500",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ortoni/",
    icon: Linkedin,
    hover: "hover:text-blue-500",
  },
];

export const Footer: React.FC = () => (
  <footer className="border-t border-slate-200/60 dark:border-white/5 bg-slate-50 dark:bg-[#050a14] mt-auto">
    <div className="container mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Left — copyright */}
      <p className="text-xs text-slate-400 dark:text-slate-500 text-center sm:text-left">
        © {new Date().getFullYear()} LetCode ·{" "}
        <a
          href="https://www.linkedin.com/in/ortoni/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          Koushik Chatterjee
        </a>{" "}
        &amp;{" "}
        <a
          href="https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          Bollineni Yaswanth
        </a>
      </p>

      {/* Right — social icons + contact */}
      <div className="flex items-center gap-4">
        {socialLinks.map(({ label, href, icon: Icon, hover }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`text-slate-400 dark:text-slate-500 ${hover} transition-colors duration-150`}
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
        <span className="w-px h-4 bg-slate-200 dark:bg-slate-800" />
        <Link
          to="/contact"
          className="text-xs text-slate-400 dark:text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          Contact
        </Link>
        <a
          href="https://buymeacoffee.com/letcode"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-amber-500 dark:text-amber-400 hover:underline"
        >
          🍕 Support
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
