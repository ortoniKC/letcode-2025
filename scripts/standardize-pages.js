#!/usr/bin/env node
/**
 * Standardizes all page files to use the PageLayout component.
 * Transforms the old pattern (inline glow divs + wrapper divs) to <PageLayout>.
 */

const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "src");

const files = [
  // Practice pages
  "pages/practice/EditPracticePage.tsx",
  "pages/practice/ButtonPracticePage.tsx",
  "pages/practice/AlertPracticePage.tsx",
  "pages/practice/DropdownPracticePage.tsx",
  "pages/practice/TablePracticePage.tsx",
  "pages/practice/AdvTablePage.tsx",
  "pages/practice/RadioPracticePage.tsx",
  "pages/practice/SliderPage.tsx",
  "pages/practice/WaitsPage.tsx",
  "pages/practice/WindowPracticePage.tsx",
  "pages/practice/CalendarPage.tsx",
  "pages/practice/FormsPage.tsx",
  "pages/practice/FramePracticePage.tsx",
  "pages/practice/ShadowPage.tsx",
  "pages/practice/SelectablePage.tsx",
  "pages/practice/SortablePage.tsx",
  "pages/practice/DraggablePage.tsx",
  "pages/practice/DroppablePage.tsx",
  "pages/practice/FilePage.tsx",
  "pages/practice/GithubSearchPage.tsx",
  // Grooming pages
  "pages/grooming/InterviewPage.tsx",
  "pages/grooming/TestPracticePage.tsx",
  // Products pages
  "pages/products/OrtoniProductPage.tsx",
  "pages/products/LetxpathProductPage.tsx",
  "pages/products/PlaywrightRunnerProductPage.tsx",
  // Main pages
  "pages/main/ContactPage.tsx",
  "pages/main/NotFoundPage.tsx",
  "pages/main/WorkspacePage.tsx",
  // Quiz
  "pages/quiz/PlaywrightQuizPage.tsx",
  // Courses
  "pages/courses/CoursesMainPage.tsx",
  "pages/courses/CourseDetailPage.tsx",
  "pages/courses/VideoDetailPage.tsx",
  // FakeStore
  "pages/fakestore/FakeStoreHomePage.tsx",
  "pages/fakestore/FakeStoreProductDetailPage.tsx",
  "pages/fakestore/FakeStoreCartPage.tsx",
  "pages/fakestore/FakeStoreLoginPage.tsx",
];

const IMPORT_LINE = `import PageLayout from "@/components/PageLayout";`;

// Regexes for removal
const OUTER_WRAPPER_START = /<div\s+className="relative\s+min-h-screen[^"]*">/g;
const GLOW_DIV_LINE = /\s*\{?\/\*.*?(?:Background|Radial|Glow|glow-orb|dot-pattern).*?\*\/\}?\s*\n?/g;
const ABSOLUTE_GLOW_DIV = /\s*<div\s+className="(?:absolute|pointer-events-none)[^"]*(?:blur-\[|glow-orb|dot-pattern)[^"]*"[^/]*\/>\s*\n?/g;
const FIXED_AMBIENT_DIV_OPEN = /\s*<div\s+className="pointer-events-none fixed inset-0[^"]*"[^>]*aria-hidden="true"\s*>\s*\n?/g;
const FIXED_AMBIENT_DIV_CLOSE = /\s*<\/div>\s*\{?\/\*.*?ambient.*?\*\/\}?\s*\n?/g;
const INNER_PT_DIV_OPEN = /<div\s+className="pt-(?:16|20|24)\s+pb-(?:12|16)[^"]*">/g;
const INNER_PT_DIV_CLOSE_PATTERN = "INNER_PT_CLOSE";
const PX_IN_CONTAINER = /container\s+mx-auto\s+px-4\s+md:px-8/g;
const PX_IN_CONTAINER2 = /container\s+mx-auto\s+px-4\s+md:px-6\s+lg:px-8/g;

function hasPageLayout(content) {
  return content.includes("PageLayout");
}

function addPageLayoutImport(content) {
  if (content.includes(IMPORT_LINE)) return content;
  // Add after last import line
  const lines = content.split("\n");
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("import ")) lastImportIdx = i;
  }
  if (lastImportIdx >= 0) {
    lines.splice(lastImportIdx + 1, 0, IMPORT_LINE);
  } else {
    lines.unshift(IMPORT_LINE);
  }
  return lines.join("\n");
}

