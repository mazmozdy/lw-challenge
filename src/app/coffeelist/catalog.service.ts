import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Coffee } from '../models/coffee.model';
// import { Coffee } from './coffeelist-datasource';

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
  // selectedCoffee = new Subject<Coffee[]>();

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
  getCoffee(id: number) {
    return this.coffeeCatalog.slice()[id];
  }
  setCatalog(catalog: Coffee[]) {
    this.coffeeCatalog.push(...catalog);
    this.updatedCatalog.next(this.coffeeCatalog.slice());
  }
  fetchCatalog() {
    this.http
      .get<Coffee[]>(
        'https://random-data-api.com/api/coffee/random_coffee?size=50'
      )
      .subscribe((items) => {
        this.coffeeCatalog.push(...items);
        this.updatedCatalog.next(this.coffeeCatalog.slice());
      });
    return this.coffeeCatalog;
  }
}
