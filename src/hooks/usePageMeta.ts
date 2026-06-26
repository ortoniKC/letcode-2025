import { useEffect } from "react";

const DEFAULT_TITLE = "LetCode with Koushik";
const DEFAULT_DESCRIPTION =
  "Learn test automation with Selenium, Playwright, interview prep, quizzes, and hands-on practice pages from LetCode with Koushik.";
const DEFAULT_KEYWORDS = "LetCode, test automation, Selenium, Playwright, QA engineering, automation testing sandbox";
const SITE_URL = "https://letcode.in";
const PREVIEW_IMAGE = `${SITE_URL}/assets/logo.png`;

export interface MetaData {
  title?: string;
  description?: string;
  keywords?: string;
}

export const usePageMeta = (meta: MetaData) => {
  useEffect(() => {
    const title = meta.title || DEFAULT_TITLE;
    const description = meta.description || DEFAULT_DESCRIPTION;
    const keywords = meta.keywords || DEFAULT_KEYWORDS;
    const canonicalUrl = `${SITE_URL}${window.location.pathname}`;

    // Update Title
    document.title = title;

    // Helper to update or create meta tag
    const updateMetaTag = (
      _attributeName: string,
      attributeValue: string,
      content: string,
      isProperty = false
    ) => {
      const selector = isProperty
        ? `meta[property='${attributeValue}']`
        : `meta[name='${attributeValue}']`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (isProperty) {
          el.setAttribute("property", attributeValue);
        } else {
          el.setAttribute("name", attributeValue);
        }
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const updateCanonicalLink = (href: string) => {
      let el = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Update tags
    updateCanonicalLink(canonicalUrl);
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);
    updateMetaTag("property", "og:site_name", "LetCode");
    updateMetaTag("property", "og:type", "website");
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:url", canonicalUrl);
    updateMetaTag("property", "og:image", PREVIEW_IMAGE);
    updateMetaTag("property", "og:image:secure_url", PREVIEW_IMAGE);
    updateMetaTag("property", "og:image:type", "image/png");
    updateMetaTag("property", "og:image:width", "1254");
    updateMetaTag("property", "og:image:height", "1254");
    updateMetaTag("property", "og:image:alt", "LetCode logo");
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:image", PREVIEW_IMAGE);
    updateMetaTag("name", "twitter:image:alt", "LetCode logo");
  }, [meta.title, meta.description, meta.keywords]);
};
