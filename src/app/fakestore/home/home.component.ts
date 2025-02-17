import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/fakestore/cart.service';
import { ProductService } from '../../service/fakestore/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CartvalueComponent } from '../cartvalue/cartvalue.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterModule,
    CartvalueComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: 'style.css',
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}
  isLoading: boolean = true; // Loading flag

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.isLoading = false; // Loading flag
    });
  }

  viewProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
