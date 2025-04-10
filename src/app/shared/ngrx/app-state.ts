import { ActionReducer, ActionReducerMap, INIT, UPDATE } from '@ngrx/store';
import { globalReducer } from './reducers';

export interface AppState {
  global: any;
}

export const reducers: ActionReducerMap<AppState> = {
  global: globalReducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function (state: AppState | undefined, action: any): AppState {
    const nextState = reducer(state, action);

    if (action.type === INIT || action.type === UPDATE) {
      const savedState = localStorage.getItem('state');
      if (savedState) {
        return {
          ...nextState,
          ...JSON.parse(savedState),
        };
      }
    }

    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
}
