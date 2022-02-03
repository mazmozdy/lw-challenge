import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { CoffeeCatalogService } from './catalog.service';
import { CoffeelistDataSource, Coffee } from './coffeelist-datasource';

@Component({
  selector: 'app-coffeelist',
  templateUrl: './coffeelist.component.html',
  styleUrls: ['./coffeelist.component.css'],
})
export class CoffeelistComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Coffee>;
  dataSource: CoffeelistDataSource;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'origin', 'variety', 'notes'];
  coffeeCatalog: Coffee[]; //= this.catalogServices.getCatalog();

  constructor(
    private router: Router,
    private catalogServices: CoffeeCatalogService
  ) {}

  ngOnInit(): void {
    this.catalogServices.fetchCatalog().subscribe((items) => {
      // this.catalogServices.updateCatalog(items);
      this.coffeeCatalog = items;
      this.dataSource.data = items;
      console.log(' Oninit', this.catalogServices.getCatalog());
    });
    this.dataSource = new CoffeelistDataSource(this.coffeeCatalog);
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  showProduct(data: Coffee): void {
    this.router.navigate(['/product', data.id]);
    this.catalogServices.setCoffee(data);
    console.log(data);
  }
}
