import { Component, inject, OnDestroy } from "@angular/core";
import { FormBuilder, AbstractControl } from "@angular/forms";
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subscription,
  switchMap,
  tap,
} from "rxjs";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv";
import { Router } from "@angular/router";

@Component({
  selector: "app-autocomplete",
  templateUrl: "./autocomplete.component.html",
  styleUrls: ["./autocomplete.component.css"],
})
export class AutocompleteComponent implements OnDestroy {
  formBuilder = inject(FormBuilder);
  subscription: Subscription;
  cvService = inject(CvService);
  router = inject(Router);
  get search(): AbstractControl {
    return this.form.get("search")!;
  }
  form = this.formBuilder.group({ search: [""] });
  cvs$: Observable<Cv[]> = this.search.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    // la valeur qui est resté 500 ms inactive
    switchMap((search) => this.cvService.selectByName(search))
  );
  constructor() {
    this.subscription = this.cvService.selectedCv$
      .pipe(tap((cv) => this.router.navigate(["/cv", cv.id])))
      .subscribe();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

/* /* C1 {name: 'obs1', timer: 1000} , C2 */
/* from(this.params).pipe(
  mergeMap(
    (params) =>timerObs(params)
)) */
