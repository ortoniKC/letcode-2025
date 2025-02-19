import { Component } from '@angular/core';
import { CartService } from '../../service/fakestore/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdsHorizontalComponent } from '../../main/ads/ads-horizontal.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule, RouterModule, AdsHorizontalComponent],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart: any[] = [];

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cart = this.cartService.getCart();
  }

  checkout() {
    alert('Checkout Successful!');
    this.cartService.clearCart();
    this.cart = [];
  }
  decreaseQuantity(productId: number) {
    this.cartService.decreaseQuantity(productId);
    this.loadCart(); // Refresh cart data after update
  }

  increaseQuantity(productId: number) {
    this.cartService.increaseQuantity(productId);
    this.loadCart(); // Refresh cart data after update
  }
  loadCart() {
    this.cart = this.cartService.getCart();
  }
}
