import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/ngrx/app-state';
import { selectGlobal } from '../../shared/ngrx/selectors';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {

    constructor(private store:Store<AppState>) { }
  
    ngOnInit() {
      this.store.select(selectGlobal).subscribe((state) => {
        console.log('state', state.shoppingCart);
      } );
    }

}
