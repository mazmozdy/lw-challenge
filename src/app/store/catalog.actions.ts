import { createAction, props } from '@ngrx/store';
import { Coffee } from '../models/coffee.model';

export const loadCatalog = createAction('[Catalog List] Loading Catalog');
export const loadCatalogSuccess = createAction(
  '[Catalog List] Loading Catalog: Successful',
  props<{ catalog: Coffee[] }>()
);
export const loadCatalogError = createAction(
  '[Catalog List] Loading Catalog: Failed',
  props<{ error: string }>()
);

export const setProduct = createAction(
  '[Product] Load Product',
  props<{ product: Coffee }>()
);
