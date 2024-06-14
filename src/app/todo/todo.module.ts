import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { WeekTodoComponent } from "./week-todo/week-todo.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TodoRouting } from "./todo/todo-routing.module";

@NgModule({
  /* L'ensemble des components pipes et directives de ce modules */
  declarations: [TodoComponent, WeekTodoComponent],

  /* Voila ce que j'ai besoin d'avoir pour faire fonctionner tout ca */
  imports: [FormsModule, CommonModule, TodoRouting],

  /* ce que j'exporte ou ce que je partage avec les autres */
  exports: [],
})
export class TodoModule {}
