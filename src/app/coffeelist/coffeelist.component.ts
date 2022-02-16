import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { loadCatalog, loadCatalogError } from '../store/catalog.actions';
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
  coffeeCatalog: Coffee[];

  constructor(
    private router: Router,
    private catalogServices: CoffeeCatalogService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    // console.log(this.store.select('coffeeCatalog'));
    this.store.dispatch(loadCatalogError({ error: 'Error.. ' }));
    this.store
      .select('coffeeCatalog')
      .subscribe((res) => console.log('test', res.testString));
    this.store.dispatch(loadCatalog());
    this.store.select('coffeeCatalog').subscribe((items) => {
      console.log('coffeeCatalog: ', items);
    });

    // this.catalogServices.fetchCatalog().subscribe((items) => {
    //   // this.catalogServices.updateCatalog(items);
    //   this.coffeeCatalog = items;
    //   this.dataSource.data = items;
    //   // console.log(' Oninit', this.catalogServices.getCatalog());
    // });
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
