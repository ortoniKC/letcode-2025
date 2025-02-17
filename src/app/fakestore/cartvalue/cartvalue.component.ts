import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../service/fakestore/cart.service';
import { ProductService } from '../../service/fakestore/product.service';

@Component({
  selector: 'app-cartvalue',
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './cartvalue.component.html'
})
export class CartvalueComponent implements OnInit {
  products = [];
  cartItemCount: number = 0;
  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);
    this.cartService.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }

}