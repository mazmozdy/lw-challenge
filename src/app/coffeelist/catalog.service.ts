import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Coffee } from './coffeelist-datasource';

@Injectable()
export class CoffeeCatalogService {
  private coffeeCatalog: Coffee[] = [
    // {
    //   id: 4247,
    //   uid: 'e7a05140-7aea-4fdd-86ba-446799bcda7d',
    //   blend_name: 'Cascara Solstice',
    //   origin: 'Travancore, India',
    //   variety: 'Gimma',
    //   notes: 'muted, juicy, walnut, blueberry, curry',
    //   intensifier: 'tart',
    // },
  ];
  updatedCatalog = new Subject<Coffee[]>();
  selectedCoffee: Coffee;

  constructor(private http: HttpClient) {
    this.http
      .get<Coffee[]>(
        'https://random-data-api.com/api/coffee/random_coffee?size=50'
      )
      .subscribe((items) => {
        this.coffeeCatalog.push(...items);
        this.updatedCatalog.next(this.coffeeCatalog.slice());
      });
  }

  getCatalog() {
    return this.coffeeCatalog.slice();
  }
  getCoffee(idParameter: number) {
    const foundCoffee = this.coffeeCatalog.find(({ id }) => id === idParameter);
    // console.log(
    //   'selected coffee: ',
    //   this.coffeeCatalog.find(({ id }) => id === idParameter)
    // );
    return foundCoffee;
  }
  setCatalog(catalog: Coffee[]) {
    this.coffeeCatalog.push(...catalog);
    this.updatedCatalog.next(this.coffeeCatalog.slice());
  }
}
