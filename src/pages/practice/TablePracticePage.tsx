import React, { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
  Cholesterol: number;
}

const initialDesserts: Dessert[] = [
  {
    name: "Frozen yogurt",
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
    Cholesterol: 70,
  },
  {
    name: "Ice cream",
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4,
    Cholesterol: 40,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16,
    carbs: 24,
    protein: 6,
    Cholesterol: 80,
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 4,
    carbs: 67,
    protein: 4,
    Cholesterol: 50,
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16,
    carbs: 49,
    protein: 4,
    Cholesterol: 60,
  },
];

export const TablePracticePage: React.FC = () => {
  usePageMeta({
    title: "WebTable | LetCode with Koushik",
    description: "Practice the web table concept",
    keywords: "selenium web table, playwright web table, protractor web table",
  });

  const [desserts, setDesserts] = useState<Dessert[]>(initialDesserts);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Dessert; direction: "asc" | "desc" } | null>(null);

  const [firstCheck, setFirstCheck] = useState<boolean>(false);
  const [secondCheck, setSecondCheck] = useState<boolean>(false);
  const [thirdCheck, setThirdCheck] = useState<boolean>(false);

  const learningPoint = [
    "Web Table concept",
    "WebElement Interface",
    "Chaining of locators",
    "Comparable (Java)",
  ];

  const handleSort = (key: keyof Dessert) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...desserts].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setDesserts(sorted);
    setSortConfig({ key, direction });
  };

  return (
    <PageLayout>
      <PageHeader header="Table" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-8 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg space-y-8">
            {/* Table 1: Shopping List */}
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1" id="shopping-title">
                Shopping List
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                ~ Add all the prices and check if the total is correct
              </p>
              <div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
                <table className="w-full text-sm text-left text-slate-600 dark:text-slate-300" id="shopping" {...{ name: "listtable" }}>
                  <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="px-4 py-2 font-semibold">Items</th>
                      <th className="px-4 py-2 font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-950">
                    <tr>
                      <td className="px-4 py-2">Chocolate</td>
                      <td className="px-4 py-2">150</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Apple</td>
                      <td className="px-4 py-2">180</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Eggs</td>
                      <td className="px-4 py-2">48</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Corn</td>
                      <td className="px-4 py-2">480</td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 font-medium">
                    <tr>
                      <td className="px-4 py-2 italic text-slate-800 dark:text-slate-300">Total</td>
                      <td className="px-4 py-2 font-extrabold text-slate-900 dark:text-white">858</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Table 2: User checklist */}
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
                Let's handle it😉
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                ~ Mark Raj as present
              </p>
              <div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
                <table className="w-full text-sm text-left text-slate-600 dark:text-slate-300" id="simpletable" {...{ name: "table" }}>
                  <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="px-4 py-2 font-semibold">First name</th>
                      <th className="px-4 py-2 font-semibold">Last name</th>
                      <th className="px-4 py-2 font-semibold">Email address</th>
                      <th className="px-4 py-2 font-semibold">Present/Absent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-950">
                    <tr>
                      <td className="px-4 py-2">Koushik</td>
                      <td className="px-4 py-2">Chatterjee</td>
                      <td className="px-4 py-2">koushik@letcode.in</td>
                      <td className="px-4 py-2">
                        <input
                          className="q w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 cursor-pointer"
                          id="first"
                          type="checkbox"
                          checked={firstCheck}
                          onChange={(e) => setFirstCheck(e.target.checked)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Yashwanth</td>
                      <td className="px-4 py-2">Raj</td>
                      <td className="px-4 py-2">yashwanth@letcode.in</td>
                      <td className="px-4 py-2">
                        <input
                          className="qe w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 cursor-pointer"
                          id="second"
                          type="checkbox"
                          checked={secondCheck}
                          onChange={(e) => setSecondCheck(e.target.checked)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Iron</td>
                      <td className="px-4 py-2">Man</td>
                      <td className="px-4 py-2">man@letcode.in</td>
                      <td className="px-4 py-2">
                        <input
                          className="qd w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 cursor-pointer"
                          id="third"
                          type="checkbox"
                          checked={thirdCheck}
                          onChange={(e) => setThirdCheck(e.target.checked)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 3: Sortable Dessert Table */}
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
                Sortable Tables
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                ~ Check if the sorting is working properly (Click column headers to sort)
              </p>
              <div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
                <table className="w-full text-sm text-left text-slate-600 dark:text-slate-300">
                  <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th onClick={() => handleSort("name")} className="px-3 py-2 font-semibold cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 select-none">
                        Dessert (100g) {sortConfig?.key === "name" && (sortConfig.direction === "asc" ? "▲" : "▼")}
                      </th>
                      <th onClick={() => handleSort("calories")} className="px-3 py-2 font-semibold cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 select-none">
                        Calories {sortConfig?.key === "calories" && (sortConfig.direction === "asc" ? "▲" : "▼")}
                      </th>
                      <th onClick={() => handleSort("fat")} className="px-3 py-2 font-semibold cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 select-none">
                        Fat (g) {sortConfig?.key === "fat" && (sortConfig.direction === "asc" ? "▲" : "▼")}
                      </th>
                      <th onClick={() => handleSort("carbs")} className="px-3 py-2 font-semibold cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 select-none">
                        Carbs (g) {sortConfig?.key === "carbs" && (sortConfig.direction === "asc" ? "▲" : "▼")}
                      </th>
                      <th onClick={() => handleSort("protein")} className="px-3 py-2 font-semibold cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 select-none">
                        Protein (g) {sortConfig?.key === "protein" && (sortConfig.direction === "asc" ? "▲" : "▼")}
                      </th>
                      <th onClick={() => handleSort("Cholesterol")} className="px-3 py-2 font-semibold cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 select-none">
                        Cholesterol(mg) {sortConfig?.key === "Cholesterol" && (sortConfig.direction === "asc" ? "▲" : "▼")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300">
                    {desserts.map((dessert, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                        <td className="px-3 py-2 font-medium text-slate-800 dark:text-slate-200">{dessert.name}</td>
                        <td className="px-3 py-2">{dessert.calories}</td>
                        <td className="px-3 py-2">{dessert.fat}</td>
                        <td className="px-3 py-2">{dessert.carbs}</td>
                        <td className="px-3 py-2">{dessert.protein}</td>
                        <td className="px-3 py-2">{dessert.Cholesterol}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2">
            <LearningPoint list={learningPoint} link="table" />
          </div>
          <div className="md:col-span-2">
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

export default TablePracticePage;