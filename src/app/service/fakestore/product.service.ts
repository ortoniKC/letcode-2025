import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly API_URL = 'https://fakestoreapi.com/products';
  private productsCache$: Observable<any[]> | null = null;
  constructor(private http: HttpClient) {}
  getProducts(): Observable<any[]> {
    if (!this.productsCache$) {
      this.productsCache$ = this.http.get<any[]>(this.API_URL).pipe(
        shareReplay(1) // Cache the response and reuse it
      );
    }
    return this.productsCache$;
  }
  getProductById(id: number) {
    return fetch(`${this.API_URL}/${id}`).then(res => res.json());
  }
  getProductCategoryById(id: number) {
    return this.getProductById(id).then(product => product.category);
  }
}