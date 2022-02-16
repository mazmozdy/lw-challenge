import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Coffee } from '../coffeelist/coffeelist-datasource';
import * as CoffeActions from './catalog.actions';

@Injectable()
export class CatalogEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadCoffeCatalog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoffeActions.loadCatalog),
      switchMap((actionMsg) => {
        console.log(actionMsg);
        return this.http
          .get<Coffee[]>(
            'https://random-data-api.com/api/coffee/random_coffee?size=50'
          )
          .pipe(
            map((items) => CoffeActions.loadCatalogSuccess({ catalog: items })),
            catchError((error) =>
              of(CoffeActions.loadCatalogError({ error: error }))
            )
          );
      })
    )
  );
}
