import { Component, inject } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
  providers: [TodoService],
})
export class TodoComponent {
  todos: Todo[] = [];
  todo = new Todo();
  acr = inject(ActivatedRoute);

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
    console.log(this.acr.snapshot.data["message"]);
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
