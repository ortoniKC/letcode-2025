import React, { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Austrian Empire",
  "Azerbaijan",
  "Baden",
  "Bahamas, The",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Bavaria",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin (Dahomey)",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Brunswick and Lüneburg",
  "Bulgaria",
  "Burkina Faso (Upper Volta)",
  "Burma",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands, The",
  "Central African Republic",
  "Central American Federation",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo Free State, The",
  "Costa Rica",
  "Cote d’Ivoire (Ivory Coast)",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Czechoslovakia",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Duchy of Parma, The",
  "East Germany (German Democratic Republic)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Federal Government of Germany (1848-49)",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Grand Duchy of Tuscany, The",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Hanover",
  "Hanseatic Republics",
  "Hawaii",
  "Hesse",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kingdom of Serbia/Yugoslavia",
  "Kiribati",
  "Korea",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Lew Chew (Loochoo)",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mecklenburg-Schwerin",
  "Mecklenburg-Strelitz",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nassau",
  "Nauru",
  "Nepal",
  "Netherlands, The",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North German Confederation",
  "North German Union",
  "North Macedonia",
  "Norway",
  "Oldenburg",
  "Oman",
  "Orange Free State",
  "Pakistan",
  "Palau",
  "Panama",
  "Papal States",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Piedmont-Sardinia",
  "Poland",
  "Portugal",
  "Qatar",
  "Republic of Genoa",
  "Republic of Korea (South Korea)",
  "Republic of the Congo",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Schaumburg-Lippe",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands, The",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Texas",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Two Sicilies",
  "Uganda",
  "Ukraine",
  "Union of Soviet Socialist Republics",
  "United Arab Emirates, The",
  "United Kingdom, The",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Württemberg",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export const SliderPage: React.FC = () => {
  usePageMeta({
    title: "Slider | LetCode with Koushik",
    description: "Practice interacting with sliders",
    keywords: "selenium slider, playwright slider, protractor slider",
  });

  const [limit, setLimit] = useState<number>(10);
  const [words, setWords] = useState<string>("");

  const learningPoint = [
    "How to move the slider",
    "Validating the results",
    "How to use String functions like split()",
  ];

  const generate = () => {
    setWords(countries.slice(0, limit).join(" - "));
  };

  return (
    <PageLayout>
      <PageHeader header="Slider" />
      <section className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-6 md:p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="space-y-6 text-center">
              <h1 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                Word limit : {limit}
              </h1>

              <div className="w-full px-4">
                <input
                  type="range"
                  name="generate"
                  id="generate"
                  min="1"
                  max="50"
                  value={limit}
                  onChange={(e) => setLimit(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
                />
              </div>

              <div className="block pt-2">
                <button
                  onClick={generate}
                  className="inline-flex items-center justify-center rounded-md text-sm font-semibold h-10 px-6 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                >
                  Get Countries
                </button>
              </div>

              {words && (
                <div className="mt-4 p-4 bg-teal-50 border border-teal-200 text-teal-800 dark:bg-teal-950/20 dark:border-teal-800/30 dark:text-teal-400 rounded-md">
                  <p className="text-sm font-medium leading-relaxed break-words">{words}</p>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-left">
                <div className="content">
                  <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                    TODO
                  </h4>
                  <ol className="list-decimal pl-5 text-xs text-slate-500 dark:text-slate-400 space-y-1">
                    <li>Move the slider between 1 to 50</li>
                    <li>Click on the get countries button</li>
                    <li>Validate that countries are generated based on slider values</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <LearningPoint list={learningPoint} link="slider" />
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

export default SliderPage;