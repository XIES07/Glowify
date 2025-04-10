import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/app-state';
import { onProductAddedToLike, onProductAddedToShoppingCart } from '../../ngrx/actions';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  @Input() products: any

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

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

}
