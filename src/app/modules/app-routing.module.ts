import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoffeeComponent } from "../coffeelist/coffee/coffee.component";
import { CoffeelistComponent } from "../coffeelist/coffeelist.component";

const routes: Routes = [
  { path: "", component: CoffeelistComponent },
  { path: "product", component: CoffeeComponent },
  { path: "product/:id", component: CoffeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
