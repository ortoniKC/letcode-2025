import React, { useState } from "react";

export const FrameUiPage: React.FC = () => {
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");

  return (
    <div className="p-4 bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          Enter Details
        </h1>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-slate-700 dark:text-slate-300">
              First Name
            </label>
            <input
              type="text"
              name="fname"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              placeholder="Enter name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-slate-700 dark:text-slate-300">
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              placeholder="Enter email" // Preserved original placeholder "Enter email" from Angular code
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
            />
          </div>
        </form>

        {lname && (
          <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 dark:bg-emerald-950/20 dark:border-blue-800/30 dark:text-emerald-400 rounded-md">
            <p className="text-sm font-semibold text-center">
              You have entered {fname} {lname}
            </p>
          </div>
        )}

        <div className="mt-6 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-900">
          <iframe
            src="/innerframe"
            className="w-full h-[220px] block border-none"
            title="Inner Frame"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameUiPage;
