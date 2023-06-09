import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Product } from '../common/product';
import { GlobalConstants } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';

  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
                    .pipe(map(response => response));
  }

  getProductListByCategory(category: string, selectedValue: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
                    .pipe(map(response => response));

  }
}

