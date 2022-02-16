import { createReducer, on } from '@ngrx/store';
import { Coffee } from '../coffeelist/coffeelist-datasource';
import * as CoffeeActions from './catalog.actions';

export interface State {
  catalog: Coffee[];
  coffee: Coffee;
  testString: string;
}

export const initialState: State = {
  catalog: [],
  coffee: {
    id: -1,
    uid: '',
    blend_name: '',
    origin: '',
    variety: '',
    notes: '',
    intensifier: '',
  },
  testString: 'Hello World!',
};

export const _catalogReducer = createReducer(
  initialState,
  on(CoffeeActions.loadCatalog, (state) => ({
    ...state,
  })),
  on(CoffeeActions.loadCatalogSuccess, (state, { catalog }) => ({
    ...state,
    catalog: catalog,
  })),
  on(CoffeeActions.loadCatalogError, (state, { error }) => ({
    ...state,
    catalog: [],
    testString: 'Error loading.. ' + error,
  })),
  on(CoffeeActions.loadProduct, (state, { product }) => ({
    ...state,
    coffee: product,
  }))
);

export function catalogReducer(state: any, action: any) {
  return _catalogReducer(state, action);
}
