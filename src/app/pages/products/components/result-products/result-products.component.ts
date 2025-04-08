import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../shared/services/products.service';

@Component({
  selector: 'app-result-products',
  templateUrl: './result-products.component.html',
  styleUrls: ['./result-products.component.scss']
})
export class ResultProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.filteredProducts$.subscribe((products) => {
      this.products = products;
    });

    this.productsService.getInitialsProducts();
  }
}