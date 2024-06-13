import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { CvService } from "../cv/services/cv.service";

export const firstResolver: ResolveFn<string> = (route, state) => {
  /* await new Promise((resolve) => {
    setTimeout(() => {
      console.log("cc");
    }, 2000);
  }); */
  /* const cvSerice = inject(CvService); */
  return "cc from resolver";
};
