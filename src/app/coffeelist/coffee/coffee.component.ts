import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Coffee } from '../coffeelist-datasource';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
})
export class CoffeeComponent implements OnInit {
  id: number;
  selectedCoffee: Coffee;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('coffeeCatalog').subscribe((state) => {
      this.selectedCoffee = state.coffee;
    });
  }
}
