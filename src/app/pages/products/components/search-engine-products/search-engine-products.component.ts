import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../shared/services/products.service';

@Component({
  selector: 'app-search-engine-products',
  templateUrl: './search-engine-products.component.html',
  styleUrls: ['./search-engine-products.component.scss']
})
export class SearchEngineProductsComponent implements OnInit {
  categories: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.categories$.subscribe((categories) => {
      this.categories = categories;
    });

    this.productsService.getCateotysOfProducts();
  }

  selectCategory(categoryName: string) {
    if (categoryName) {
      this.productsService.getProductsByCategory(categoryName);
    }
    else this.productsService.getInitialsProducts();
  }
}