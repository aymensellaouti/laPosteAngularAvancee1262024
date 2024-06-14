import { NgModule } from "@angular/core";
import { RouterModule, Route, Routes } from "@angular/router";
import { TodoComponent } from "./todo/todo/todo.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { ColorComponent } from "./components/color/color.component";
import { FrontComponent } from "./templates/front/front.component";
import { AdminComponent } from "./templates/admin/admin.component";
import { LoginComponent } from "./auth/login/login.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { authGuard } from "./auth/guards/auth.guard";
import { AddCvComponent } from "./cv/add-cv/add-cv.component";
import { CvComponent } from "./cv/cv/cv.component";
import { DetailsCvComponent } from "./cv/details-cv/details-cv.component";
import { RhComponent } from "./optimizationPattern/rh/rh.component";
import { MasterDetailComponent } from "./cv/master-detail/master-detail.component";
import { firstResolver } from "./resolvers/first.resolver";
import { cvsResolver } from "./cv/resolvers/cvs.resolver";
import { canLeaveGuard } from "./guards/can-leave.guard";
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
