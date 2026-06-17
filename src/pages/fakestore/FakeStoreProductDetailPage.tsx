import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useFakeStore } from "@/context/FakeStoreContext";
import { usePageMeta } from "@/hooks/usePageMeta";
import CartValue from "@/pages/fakestore/CartValue";
import AdsHorizontal from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const FakeStoreProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useFakeStore();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  usePageMeta({
    title: product ? `${product.title} - Fake Store | LetCode with Koushik` : "Product - Fake Store | LetCode with Koushik",
    description: "Check out the product details",
    keywords: "selenium tutorial, playwright tutorial, protractor tutorial, API testing",
  });

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Failed to load product details", err);
          setIsLoading(false);
        });
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setToastMessage(`${product.title} added to cart!`);
      setTimeout(() => {
        setToastMessage(null);
      }, 3000);
    }
  };

  const capitalize = (str: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <PageLayout>
      {/* Premium Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 right-4 z-50 bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 border border-slate-800 dark:border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <span className="text-emerald-500">
            <i className="fas fa-check-circle"></i>
          </span>
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      <section className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex flex-col items-start gap-2">
            <Link
              to="/home"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 bg-background text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-slate-100 dark:hover:bg-slate-900 h-10 px-4 py-2"
            >
              <span className="mr-2">
                <i className="fas fa-arrow-left"></i>
              </span>
              <span>Products</span>
            </Link>
            {product && (
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                {capitalize(product.category)}
              </h2>
            )}
          </div>
          <CartValue />
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Loading details...</p>
          </div>
        ) : product ? (
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm text-card-foreground shadow-sm p-6 lg:p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Product Info */}
              <div className="md:col-span-7 space-y-4">
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                  {product.title}
                </h1>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  ₹ {product.price}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-md leading-relaxed">
                  {product.description}
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleAddToCart}
                    className="inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-blue-600 hover:bg-blue-700 text-white h-11 px-8"
                  >
                    <span className="mr-2">
                      <i className="fas fa-cart-plus"></i>
                    </span>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>

              {/* Product Image */}
              <div className="md:col-span-5 flex justify-center">
                <div className="bg-white rounded-lg p-6 max-w-sm border border-slate-100 dark:border-slate-900 shadow-sm flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-80 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-slate-500">Product not found.</p>
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

        <div className="mt-6">
          <AdsHorizontal />
        </div>
      </section>
    </PageLayout>
  );
};

export default FakeStoreProductDetailPage;
