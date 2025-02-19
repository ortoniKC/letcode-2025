import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../service/fakestore/cart.service';
import { ProductService } from '../../service/fakestore/product.service';
import { AuthService } from '../../service/fakestore/auth.service';

@Component({
  selector: 'app-cartvalue',
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './cartvalue.component.html'
})
export class CartvalueComponent implements OnInit {
  products: any[];
  cartItemCount: number = 0;
  constructor(private productService: ProductService, private cartService: CartService, private authService: AuthService, private router:Router) {}
  isLoggedIn: boolean = false;
  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
    this.cartService.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }

}