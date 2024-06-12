import { ResolveFn } from "@angular/router";

export const firstResolver: ResolveFn<string> = (route, state) => {
  /* await new Promise((resolve) => {
    setTimeout(() => {
      console.log("cc");
    }, 2000);
  }); */

  return "cc from resolver";
};
