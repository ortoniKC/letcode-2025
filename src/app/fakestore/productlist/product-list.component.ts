import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartService } from '../../service/fakestore/cart.service';
import { ProductService } from '../../service/fakestore/product.service';
import { CommonModule } from '@angular/common';
import { CartvalueComponent } from "../cartvalue/cartvalue.component";

@Component({
  selector: 'app-productlist',
  imports: [CommonModule, RouterModule, CartvalueComponent],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  product: any;
  productCategory:string
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).then(data => this.product = data);
    this.productService.getProductCategoryById(id).then(data => this.productCategory = data);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

}