import { ApplicationRef, Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./redux";
import { initAppAction } from "./redux/action";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  applicationRef = inject(ApplicationRef);
  store: Store<AppState> = inject(Store);
  title = "Starting Advanced Topics";
  constructor() {
    /* this.store. */
    this.store.dispatch(initAppAction());
    this.store.subscribe((state) => {
      console.log({ state });
    });
  }
}
