import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartService } from '../../service/fakestore/cart.service';
import { ProductService } from '../../service/fakestore/product.service';
import { CommonModule } from '@angular/common';
import { CartvalueComponent } from '../cartvalue/cartvalue.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CapitalizeFirstPipe } from '../../pipes/first-cap.pipe';
import { AdsHorizontalComponent } from '../../main/ads/ads-horizontal.component';

@Component({
  selector: 'app-productlist',
  imports: [
    CommonModule,
    RouterModule,
    CartvalueComponent,
    MatSnackBarModule,
    CapitalizeFirstPipe,
    MatProgressSpinnerModule,
    AdsHorizontalComponent,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: 'style.css',
})
export class ProductListComponent implements OnInit {
  product: any;
  productCategory: string;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}
  isLoading: boolean = true; // Loading flag

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProductById(id).subscribe((data) => {
      this.isLoading = false; // Hide loading once data is fetched
      this.product = data;
    });

    this.productService.getProductCategoryById(id).subscribe((data) => {
      this.productCategory = data;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.snackBar.open(`${product.title} added to cart!`, 'Close', {
      duration: 3000, // 3 seconds
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: ['snackbar-success'], // Custom styling
    });
  }
}
