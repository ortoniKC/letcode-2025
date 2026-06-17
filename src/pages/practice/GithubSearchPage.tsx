import React, { useState, useEffect } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PageHeader from "@/components/PageHeader";
import LearningPoint from "@/components/LearningPoint";
import Ads, { AdsVertical } from "@/components/Ads";
import PageLayout from "@/components/PageLayout";
import {
  Search,
  MapPin,
  GitFork,
  Star,
  ExternalLink,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Github,
  Info
} from "lucide-react";

interface UserProfile {
  avatar_url: string;
  name: string;
  login: string;
  location: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  repos_url: string;
}

interface RepoItem {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

const getLanguageColor = (lang: string) => {
  const colors: Record<string, string> = {
    javascript: "bg-yellow-400",
    typescript: "bg-blue-500",
    python: "bg-indigo-500",
    java: "bg-orange-500",
    html: "bg-red-500",
    css: "bg-purple-500",
    csharp: "bg-green-600",
    go: "bg-sky-400",
    ruby: "bg-red-600",
    rust: "bg-orange-600",
    php: "bg-violet-500",
  };
  return colors[lang.toLowerCase()] || "bg-slate-400";
};

const ProfileSkeleton = () => (
  <div className="border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-5 bg-slate-50/50 dark:bg-slate-900/40 animate-pulse space-y-6">
    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
      <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0" />
      <div className="flex-1 space-y-3 w-full">
        <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-1/3 mx-auto sm:mx-0" />
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/4 mx-auto sm:mx-0" />
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mx-auto sm:mx-0 mt-2" />
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-center">
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-2">
          <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-1/2 mx-auto" />
          <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-1/3 mx-auto" />
        </div>
      ))}
    </div>
  </div>
);

