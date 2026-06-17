import React, { useState, useMemo } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

interface University {
  name: string;
  country: string;
  web_pages: string[];
}

const universitiesList: University[] = [
  {
    name: "University of Aberdeen",
    country: "United Kingdom",
    web_pages: ["https://www.abdn.ac.uk/"],
  },
  {
    name: "University of Wales, Aberystwyth",
    country: "United Kingdom",
    web_pages: ["https://www.aber.ac.uk/"],
  },
  {
    name: "University of Abertay Dundee",
    country: "United Kingdom",
    web_pages: ["https://www.abertay.ac.uk/"],
  },
  {
    name: "American InterContinental University - London",
    country: "United Kingdom",
    web_pages: ["https://www.aiuniv.edu/"],
  },
  {
    name: "Aga Khan University",
    country: "United Kingdom",
    web_pages: ["https://www.aku.edu/"],
  },
  {
    name: "Anglia Ruskin University",
    country: "United Kingdom",
    web_pages: ["https://www.anglia.ac.uk/"],
  },
  {
    name: "Aston University",
    country: "United Kingdom",
    web_pages: ["https://www.aston.ac.uk/"],
  },
  {
    name: "The American University in London",
    country: "United Kingdom",
    web_pages: ["https://www.aul.edu/"],
  },
  {
    name: "Heythrop College, University of London",
    country: "United Kingdom",
    web_pages: ["https://www.heythrop.ac.uk/"],
  },
  {
    name: "University of Manchester",
    country: "United Kingdom",
    web_pages: ["https://www.manchester.ac.uk/"],
  },
  {
    name: "Middlesex University",
    country: "United Kingdom",
    web_pages: ["https://www.mdx.ac.uk/"],
  },
  {
    name: "Imperial College School of Medicine",
    country: "United Kingdom",
    web_pages: ["https://www.med.ic.ac.uk/"],
  },
  {
    name: "The Manchester Metropolitan University",
    country: "United Kingdom",
    web_pages: ["https://www.mmu.ac.uk/"],
  },
  {
    name: "Napier University",
    country: "United Kingdom",
    web_pages: ["https://www.napier.ac.uk/"],
  },
  {
    name: "University of Newcastle-upon-Tyne",
    country: "United Kingdom",
    web_pages: ["https://www.ncl.ac.uk/"],
  },
  {
    name: "University of Wales, Newport",
    country: "United Kingdom",
    web_pages: ["https://www.newport.ac.uk/"],
  },
  {
    name: "Newport International University",
    country: "United Kingdom",
    web_pages: ["https://www.niu.org.uk/"],
  },
  {
    name: "University of Northampton",
    country: "United Kingdom",
    web_pages: ["https://www.northampton.ac.uk/"],
  },
  {
    name: "University of Nottingham",
    country: "United Kingdom",
    web_pages: ["https://www.nottingham.ac.uk/"],
  },
  {
    name: "Nottingham Trent University",
    country: "United Kingdom",
    web_pages: ["https://www.ntu.ac.uk/"],
  },
  {
    name: "Open University",
    country: "United Kingdom",
    web_pages: ["https://www.open.ac.uk/"],
  },
  {
    name: "University of Oxford",
    country: "United Kingdom",
    web_pages: ["https://www.ox.ac.uk/"],
  },
  {
    name: "University of Paisley",
    country: "United Kingdom",
    web_pages: ["https://www.paisley.ac.uk/"],
  },
  {
    name: "University of Plymouth",
    country: "United Kingdom",
    web_pages: ["https://www.plymouth.ac.uk/"],
  },
  {
    name: "University of Portsmouth",
    country: "United Kingdom",
    web_pages: ["https://www.port.ac.uk/"],
  },
  {
    name: "Queen Mary, University of London",
    country: "United Kingdom",
    web_pages: ["https://www.qmul.ac.uk/"],
  },
  {
    name: "The Queen's University Belfast",
    country: "United Kingdom",
    web_pages: ["https://www.qub.ac.uk/"],
  },
  {
    name: "Royal Academy of Music, University of London",
    country: "United Kingdom",
    web_pages: ["https://www.ram.ac.uk/"],
  },
  {
    name: "Royal College of Art",
    country: "United Kingdom",
    web_pages: ["https://www.rca.ac.uk/"],
  },
  {
    name: "Royal College of Music, University of London",
    country: "United Kingdom",
    web_pages: ["https://www.rcm.ac.uk/"],
  },
  {
    name: "University of Reading",
    country: "United Kingdom",
    web_pages: ["https://www.rdg.ac.uk/"],
  },
  {
    name: "Royal Free Hospital School of Medicine, University of London",
    country: "United Kingdom",
    web_pages: ["https://www.rfhsm.ac.uk/"],
  },
  {
    name: "The Robert Gordon University",
    country: "United Kingdom",
    web_pages: ["https://www.rgu.ac.uk/"],
  },
  {
    name: "Royal Holloway and Bedford New College",
    country: "United Kingdom",
    web_pages: ["https://www.rhbnc.ac.uk/"],
  },
  {
    name: "Richmond University - The American International University in London",
    country: "United Kingdom",
    web_pages: ["https://www.richmond.ac.uk/"],
  },
  {
    name: "Roehampton University of Surrey",
    country: "United Kingdom",
    web_pages: ["https://www.roehampton.ac.uk/"],
  },
  {
    name: "University of Salford",
    country: "United Kingdom",
    web_pages: ["https://www.salford.ac.uk/"],
  },
  {
    name: "Institute of Advanced Legal Studies, University of London",
    country: "United Kingdom",
    web_pages: ["https://www.sas.ac.uk/ials/"],
  },
  {
    name: "Institute of Classical Studies, University of London",
    country: "United Kingdom",
    web_pages: ["https://www.sas.ac.uk/icls/"],
  },
  {
    name: "Institute of Germanic Studies, University of London",
    country: "United Kingdom",
    web_pages: ["https://www.sas.ac.uk/sigs/"],
  },
  {
    name: "Institute of Latin American Studies, University of London",
    country: "United Kingdom",
    web_pages: ["https://www.sas.ac.uk/ilas/"],
  },
  {
    name: "Warburg Institute, University of London",
    country: "United Kingdom",
    web_pages: ["https://www.sas.ac.uk/warburg/"],
  },
  {
    name: "South Bank University",
    country: "United Kingdom",
    web_pages: ["https://www.sbu.ac.uk/"],
  },
  {
    name: "Schiller International University, London",
    country: "United Kingdom",
    web_pages: ["https://www.schillerlondon.ac.uk/"],
  },
  {
    name: "Stratford College London",
    country: "United Kingdom",
    web_pages: ["https://www.sclondon.ac/"],
  },
  {
    name: "Saint George's Hospital Medical School, University of London",
    country: "United Kingdom",
    web_pages: ["https://www.sghms.ac.uk/"],
  },
  {
    name: "University of Sheffield",
    country: "United Kingdom",
    web_pages: ["https://www.shef.ac.uk/"],
  },
];

