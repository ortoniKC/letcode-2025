import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/fakestore/cart.service';
import { ProductService } from '../../service/fakestore/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CartvalueComponent } from '../cartvalue/cartvalue.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, CartvalueComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  constructor(private productService: ProductService, private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
  viewProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
 
}