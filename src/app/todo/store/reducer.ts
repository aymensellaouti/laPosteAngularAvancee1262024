import { createReducer } from "@ngrx/store";
import { initialTodoState } from ".";

export const todoReducer = createReducer(initialTodoState);
