import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFakeStore } from "@/context/FakeStoreContext";

export const CartValue: React.FC = () => {
  const { cartCount, isAuthenticated, logout } = useFakeStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex items-center gap-3 justify-end">
      {/* Cart button */}
      <Link
        to="/cart"
        className="relative inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 bg-background text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-slate-100 dark:hover:bg-slate-900 h-10 w-10"
      >
        <span className="text-slate-700 dark:text-slate-300">
          <i className="fas fa-cart-shopping"></i>
        </span>
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
            {cartCount}
          </span>
        )}
      </Link>

      {/* Login / Logout button */}
      {!isAuthenticated ? (
        <Link
          to="/login"
          className="inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 bg-background text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-slate-100 dark:hover:bg-slate-900 h-10 w-10"
        >
          <span className="text-slate-700 dark:text-slate-300">
            <i className="fas fa-user"></i>
          </span>
        </Link>
      ) : (
        <button
          onClick={handleLogout}
          className="inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 bg-background text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-slate-100 dark:hover:bg-slate-900 h-10 w-10"
        >
          <span className="text-slate-700 dark:text-slate-300">
            <i className="fas fa-sign-out-alt"></i>
          </span>
        </button>
      )}
    </div>
  );
};

export default CartValue;
