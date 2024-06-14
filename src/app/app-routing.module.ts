import { NgModule } from "@angular/core";
import { RouterModule, Route, Routes } from "@angular/router";

import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { ColorComponent } from "./components/color/color.component";
import { FrontComponent } from "./templates/front/front.component";
import { AdminComponent } from "./templates/admin/admin.component";
import { LoginComponent } from "./auth/login/login.component";
import { NF404Component } from "./components/nf404/nf404.component";

import { RhComponent } from "./optimizationPattern/rh/rh.component";

import { ProductsComponent } from "./products/products.component";
import { APP_ROUTES } from "../config/routes.config";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "rh", component: RhComponent },
  { path: "products", component: ProductsComponent },
  {
    path: APP_ROUTES.todo,
    loadChildren: () => import("./todo/todo.module").then((m) => m.TodoModule),
  },
  {
    path: APP_ROUTES.cv,
    loadChildren: () => import("./cv/cv.module").then((m) => m.CvModule),
  },
  {
    path: "",
    component: FrontComponent,
    children: [{ path: "word", component: MiniWordComponent }],
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [{ path: "color", component: ColorComponent }],
  },
  { path: "**", component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
