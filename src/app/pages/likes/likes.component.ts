import { Component } from '@angular/core';
import { AppState } from '../../shared/ngrx/app-state';
import { Store } from '@ngrx/store';
import { selectGlobal } from '../../shared/ngrx/selectors';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrl: './likes.component.scss'
})
export class LikesComponent {

  constructor(private store:Store<AppState>) { }

  products: any

  ngOnInit() {
    this.store.select(selectGlobal).subscribe((state) => {
      this.products = state.likes;
    } );
  }

}
