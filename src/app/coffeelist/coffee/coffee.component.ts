import { Component, OnInit } from '@angular/core';
import { CoffeeCatalogService } from '../catalog.service';
import { Coffee } from '../coffeelist-datasource';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
})
export class CoffeeComponent implements OnInit {
  id: number;
  selectedCoffee: Coffee;
  constructor(private catalogServices: CoffeeCatalogService) {}

  ngOnInit(): void {
    this.selectedCoffee = this.catalogServices.getCoffee();
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params['id'];
    // });
  }
}
