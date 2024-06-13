import { Component, inject } from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  concatMap,
  map,
  takeWhile,
  scan,
} from "rxjs";
import { Product } from "./dto/product.dto";
import { ProductService } from "./services/product.service";
import { Settings } from "./dto/product-settings.dto";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent {
  /* Todo : Faire le nécessaire pour créer le flux des produits à afficher */
  /* Tips : vous pouvez voir les différents imports non utilisés et vous en inspirer */
  settings: Settings = { limit: 12, skip: 0 };
  productService = inject(ProductService);
  settingsSubject$: BehaviorSubject<Settings> = new BehaviorSubject(
    this.settings
  );
  products$: Observable<Product[]>;
  disable = false;
  constructor() {
    this.products$ = this.settingsSubject$.pipe(
      /* setting */
      concatMap((setting) => this.productService.getProducts(setting)),
      /* ProductApiResponse */
      map((productApiResponse) => productApiResponse.products),
      /* Products */
      takeWhile((products) => {
        if (products.length == 0) {
          this.disable = true;
          return false;
        }
        return true;
      }),
      scan((oldProducts, newProducts) => [...oldProducts, ...newProducts])
    );
  }
  moreProducts() {
    this.settings.skip += this.settings.limit;
    this.settingsSubject$.next(this.settings);
  }
}
