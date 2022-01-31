import { Component, OnInit } from "@angular/core";
import { Coffee } from "../../models/coffee.model";

@Component({
  selector: "app-coffee",
  templateUrl: "./coffee.component.html",
  styleUrls: ["./coffee.component.css"],
})
export class CoffeeComponent implements OnInit {
  selectedCoffee: Coffee = {
    id: 4838,
    uid: "87c842ff-b956-4ba0-afaf-7ea03e285480",
    blend_name: "Summer Select",
    origin: "Kabirizi, Rwanda",
    variety: "Dilla",
    notes: "mild, syrupy, cantaloupe, cantaloupe, nutmeg",
    intensifier: "vibrant",
  };

  constructor() {}

  ngOnInit(): void {}
}
