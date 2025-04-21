import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/ngrx/app-state';
import { selectGlobal } from '../../shared/ngrx/selectors';

@Component({
  selector: 'app-details-of-products',
  templateUrl: './details-of-products.component.html',
  styleUrls: ['./details-of-products.component.scss']
})
export class DetailsOfProductsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.store.select(selectGlobal).subscribe((state) => {
      if (state && state.selectedProduct) {
        this.product = state.selectedProduct;
      } else {
        console.warn('No product found in the global state.');
      }
    });

    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      console.log('Loading product with ID:', productId);
    }
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}