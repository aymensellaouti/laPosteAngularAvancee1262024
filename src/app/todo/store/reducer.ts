import { createReducer, on } from "@ngrx/store";
import { initialTodoState } from ".";
import { todoActionGroup } from "./action";
import { inject } from "@angular/core";
import { UUID_TOKEN } from "../../injection tokens/uuid.inject-token";

import { v4 as uuidv4 } from "uuid";

export const todoReducer = createReducer(
  initialTodoState,
  /* Quand on dispatch AddTodo voila ce que je fais */
  /* Il prend l'ancien state + payload s'il existe et il retourne le nouveau state */
  on(todoActionGroup.addTodo, (state, { todo }) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        ...todo,
        id: uuidv4(),
      },
    ],
  })),
  on(todoActionGroup.deleteTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id != id),
  }))
);
