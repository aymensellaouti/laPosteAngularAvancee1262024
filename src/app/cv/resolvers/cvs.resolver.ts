import { ResolveFn } from "@angular/router";
import { Cv } from "../model/cv";
import { CvService } from "./../services/cv.service";
import { inject } from "@angular/core";

export const cvsResolver: ResolveFn<Cv[]> = (route, state) => {
  const cvService = inject(CvService);
  return cvService.getCvs();
};
