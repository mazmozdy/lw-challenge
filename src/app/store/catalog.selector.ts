import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { Coffee } from '../coffeelist/coffeelist-datasource';

export const selectCoffee = (selectedCoffeeId: number) =>
  createSelector(
    (state: AppState) => state.coffeeCatalog.catalog,
    (catalog: Coffee[]) => {
      return catalog.filter((coffee: Coffee) => coffee.id !== selectedCoffeeId);
    }
  );
