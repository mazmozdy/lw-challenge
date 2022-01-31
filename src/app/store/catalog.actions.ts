import { Action } from "@ngrx/store";
import { Coffee } from "../models/coffee.model";

export const GET_COFFEE = "GET_COFFEE";

export class GetCoffee implements Action {
  readonly type = GET_COFFEE;
  //   payload: Coffee;
}

export type CoffeeActions = GetCoffee;
