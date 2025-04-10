import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.models';

export const onProductAddedToLike = createAction(
  '[GlobalStore] On Product Added To Like',
  props<{ data: Product }>()
);

export const onProductAddedToShoppingCart = createAction(
  '[GlobalStore] On Product Added To Shopping Cart',
  props<{ data: Product }>()
);

export const onProductDeletedToLike = createAction(
  '[GlobalStore] On Product Deleted To Like',
  props<{ data: Pick<Product, 'id'> }>()
);

export const onProductDeletedToShoppingCart = createAction(
  '[GlobalStore] On Product Deleted To Shopping Cart',
  props<{ data: Pick<Product, 'id'> }>()
);

export const onClearAllLikes = createAction(
  '[GlobalStore] Clear All Likes'
);

export const onClearAllShoppingCart = createAction(
  '[GlobalStore] Clear All Shopping Cart'
);