function transform(content, filePath) {
  if (hasPageLayout(content)) {
    console.log(`  [SKIP] Already uses PageLayout: ${filePath}`);
    return content;
  }

  let c = content;

  // 1. Add import
  c = addPageLayoutImport(c);

  // 2. Remove container px- overrides
  c = c.replace(PX_IN_CONTAINER, "container mx-auto");
  c = c.replace(PX_IN_CONTAINER2, "container mx-auto");

  // 3. Remove the outer wrapper div class (replace the tag, keep children)
  // Pattern: <div className="relative min-h-screen ...">
  c = c.replace(
    /<div\s+className="relative\s+min-h-screen[^"]*(?:bg-slate[^"]*)?(?:transition-colors[^"]*)?"\s*>/g,
    ""
  );

  // 4. Remove background glow comment lines
  c = c.replace(/\s*\{?\/\*\s*Background(?:\s+Radial)?\s+Glow\s*\*\/\}?\s*\n?/g, "\n");

  // 5. Remove absolute glow divs (single-line self-closing)
  c = c.replace(
    /[ \t]*<div\s+className="absolute[^"]*(?:blur-\[100px\]|glow-orb)[^"]*"\s*\/>\s*\n?/g,
    ""
  );

  // 6. Remove fixed ambient div block (PlaywrightQuizPage / WorkspacePage style)
  // Matches: <div className="pointer-events-none fixed inset-0 ... " aria-hidden="true">
  //            <div ... glow-orb ... />
  //            <div ... glow-orb ... />
  //            <div ... dot-pattern ... />
  //          </div>
  c = c.replace(
    /[ \t]*<div\s[\s\S]*?pointer-events-none[^>]*fixed inset-0[^>]*>[\s\S]*?<\/div>\s*\n?(?=\s*\{?\/\*|[ \t]*<div\s+className="pt-)/,
    ""
  );

  // 7. Remove inner pt-16/20/24 pb-12/16 wrapper — open tag
  c = c.replace(/[ \t]*<div\s+className="pt-(?:16|20|24)\s+pb-(?:12|16)">\s*\n?/g, "");

  // 8. Match final two closing </div> tags at the very end of the return block
  // The outer wrapper closing + inner pt wrapper closing
  // We need to remove exactly 2 trailing </div> before ); or );
  // Strategy: count depth and remove the last 2 </div>s in the return
  c = removeTrailingWrapperDivs(c);

  // 9. Wrap the return content with <PageLayout>
  // Find the return ( and wrap remaining content
  c = c.replace(
    /(\s*return\s*\(\s*\n)([\s\S]*?)(\n\s*\);\s*\})/,
    (match, open, body, close) => {
      const trimmedBody = body.trim();
      // Wrap with PageLayout
      return `${open}    <PageLayout>\n${indentBlock(trimmedBody, "      ")}\n    </PageLayout>${close}`;
    }
  );

  return c;
}

function indentBlock(str, indent) {
  return str
    .split("\n")
    .map((line) => (line.trim() === "" ? "" : indent + line))
    .join("\n");
}

function removeTrailingWrapperDivs(content) {
  // Remove the last 2 closing </div> tags that correspond to our wrappers
  // These appear right before ); at the end of the component
  // Pattern: ...content...\n    </div>\n  </div>\n  );\n};
  // We remove both closing divs

  // Try to remove exactly 2 </div> before the final );
  const endPattern = /(\n[ \t]*<\/div>)(\n[ \t]*<\/div>)(\n[ \t]*\);\s*\n?(?:export default|};))/;
  if (endPattern.test(content)) {
    content = content.replace(endPattern, "$3");
    return content;
  }

  // Fallback: remove just the last </div> before );
  const singleEnd = /(\n[ \t]*<\/div>)(\n[ \t]*\);\s*\n?(?:export default|};))/;
  if (singleEnd.test(content)) {
    content = content.replace(singleEnd, "$2");
  }

  return content;
}

let processed = 0;
let skipped = 0;
let errors = 0;

for (const rel of files) {
  const filepath = path.join(SRC, rel);
  if (!fs.existsSync(filepath)) {
    console.log(`  [MISSING] ${rel}`);
    continue;
  }
  try {
    const original = fs.readFileSync(filepath, "utf8");
    const transformed = transform(original, rel);
    if (transformed !== original) {
      fs.writeFileSync(filepath, transformed, "utf8");
      console.log(`  [DONE] ${rel}`);
      processed++;
    } else {
      console.log(`  [SKIP] No changes needed: ${rel}`);
      skipped++;
    }
  } catch (err) {
    console.error(`  [ERROR] ${rel}: ${err.message}`);
    errors++;
  }
}

console.log(`\nDone: ${processed} transformed, ${skipped} skipped, ${errors} errors.`);
