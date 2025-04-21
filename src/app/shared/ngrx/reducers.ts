import { createReducer, on } from '@ngrx/store';
import * as Actions from './actions';
import { Product } from '../../models/product.models';

export interface GlobalState {
  likes: Product[];
  shoppingCart: Product[];
  selectedProduct?: Product;
}

export const initialState: GlobalState = {
  likes: [],
  shoppingCart: [],
  selectedProduct: undefined,
};

export const globalReducer = createReducer(
  initialState,

  on(Actions.onProductAddedToLike, (state, { data }) => {
    if (!data || typeof data !== 'object' || !data.id) {
      return state;
    }
  
    const productExists = state.likes.some((product) => product.id === data.id);
    if (productExists) {
      return state;
    }
  
    return {
      ...state,
      likes: [...state.likes, data],
    };
  }),

  on(Actions.onProductDeletedToLike, (state, { data }) => {

    if (!data || typeof data !== 'object' || !data.id) {
      return state;
    }

    return {
      ...state,
      likes: state.likes.filter((product) => product.id !== data.id),
    };
  }),

  on(Actions.onProductAddedToShoppingCart, (state, { data }) => {
  
    if (!data || typeof data !== 'object' || !data.id) {
      return state;
    }
  
    const filteredCart = state.shoppingCart.filter((product) => product && product.id);
  
    const productExists = filteredCart.some((product) => product.id === data.id);
    if (productExists) {
      return state;
    }
  
    return {
      ...state,
      shoppingCart: [...filteredCart, data],
    };
  }),

  on(Actions.onProductDeletedToShoppingCart, (state, { data }) => {

    if (!data || typeof data !== 'object' || !data.id) {
      return state;
    }

    return {
      ...state,
      shoppingCart: state.shoppingCart.filter((product) => product.id !== data.id),
    };
  }),

  on(Actions.onClearAllLikes, (state) => {
    return {
      ...state,
      likes: [],
    };
  }),

  on(Actions.onClearAllShoppingCart, (state) => {
    return {
      ...state,
      shoppingCart: [],
    };
  }),
  on(Actions.onProductSelectedToDetails, (state, { data }) => {
    if (!data || typeof data !== 'object' || !data.id) {
      return state;
    }

    return {
      ...state,
      selectedProduct: data,
    };
  })
);