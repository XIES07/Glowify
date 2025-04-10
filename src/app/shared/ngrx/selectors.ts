import { createSelector } from '@ngrx/store';
import { AppState } from './app-state';

export const selectGlobalFeature = (state: AppState) => state.global;

export const selectGlobal = createSelector(
  selectGlobalFeature,
  (state: any) => state
);
