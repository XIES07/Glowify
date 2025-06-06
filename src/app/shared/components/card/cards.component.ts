import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/app-state';
import {
  onProductAddedToLike,
  onProductAddedToShoppingCart,
  onProductDeletedToLike,
  onProductDeletedToShoppingCart,
  onProductSelectedToDetails,
} from '../../ngrx/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() isLikePage = false;
  @Input() isCartShoppingPage = false;
  @Input() isProductsPage = false;

  @Input() products: any;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit() {}

  addProductToCart(product: any) {
    if (!product || !product.id) {
      return;
    }
    this.store.dispatch(onProductAddedToShoppingCart({ data: product }));
  }

  addProductToLike(product: any) {
    if (!product || !product.id) {
      return;
    }
    this.store.dispatch(onProductAddedToLike({ data: product }));
  }

  deleteProductFromLike(product: any) {
    if (!product || !product.id) {
      return;
    }
    this.store.dispatch(onProductDeletedToLike({ data: { id: product.id } }));
  }

  deleteProductFromCart(product: any) {
    if (!product || !product.id) {
      return;
    }
    this.store.dispatch(onProductDeletedToShoppingCart({ data: { id: product.id } }));
  }

  viewDetails(productId: string, data: any) {
    this.store.dispatch(onProductSelectedToDetails({ data }));
    this.router.navigate(['/detailsOfProducts', productId]);
  }

}