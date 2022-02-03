import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coffee } from './coffeelist-datasource';

@Injectable()
export class CoffeeCatalogService {
  private coffeeCatalog: Coffee[] = [];
  private selectedCoffee: Coffee;

  constructor(private http: HttpClient) {}

  //catalog functions
  fetchCatalog() {
    return this.http.get<Coffee[]>(
      'https://random-data-api.com/api/coffee/random_coffee?size=50'
    );
  }
  getCatalog() {
    return this.coffeeCatalog.slice();
  }
  updateCatalog(data: Coffee[]) {
    this.coffeeCatalog = data;
  }

  //coffee functions
  fetchCoffee(idParameter: number) {
    return this.http.get<Coffee[]>(
      'https://random-data-api.com/api/coffee/random_coffee?id=' + idParameter
    );
  }
  setCoffee(coffee: Coffee) {
    this.selectedCoffee = coffee;
  }
  getCoffee() {
    return this.selectedCoffee;
  }
}
