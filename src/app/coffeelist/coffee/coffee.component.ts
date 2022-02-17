import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { selectCoffee } from 'src/app/store/catalog.selector';
import { Coffee } from '../coffeelist-datasource';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
})
export class CoffeeComponent implements OnInit {
  id: number;
  coffeeSelector$: Observable<Coffee[]>;
  selectedCoffee: Coffee;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.coffeeSelector$ = this.store.pipe(select(selectCoffee(this.id)));
    this.store.select('coffeeCatalog').subscribe((state) => {
      this.selectedCoffee = state.coffee;
    });
  }
}
