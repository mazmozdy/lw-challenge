import { HttpClient } from "@angular/common/http";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import { Router } from "@angular/router";
import { CoffeelistDataSource, Coffee } from "./coffeelist-datasource";

@Component({
  selector: "app-coffeelist",
  templateUrl: "./coffeelist.component.html",
  styleUrls: ["./coffeelist.component.css"],
})
export class CoffeelistComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Coffee>;
  dataSource: CoffeelistDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["name", "origin", "variety", "notes"];
  loadedCatalog: any = [];

  constructor(private router: Router, private http: HttpClient) {
    this.dataSource = new CoffeelistDataSource(http);
  }
  ngOnInit(): void {
    this.fetchCoffeeCatalog();
    this.dataSource = new CoffeelistDataSource(this.http);
    console.log("oninit");
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  showProduct(data: any): void {
    this.router.navigate(["/product", data.id]);
  }

  onFetchCoffeeCatalog() {
    this.fetchCoffeeCatalog();
  }

  private fetchCoffeeCatalog() {
    // this.http
    //   .get<Coffee>("https://random-data-api.com/api/coffee/random_coffee")
    //   .pipe()
    //   .subscribe((items) => {
    //     this.loadedCatalog = items;
    //   });
  }
}
