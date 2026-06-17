import { useEffect } from "react";

export interface MetaData {
  title?: string;
  description?: string;
  keywords?: string;
}

export const usePageMeta = (meta: MetaData) => {
  useEffect(() => {
    const title = meta.title || "LetCode with Koushik";
    const description = meta.description || "Testing Hub - Curated for testers";
    const keywords = meta.keywords || "test automation, selenium, playwright";

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

    // Update tags
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag(
      "property",
      "og:image",
      "https://raw.githubusercontent.com/ortoniKC/ortoniKC/refs/heads/main/letcode.png"
    );
    updateMetaTag(
      "name",
      "twitter:image",
      "https://raw.githubusercontent.com/ortoniKC/ortoniKC/refs/heads/main/letcode.png"
    );
  }, [meta.title, meta.description, meta.keywords]);
};
