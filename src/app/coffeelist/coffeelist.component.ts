import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as CatalogActions from '../store/catalog.actions';
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
  coffeeCatalog: Coffee[];

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(CatalogActions.loadCatalog());
    this.store.select('coffeeCatalog').subscribe((items) => {
      this.dataSource.data = items.catalog;
      this.coffeeCatalog = items.catalog;
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
    this.store.dispatch(CatalogActions.setProduct({ product: data }));
  }
}
