import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFakeStore } from "@/context/FakeStoreContext";
import { usePageMeta } from "@/hooks/usePageMeta";
import AdsHorizontal from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const FakeStoreLoginPage: React.FC = () => {
  usePageMeta({
    title: "Login - Fake Store | LetCode with Koushik",
    description: "Login to Fake Store",
    keywords: "selenium tutorial, playwright tutorial, protractor tutorial, API testing",
  });

  const { login, logout, isAuthenticated } = useFakeStore();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;

    try {
      setIsLoading(true);
      const res = await login(username, password);
      if (res && res.token) {
        showToast("Login Successful");
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        showToast("Login Failed");
      }
    } catch (err) {
      showToast("Login Failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    showToast("Logged Out");
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <PageLayout>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 right-4 z-50 bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 border border-slate-800 dark:border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <span className="text-blue-500">
            <i className="fas fa-info-circle"></i>
          </span>
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      <section className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Link
            to="/home"
            className="text-4xl font-extrabold tracking-tight text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 transition-colors"
          >
            Fake Store
          </Link>

          {!isAuthenticated ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl border border-slate-200 dark:border-slate-800 rounded-xl bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm p-6 shadow-sm">
              {/* Form */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Login
                </h2>
                
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-slate-800 dark:text-slate-200">
                      Username
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                        <i className="fas fa-user"></i>
                      </span>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1 text-slate-800 dark:text-slate-200">
                      Password
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                        <i className="fas fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-blue-600 hover:bg-blue-700 text-white h-10 px-4 py-2"
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </form>

                <hr className="border-slate-100 dark:border-slate-900" />
                
                <div className="text-xs text-slate-500 space-y-1 bg-slate-50 dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-900">
                  <p className="font-semibold">Test Credentials:</p>
                  <p>Username: <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded text-blue-600">mor_2314</code></p>
                  <p>Password: <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded text-blue-600">83r5^_</code></p>
                </div>
              </div>

              {/* Promo Banner / Info */}
              <div className="flex flex-col justify-center bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-100 dark:border-slate-900 text-center space-y-4">
                <div className="text-4xl text-blue-500">
                  <i className="fas fa-shop"></i>
                </div>
                <h3 className="font-bold text-slate-800 dark:text-slate-200">
                  POM Practice Store
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Use this mock storefront to practice test automation, Page Object Models, API testing, and assertions.
                </p>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-md border border-slate-200 dark:border-slate-800 rounded-xl bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm p-8 shadow-sm text-center space-y-6">
              <div className="text-5xl text-emerald-500">
                <i className="fas fa-check-circle"></i>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                You are logged in
              </h2>
              <div className="flex flex-col gap-3">
                <Link
                  to="/home"
                  className="w-full inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white h-10 px-4 py-2"
                >
                  Go to Store
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 bg-background text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-slate-100 dark:hover:bg-slate-900 h-10 px-4 py-2"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

          <div className="w-full max-w-2xl mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-sm text-center">
            Credit: Built using{" "}
            <a
              className="text-blue-600 hover:underline font-semibold"
              href="https://fakestoreapi.com/"
              target="_blank"
              rel="noreferrer"
            >
              Fakestoreapi
            </a>
          </div>

          <div className="w-full max-w-2xl mt-6">
            <AdsHorizontal />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FakeStoreLoginPage;
