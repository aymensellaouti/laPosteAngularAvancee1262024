import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { canLeaveGuard } from "../../guards/can-leave.guard";
import { firstResolver } from "../../resolvers/first.resolver";
import { TodoComponent } from "./todo.component";

export const TODO_ROUTES: Routes = [
  {
    path: "todo",
    component: TodoComponent,
    canDeactivate: [canLeaveGuard],
    resolve: {
      message: firstResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(TODO_ROUTES)],
  exports: [RouterModule],
})
export class TodoRouting {}
