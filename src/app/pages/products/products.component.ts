import { ProductsService } from './../../shared/services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  
  constructor(private productsService:ProductsService) { }

  ngOnInit() {
  }


}
