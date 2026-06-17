import React from "react";

export const InnerframePage: React.FC = () => {
  return (
    <div className="p-2 bg-slate-50 dark:bg-slate-900 min-h-screen text-slate-900 dark:text-slate-100 flex items-center justify-center">
      <div className="w-full max-w-sm border border-slate-200 dark:border-slate-800 rounded-lg p-4 bg-white dark:bg-slate-950 shadow-sm">
        <div>
          <label className="block text-sm font-semibold mb-1 text-slate-700 dark:text-slate-300">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default InnerframePage;
