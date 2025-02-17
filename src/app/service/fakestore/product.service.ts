import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URL = 'https://fakestoreapi.com/products';
  private productsCache$!: Observable<any[]>;
  private productCache: { [id: number]: Observable<any> } = {};

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    if (!this.productsCache$) {
      this.productsCache$ = this.http
        .get<any[]>(this.API_URL)
        .pipe(shareReplay(1));
    }
    return this.productsCache$;
  }

  getProductById(id: number): Observable<any> {
    if (!this.productCache[id]) {
      this.productCache[id] = this.http
        .get<any>(`${this.API_URL}/${id}`)
        .pipe(shareReplay(1));
    }
    return this.productCache[id];
  }

  getProductCategoryById(id: number): Observable<string> {
    return this.getProductById(id).pipe(map((product) => product.category));
  }
}
