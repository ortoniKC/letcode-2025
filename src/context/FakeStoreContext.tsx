import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

interface UserData {
  username: string;
}

interface FakeStoreContextType {
  cart: CartItem[];
  cartCount: number;
  isAuthenticated: boolean;
  user: UserData | null;
  login: (username: string, password: string) => Promise<any>;
  logout: () => void;
  addToCart: (product: any) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
}

const FakeStoreContext = createContext<FakeStoreContextType | undefined>(undefined);

export const FakeStoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<UserData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Initialize state from local storage on mount
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const savedCart = localStorage.getItem("cart_items");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
      const savedUser = localStorage.getItem("user_data");
      const savedToken = localStorage.getItem("auth_token");
      if (savedToken && savedUser) {
        setIsAuthenticated(true);
        setUser(JSON.parse(savedUser));
      }
    }
  }, []);

  // Update cart count
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  const login = async (username: string, password: string) => {
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem("auth_token", data.token);
        const userData = { username };
        localStorage.setItem("user_data", JSON.stringify(userData));
        setIsAuthenticated(true);
        setUser(userData);
      }
      return data;
    } catch (err) {
      console.error("Login failed", err);
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_data");
    setIsAuthenticated(false);
    setUser(null);
  };

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      let newCart;
      if (existing) {
        newCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        newCart = [...prevCart, { ...product, quantity: 1 }];
      }
      localStorage.setItem("cart_items", JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.id !== productId);
      localStorage.setItem("cart_items", JSON.stringify(newCart));
      return newCart;
    });
  };

  const increaseQuantity = (productId: number) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart_items", JSON.stringify(newCart));
      return newCart;
    });
  };

  const decreaseQuantity = (productId: number) => {
    setCart((prevCart) => {
      let newCart = prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
      newCart = newCart.filter((item) => item.quantity > 0);
      localStorage.setItem("cart_items", JSON.stringify(newCart));
      return newCart;
    });
  };

  const clearCart = () => {
    localStorage.removeItem("cart_items");
    setCart([]);
  };

  return (
    <FakeStoreContext.Provider
      value={{
        cart,
        cartCount,
        isAuthenticated,
        user,
        login,
        logout,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </FakeStoreContext.Provider>
  );
};

export const useFakeStore = () => {
  const context = useContext(FakeStoreContext);
  if (!context) {
    throw new Error("useFakeStore must be used within a FakeStoreProvider");
  }
  return context;
};
