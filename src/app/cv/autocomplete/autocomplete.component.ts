import { Component, inject } from "@angular/core";
import { FormBuilder, AbstractControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, switchMap, tap } from "rxjs";
import { CvService } from "../services/cv.service";

@Component({
  selector: "app-autocomplete",
  templateUrl: "./autocomplete.component.html",
  styleUrls: ["./autocomplete.component.css"],
})
export class AutocompleteComponent {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  get search(): AbstractControl {
    return this.form.get("search")!;
  }
  form = this.formBuilder.group({ search: [""] });
  constructor() {
    this.search.valueChanges
      .pipe(debounceTime(500))
      .subscribe((search) => console.log({ search }));
  }
}

/* /* C1 {name: 'obs1', timer: 1000} , C2 */
/* from(this.params).pipe(
  mergeMap(
    (params) =>timerObs(params)
)) */
