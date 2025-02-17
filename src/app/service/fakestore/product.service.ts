import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly API_URL = 'https://fakestoreapi.com/products';

  getProducts() {
    return fetch(this.API_URL).then(res => res.json());
  }
  getProductById(id: number) {
    return fetch(`${this.API_URL}/${id}`).then(res => res.json());
  }
  getProductCategoryById(id: number) {
    return this.getProductById(id).then(product => product.category);
  }
}