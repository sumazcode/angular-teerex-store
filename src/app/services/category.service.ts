import { Injectable } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from '../common/product';
import { Category } from '../common/category';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: string[] = [];
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  // Load options available under particular category
  // by reading product list content
  async loadCategoryData(): Promise<Observable<string[]>> {

    await this.productService.getProductList().toPromise().then(data => {
      console.log("data is === ", data);
      const colours = data.map(value => value.color);
      this.categories = Array.from(new Set(colours));
      return this.categories;
    });
    return of(this.categories);
  }
}
