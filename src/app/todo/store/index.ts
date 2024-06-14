import { Todo } from "../model/todo";

export interface TodoState {
  todos: Todo[];
}

export const initialTodoState: TodoState = {
  todos: [],
};
