import { CanDeactivateFn } from "@angular/router";
import { TodoComponent } from "../todo/todo/todo.component";

export const testGuard: CanDeactivateFn<TodoComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return true;
};
