import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly CART_KEY = 'cart_items';
  private cartItemCount = new BehaviorSubject<number>(0);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.updateCartCount();
    }
  }

  getCart() {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem(this.CART_KEY) || '[]');
    }
    return [];
  }

  addToCart(product: any) {
    if (isPlatformBrowser(this.platformId)) {
      let cart = this.getCart();
      const existing = cart.find((item: any) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
      this.updateCartCount();
    }
  }

  removeFromCart(productId: number) {
    if (isPlatformBrowser(this.platformId)) {
      let cart = this.getCart().filter((item: any) => item.id !== productId);
      localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
      this.updateCartCount();
    }
  }

  clearCart() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.CART_KEY);
      this.updateCartCount();
    }
  }

  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }

  private updateCartCount() {
    if (isPlatformBrowser(this.platformId)) {
      const cart = this.getCart();
      const count = cart.reduce((sum:number, item:any) => sum + (item.quantity || 0), 0);
      this.cartItemCount.next(count);
    }
  }
  decreaseQuantity(productId: number) {
    let cart = this.getCart();
    const itemIndex = cart.findIndex((item: any) => item.id === productId);
  
    if (itemIndex !== -1) {
      if (cart[itemIndex].quantity > 1) {
        cart[itemIndex].quantity -= 1;
      } else {
        cart.splice(itemIndex, 1); // Remove item if quantity reaches 0
      }
      localStorage.setItem('cart_items', JSON.stringify(cart));
      this.updateCartCount(); // Notify cart count update
    }
  }


  increaseQuantity(productId: number) {
    let cart = this.getCart();
    const itemIndex = cart.findIndex((item: any) => item.id === productId);
  
    if (itemIndex !== -1) {
      cart[itemIndex].quantity += 1; // Simply increase the quantity
      localStorage.setItem('cart_items', JSON.stringify(cart));
      this.updateCartCount(); // Notify cart count update
    }
  }
  
}