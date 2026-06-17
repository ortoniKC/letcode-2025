import React from "react";
import { Link } from "react-router-dom";
import { useFakeStore } from "@/context/FakeStoreContext";
import { usePageMeta } from "@/hooks/usePageMeta";
import AdsHorizontal from "@/components/Ads";
import PageLayout from "@/components/PageLayout";

export const FakeStoreCartPage: React.FC = () => {
  usePageMeta({
    title: "Cart - Fake Store | LetCode with Koushik",
    description: "Check out the cart items",
    keywords: "selenium tutorial, playwright tutorial, protractor tutorial, API testing",
  });

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useFakeStore();

  const handleCheckout = () => {
    alert("Checkout Successful!");
    clearCart();
  };

  return (
    <PageLayout>
      <section className="container mx-auto max-w-4xl">
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm text-card-foreground shadow-sm p-6 space-y-6">
          <div className="flex items-center gap-3">
            <Link
              to="/home"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 bg-background text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-slate-100 dark:hover:bg-slate-900 h-10 px-4 py-2"
            >
              <span className="mr-2">
                <i className="fas fa-arrow-left"></i>
              </span>
              <span>Products</span>
            </Link>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-center text-slate-900 dark:text-slate-100">
            Shopping Cart
          </h2>

          {cart.length > 0 ? (
            <div className="space-y-6">
              <div className="overflow-x-auto border border-slate-100 dark:border-slate-900 rounded-lg">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 font-semibold">
                      <th className="p-4">Product</th>
                      <th className="p-4">Quantity</th>
                      <th className="p-4">Price</th>
                      <th className="p-4">Total</th>
                      <th className="p-4 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-slate-100 dark:border-slate-900 hover:bg-slate-50 dark:hover:bg-slate-900/20 text-slate-800 dark:text-slate-200"
                      >
                        <td className="p-4 font-medium max-w-xs truncate">{item.title}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 font-bold"
                            >
                              -
                            </button>
                            <span className="font-semibold px-1">{item.quantity}</span>
                            <button
                              onClick={() => increaseQuantity(item.id)}
                              className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 font-bold"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="p-4 font-semibold">${item.price}</td>
                        <td className="p-4 font-bold text-blue-600 dark:text-blue-400">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-red-100 hover:bg-red-200 dark:bg-red-950 dark:hover:bg-red-900 text-red-600 dark:text-red-400"
                          >
                            <span>
                              <i className="fas fa-trash"></i>
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  onClick={handleCheckout}
                  className="inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-emerald-600 hover:bg-emerald-700 text-white h-11 px-8"
                >
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 space-y-4">
              <p className="text-lg font-bold text-slate-500">Your cart is empty</p>
              <Link
                to="/home"
                className="inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-blue-600 hover:bg-blue-700 text-white h-10 px-6"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>

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

export default FakeStoreCartPage;
