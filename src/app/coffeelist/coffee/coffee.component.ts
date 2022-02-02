import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Coffee } from '../../models/coffee.model';
import { CoffeeCatalogService } from '../catalog.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
})
export class CoffeeComponent implements OnInit {
  mySubscription: Subscription;
  selectedCoffee: Coffee;
  id: number;
  myCoffee: any;
  constructor(
    private route: ActivatedRoute,
    private catalogServices: CoffeeCatalogService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.myCoffee = this.catalogServices.getCoffee(this.id);
    });
    // console.log(this.id);
    // console.log(this.catalogServices.getCoffee(this.id));
    // console.log(this.myCoffee, 'this.myCoffee');
    this.selectedCoffee = this.myCoffee;
  }
}