export const AdvTablePage: React.FC = () => {
  usePageMeta({
    title: "Advanced Table | LetCode with Koushik",
    description: "Practice working with advanced web tables",
    keywords: "selenium advanced table, playwright advanced table, protractor advanced table",
  });

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [pageLength, setPageLength] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortField, setSortField] = useState<"name" | "country" | "web_pages" | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const learningPoint = ["WebTable concept", "Pagination", "Sorting"];

  // Sorting Handler
  const handleSort = (field: "name" | "country" | "web_pages") => {
    let direction: "asc" | "desc" = "asc";
    if (sortField === field && sortDirection === "asc") {
      direction = "desc";
    }
    setSortField(field);
    setSortDirection(direction);
    setCurrentPage(1);
  };

  // Filter & Sort Data
  const processedData = useMemo(() => {
    let result = [...universitiesList];

    // Filter
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      result = result.filter(
        (uni) =>
          uni.name.toLowerCase().includes(lower) ||
          uni.country.toLowerCase().includes(lower) ||
          uni.web_pages.join(" ").toLowerCase().includes(lower)
      );
    }

    // Sort
    if (sortField) {
      result.sort((a, b) => {
        let valA = sortField === "web_pages" ? a.web_pages[0] || "" : a[sortField];
        let valB = sortField === "web_pages" ? b.web_pages[0] || "" : b[sortField];

        if (valA < valB) return sortDirection === "asc" ? -1 : 1;
        if (valA > valB) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [searchTerm, sortField, sortDirection]);

  // Paginated Data
  const totalPages = Math.ceil(processedData.length / pageLength);
  const paginatedData = useMemo(() => {
    const startIdx = (currentPage - 1) * pageLength;
    return processedData.slice(startIdx, startIdx + pageLength);
  }, [processedData, currentPage, pageLength]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageLength(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <PageLayout>
      <PageHeader header="Table" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-9 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg space-y-6">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pb-2">
              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                <span>Show</span>
                <select
                  value={pageLength}
                  onChange={handleLengthChange}
                  className="rounded border border-input bg-background px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                </select>
                <span>entries</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-sm text-slate-500 font-medium whitespace-nowrap">Search:</span>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search table..."
                  className="flex h-9 w-full sm:w-[200px] rounded-md border border-input bg-background px-3 py-1 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                />
              </div>
            </div>

            {/* Table */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
              <table className="w-full text-sm text-left text-slate-600 dark:text-slate-300" id="advancedtable" {...{ name: "table" }}>
                <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <th className="px-4 py-3 font-semibold w-16">S.NO</th>
                    <th
                      onClick={() => handleSort("name")}
                      className="px-4 py-3 font-semibold cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 select-none"
                    >
                      UNIVERSITY NAME {sortField === "name" && (sortDirection === "asc" ? "▲" : "▼")}
                    </th>
                    <th
                      onClick={() => handleSort("country")}
                      className="px-4 py-3 font-semibold cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 select-none"
                    >
                      COUNTRY {sortField === "country" && (sortDirection === "asc" ? "▲" : "▼")}
                    </th>
                    <th
                      onClick={() => handleSort("web_pages")}
                      className="px-4 py-3 font-semibold cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 select-none"
                    >
                      WEBSITE {sortField === "web_pages" && (sortDirection === "asc" ? "▲" : "▼")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-950">
                  {paginatedData.map((uni, idx) => {
                    const originalIdx = (currentPage - 1) * pageLength + idx + 1;
                    return (
                      <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                        <td className="px-4 py-3 font-medium">{originalIdx}</td>
                        <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">{uni.name}</td>
                        <td className="px-4 py-3">{uni.country}</td>
                        <td className="px-4 py-3">
                          {uni.web_pages.map((link, lIdx) => (
                            <a
                              key={lIdx}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-600 dark:text-emerald-400 hover:underline block"
                            >
                              {link}
                            </a>
                          ))}
                        </td>
                      </tr>
                    );
                  })}
                  {paginatedData.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-4 py-8 text-center text-slate-400 italic">
                        No matching records found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer / Pagination details */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
              <div className="text-xs text-slate-500 font-medium">
                Showing {processedData.length === 0 ? 0 : (currentPage - 1) * pageLength + 1} to{" "}
                {Math.min(currentPage * pageLength, processedData.length)} of {processedData.length} entries
              </div>

              {totalPages > 1 && (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="inline-flex items-center justify-center rounded border border-slate-200 dark:border-slate-800 text-xs font-semibold h-8 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`inline-flex items-center justify-center rounded text-xs font-semibold w-8 h-8 transition-colors ${
                        currentPage === page
                          ? "bg-emerald-600 text-white"
                          : "border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center justify-center rounded border border-slate-200 dark:border-slate-800 text-xs font-semibold h-8 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="advancedtable" />
          </div>
        </div>
      </section>
      <div className="container mx-auto mt-4">
        <Ads />
      </div>
    </PageLayout>
  );
};

export default AdvTablePage;