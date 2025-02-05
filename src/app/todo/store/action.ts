import { createActionGroup, props } from "@ngrx/store";
import { Todo } from "../model/todo";

export const todoActionGroup = createActionGroup({
  source: "Todo",
  events: {
    "Add Todo": props<{ todo: Todo }>(),
    "Delete Todo": props<{ id: string }>(),
  },
});
