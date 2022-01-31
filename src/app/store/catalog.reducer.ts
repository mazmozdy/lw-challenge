import { Coffee } from "../models/coffee.model";
import * as CoffeeActions from "./catalog.actions";

export interface State {
  coffeeList: Coffee[];
}

const initialState: State = {
  coffeeList: [
    {
      id: 4838,
      uid: "87c842ff-b956-4ba0-afaf-7ea03e285480",
      blend_name: "Summer Select",
      origin: "Kabirizi, Rwanda",
      variety: "Dilla",
      notes: "mild, syrupy, cantaloupe, cantaloupe, nutmeg",
      intensifier: "vibrant",
    },
  ],
};

export function coffeeListReducer(
  state = initialState,
  actions = CoffeeActions.GetCoffee
) {
  //   switch (actions) {
  //     case CoffeeActions.GET_COFFEE:
  //       return {
  //         ...state,
  //       };
  //     default:
  //       return state;
  //   }
  return state;
}
