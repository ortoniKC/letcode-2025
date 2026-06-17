import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import CartValue from "@/pages/fakestore/CartValue";
import PageLayout from "@/components/PageLayout";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const FakeStoreHomePage: React.FC = () => {
  usePageMeta({
    title: "Fake Store | LetCode with Koushik",
    description: "Practice Page Object Model with Fake Store",
    keywords: "selenium page object model, playwright page object model, protractor page object model",
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load products", err);
        setIsLoading(false);
      });
  }, []);

  const viewProduct = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <PageLayout>
      <section className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
              Fake Store
            </h1>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-1">
              Products
            </h2>
          </div>
          <CartValue />
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => viewProduct(product.id)}
                className="flex flex-col justify-between border border-slate-200 dark:border-slate-800 rounded-xl bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm text-card-foreground shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden group"
              >
                <div className="p-4 space-y-4">
                  <h3 className="text-md font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-blue-500 transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                  <div className="aspect-square w-full relative overflow-hidden bg-white rounded-lg p-2 flex items-center justify-center border border-slate-100 dark:border-slate-900">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="p-4 pt-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      viewProduct(product.id);
                    }}
                    className="w-full inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-blue-600 hover:bg-blue-700 text-white h-10 px-4 py-2"
                  >
                    ₹ {product.price}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-sm">
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
      </section>
    </PageLayout>
  );
};

export default FakeStoreHomePage;
