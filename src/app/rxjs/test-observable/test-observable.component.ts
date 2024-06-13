import { Component, OnDestroy } from "@angular/core";
import { Observable, Subscription, filter, map } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-test-observable",
  templateUrl: "./test-observable.component.html",
  styleUrls: ["./test-observable.component.css"],
})
export class TestObservableComponent {
  name = "Damien";

  firstObservable$: Observable<number>;
  constructor(private toaster: ToastrService) {
    this.firstObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });

    this.firstObservable$.subscribe({
      next: (x) => {
        console.log(x);
      },
    });
    /*     setTimeout(() => { */
    this.firstObservable$
      /* 5 4 3 2 1 */
      .pipe(
        map((val) => val * 3)
        /* 15 12 9 6 3 */
      )
      .subscribe({
        next: (val) => {
          this.toaster.info("" + val);
        },
        complete: () => {
          this.toaster.warning("Le compte à rebours est terminé !!!!");
        },
      });
    /*     }, 3000);
     */
  }
}
