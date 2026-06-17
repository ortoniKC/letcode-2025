import React, { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const DropdownPracticePage: React.FC = () => {
  usePageMeta({
    title: "Dropdowns | LetCode with Koushik",
    description: "Practice working with dropdown selections",
    keywords: "selenium dropdown select, playwright dropdown select, protractor dropdown select",
  });

  const [fruitSelected, setFruitSelected] = useState<string>("");
  const [heroSelected, setHeroSelected] = useState<string>("");
  const [langSelected, setLangSelected] = useState<string>("");
  const [countrySelected, setCountrySelected] = useState<string>("");

  const learningPoint = [
    "selectByVisibleText()",
    "isMultiple()",
    "How to select multiple values",
    "selectByIndex()",
    "getOptions()",
    "selectByValue()",
    "getFirstSelectedOption()",
  ];

  const handleFruitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.selectedOptions[0]?.textContent || "";
    if (selected === "Select Fruit") {
      setFruitSelected("");
    } else {
      setFruitSelected(selected);
    }
  };

  const handleHeroChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions)
      .map((opt) => opt.textContent)
      .join(", ");
    setHeroSelected(selected);
  };

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.selectedOptions[0]?.textContent || "";
    setLangSelected(selected);
  };

  return (
    <PageLayout>
      <PageHeader header="Dropdown" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="space-y-6">
              {/* Field 1 */}
              <div>
                <label htmlFor="fruits" className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Select the apple using visible text
                </label>
                <div className="control">
                  <select
                    id="fruits"
                    onChange={handleFruitChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                  >
                    <option value="header">Select Fruit</option>
                    <option value="0">Apple</option>
                    <option value="1">Mango</option>
                    <option value="2">Orange</option>
                    <option value="3">Banana</option>
                    <option value="4">Pine Apple</option>
                  </select>
                </div>
                {fruitSelected && (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 text-green-800 dark:bg-green-950/20 dark:border-green-800/30 dark:text-green-400 rounded-md">
                    <p className="text-sm font-medium">You have selected {fruitSelected}</p>
                  </div>
                )}
              </div>

              {/* Field 2 */}
              <div>
                <label htmlFor="superheros" className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Select your super hero's
                </label>
                <div className="control">
                  <select
                    id="superheros"
                    onChange={handleHeroChange}
                    multiple
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 min-h-[180px]"
                  >
                    <option value="am">Ant-Man</option>
                    <option value="aq">Aquaman</option>
                    <option value="ta">The Avengers</option>
                    <option value="bt">Batman</option>
                    <option value="bw">Batwoman</option>
                    <option value="bp">Black Panther</option>
                    <option value="ca">Captain America</option>
                    <option value="cm">Captain Marvel</option>
                    <option value="dd">Daredevil</option>
                    <option value="ds">Doc Savage</option>
                    <option value="ds">Doctor Strange</option>
                    <option value="ek">Elektra</option>
                    <option value="ff">Fantastic Four</option>
                    <option value="gr">Ghost Rider</option>
                    <option value="gl">Green Lantern</option>
                    <option value="gx">Guardians of the Galaxy</option>
                    <option value="hb">Hellboy</option>
                    <option value="ih">Incredible Hulk</option>
                    <option value="im">Iron Man</option>
                    <option value="mm">Marvelman</option>
                    <option value="rb">Robin</option>
                    <option value="ts">The Shadow</option>
                    <option value="sm">Spider-Man</option>
                    <option value="sg">Supergirl</option>
                    <option value="sm">Superman</option>
                    <option value="th">Thor</option>
                    <option value="wv">Wolverine</option>
                    <option value="ww">Wonder Woman</option>
                    <option value="xm">X-Men</option>
                  </select>
                </div>
                {heroSelected && (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 text-green-800 dark:bg-green-950/20 dark:border-green-800/30 dark:text-green-400 rounded-md">
                    <p className="text-sm font-medium">You have selected {heroSelected}</p>
                  </div>
                )}
              </div>

              {/* Field 3 */}
              <div>
                <label htmlFor="lang" className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Select the last programming language and print all the options
                </label>
                <div className="control">
                  <select
                    id="lang"
                    onChange={handleLangChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                  >
                    <option value="js">JavaScript</option>
                    <option value="java">Java</option>
                    <option value="py">Python</option>
                    <option value="swift">Swift</option>
                    <option value="sharp">C#</option>
                  </select>
                </div>
                {langSelected && (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 text-green-800 dark:bg-green-950/20 dark:border-green-800/30 dark:text-green-400 rounded-md">
                    <p className="text-sm font-medium">You have selected {langSelected}</p>
                  </div>
                )}
              </div>

              {/* Field 4 */}
              <div>
                <label htmlFor="country" className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">
                  Select India using value &amp; print the selected value
                </label>
                <div className="control">
                  <select
                    id="country"
                    value={countrySelected}
                    onChange={(e) => setCountrySelected(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                  >
                    <option value="Argentina">Argentina</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="India">India</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Venezuela">Venezuela</option>
                  </select>
                </div>
                {countrySelected && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-200 text-indigo-800 dark:bg-indigo-950/20 dark:border-indigo-800/30 dark:text-indigo-400 rounded-md">
                    <p className="text-sm font-medium">Selected Value: {countrySelected}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="dropdowns" />
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

export default DropdownPracticePage;