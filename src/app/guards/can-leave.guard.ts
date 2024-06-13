import { CanDeactivateFn } from "@angular/router";
import { TodoComponent } from "../todo/todo/todo.component";

export const canLeaveGuard: CanDeactivateFn<TodoComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.todo.name.trim() || component.todo.content.trim()) {
    return confirm(
      "Etes vous sur de sortir, le formulaire n a pas encore été soumis"
    );
  }
  /*  false undefined 0 null NaN chaineVide -0 */
  return true;
};
