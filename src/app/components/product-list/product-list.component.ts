import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentCategoryId: string = "All";

  constructor(private productService: ProductService,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })
  }

  listProducts() {
    // check if id parameter is available in route
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('category');
    let categoryValue: string = "All";

    if(hasCategoryId) {
      this.currentCategoryId = this.route.snapshot.paramMap.get('category')!;
      categoryValue = this.route.snapshot.paramMap.get('value')!;
      console.log("Inside ProductList, category and value are = ", this.currentCategoryId,
                                                        categoryValue);
      this.productService.getProductListByCategory(this.currentCategoryId, categoryValue)
                          .subscribe(data => {
        this.products = data;
      });
    } else {
      this.productService.getProductList().subscribe(data => {
        this.products = data;
      });
    }
  }
}