const RepoSkeleton = () => (
  <div className="space-y-4">
    <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-1/4" />
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-white dark:bg-slate-950 shadow-sm animate-pulse space-y-3"
        >
          <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded w-1/3" />
          <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
          <div className="flex gap-2 pt-1">
            <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded-full w-16" />
            <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded-full w-12" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const GithubSearchPage: React.FC = () => {
  usePageMeta({
    title: "Elements | LetCode with Koushik",
    description: "Practice working with different web elements",
    keywords: "selenium web elements, playwright web elements, protractor web elements",
  });

  const [username, setUsername] = useState<string>("");
  const [user, setUser] = useState<UserProfile | null>(null);
  const [repos, setRepos] = useState<RepoItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const perPage = 10;
  const learningPoint = [
    "findElements",
    "List (Java)",
    "Enhanced for loop",
    "To validate image is exists",
    "Assert (Validation)",
  ];

  const findUser = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!username) return;

    setIsLoading(true);
    setError(null);
    setUser(null);
    setRepos([]);

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((userData: UserProfile) => {
        setUser(userData);
        setCurrentPage(1);
        loadRepos(userData.repos_url, 1);
      })
      .catch((err) => {
        console.error(err);
        setError("User not found");
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loadRepos = (reposUrl: string, page: number) => {
    if (page < 1) return;
    fetch(`${reposUrl}?per_page=${perPage}&page=${page}`)
      .then((res) => res.json())
      .then((repoData: RepoItem[]) => {
        setRepos(repoData);
        setCurrentPage(page);
      })
      .catch((err) => {
        console.error("Error loading repos:", err);
      });
  };

  useEffect(() => {
    if (user) {
      loadRepos(user.repos_url, currentPage);
    }
  }, [currentPage]);

  return (
    <PageLayout>
      <PageHeader header="Elements" />
      <section className="container mx-auto py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-9 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md text-card-foreground shadow-md shadow-slate-100/50 dark:shadow-none p-5 md:p-6 xl:p-8 transition-shadow duration-300 hover:shadow-lg space-y-6">
              
              {/* Search Header and Form */}
              <div className="space-y-4">
                <form onSubmit={findUser} className="w-full">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <span className="absolute inset-y-0 left-0 pl-3 flex.5 flex items-center text-slate-400">
                        <Search className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your git user name eg., ortonikc"
                        required
                        className="flex h-11 w-full rounded-xl border border-input bg-background/50 pl-10 pr-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
                      />
                    </div>
                    <button
                      type="submit"
                      id="search"
                      disabled={isLoading}
                      className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold h-11 px-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-sm hover:shadow active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Search className="w-4 h-4" />
                      )}
                      <span>Search</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Loading State Skeleton */}
              {isLoading && (
                <div className="space-y-6">
                  <ProfileSkeleton />
                  <RepoSkeleton />
                </div>
              )}

              {/* Error Alert */}
              {error && (
                <div className="p-4 bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 text-red-800 dark:text-red-400 rounded-xl flex items-start gap-3 max-w-2xl">
                  <span className="text-xl leading-none">⚠️</span>
                  <div className="text-sm font-semibold">{error}</div>
                </div>
              )}

              {/* User Results */}
              {user && (
                <div className="space-y-8">
                  {/* User Profile Card */}
                  <div className="border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 dark:from-emerald-500/10 dark:to-teal-500/10 shadow-sm relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
                      <div className="relative shrink-0">
                        <img
                          src={user.avatar_url}
                          alt="User avatar"
                          className="w-24 h-24 rounded-full border-2 border-emerald-500/30 p-1 shadow-md bg-white dark:bg-slate-900 object-cover"
                        />
                        <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px] shadow border border-white dark:border-slate-900">
                          <Github className="w-3.5 h-3.5" />
                        </span>
                      </div>
                      <div className="flex-1 space-y-2">
                        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-50 leading-tight">
                          {user.name || user.login}
                        </h2>
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-center sm:justify-start gap-1">
                          <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{user.location || "Location not available"}</span>
                        </p>
                        {user.bio && (
                          <p className="text-sm text-slate-650 dark:text-slate-300 italic leading-relaxed pt-1">
                            "{user.bio}"
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
                      <div className="p-3.5 rounded-xl bg-white/50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 hover:-translate-y-0.5 transition-all duration-300 text-center group">
                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                          Public Repos
                        </p>
                        <p className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">
                          {user.public_repos}
                        </p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 hover:-translate-y-0.5 transition-all duration-300 text-center group">
                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                          Public Gists
                        </p>
                        <p className="text-lg font-extrabold text-slate-800 dark:text-slate-100 mt-0.5">
                          {user.public_gists}
                        </p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 hover:-translate-y-0.5 transition-all duration-300 text-center group">
                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                          Followers
                        </p>
                        <p className="text-lg font-extrabold text-slate-800 dark:text-slate-100 mt-0.5">
                          {user.followers}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Repository List */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
                      Repositories
                    </h3>
                    {repos.length === 0 ? (
                      <p className="text-sm text-slate-500 italic">No repositories found.</p>
                    ) : (
                      <div className="space-y-3">
                        {repos.map((repo) => (
                          <div
                            key={repo.id}
                            className="group border border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-white dark:bg-slate-950 shadow-sm hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between gap-3"
                          >
                            <div className="space-y-1">
                              <h4 className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                                <a
                                  href={repo.html_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 hover:underline"
                                >
                                  <span>{repo.name}</span>
                                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                                </a>
                              </h4>
                              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                                {repo.description || "No description provided."}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-2.5 pt-1">
                              {repo.language && (
                                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border border-emerald-100/60 dark:border-emerald-900/40">
                                  <span className={`w-1.5 h-1.5 rounded-full ${getLanguageColor(repo.language)}`} />
                                  <span>{repo.language}</span>
                                </span>
                              )}
                              {repo.stargazers_count > 0 && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-yellow-50/50 dark:bg-yellow-950/20 text-yellow-600 dark:text-yellow-400 border border-yellow-100/60 dark:border-yellow-900/30">
                                  <Star className="w-3 h-3 fill-current" />
                                  <span>{repo.stargazers_count}</span>
                                </span>
                              )}
                              {repo.forks_count > 0 && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 border border-blue-100/60 dark:border-blue-900/30">
                                  <GitFork className="w-3 h-3" />
                                  <span>{repo.forks_count}</span>
                                </span>
                              )}
                            </div>
                          </div>
                        ))}

                        {/* Pagination */}
                        <div className="flex items-center justify-between mt-8 pt-5 border-t border-slate-100 dark:border-slate-800/80">
                          <button
                            onClick={() => loadRepos(user.repos_url, currentPage - 1)}
                            disabled={currentPage === 1}
                            className="inline-flex items-center justify-center gap-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-background text-xs font-bold h-9 px-3.5 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all disabled:opacity-40 disabled:pointer-events-none hover:shadow-sm"
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                            <span>Previous</span>
                          </button>
                          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/60 px-3 py-1 rounded-lg">
                            Page {currentPage}
                          </span>
                          <button
                            onClick={() => loadRepos(user.repos_url, currentPage + 1)}
                            disabled={repos.length < perPage}
                            className="inline-flex items-center justify-center gap-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-background text-xs font-bold h-9 px-3.5 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all disabled:opacity-40 disabled:pointer-events-none hover:shadow-sm"
                          >
                            <span>Next</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Instructions Panel - Always visible at the bottom when no user is fetched */}
              {!user && !isLoading && (
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800/60">
                  <div className="bg-emerald-50/30 dark:bg-emerald-950/10 border border-emerald-500/10 dark:border-emerald-500/5 rounded-xl p-4 space-y-3">
                    <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5" />
                      <span>Practice Objectives</span>
                    </h4>
                    <ol className="list-decimal pl-5 space-y-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      <li>Type and Enter your Git username</li>
                      <li>Assert that user has avatar image displayed</li>
                      <li>Print the user name &amp; other profile information</li>
                      <li>Assert that no. of public repositories are listed correctly:
                        <span className="text-[10px] text-slate-500 dark:text-slate-500 block mt-0.5 pl-1 italic font-normal">
                          e.g. if "Public Repos" displays 10, then the list below should contain 10 repository link elements.
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              )}

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-3 space-y-4">
              <LearningPoint list={learningPoint} link="elements" />
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

export default GithubSearchPage;