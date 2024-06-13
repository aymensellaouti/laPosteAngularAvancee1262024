import { Component, inject, Inject } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { EMPTY, Observable, catchError, of } from "rxjs";
import { HELPER_INJECTION_TOKEN } from "../../injection tokens/helper.injection-token";
import { HelperService } from "../../services/helper.service";
import { TodoService } from "../../todo/service/todo.service";
@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  selectedCv: Cv | null = null;
  /*   selectedCv: Cv | null = null; */
  date = new Date();
  todoService = inject(TodoService);
  cvs$: Observable<Cv[]> = this.cvService.getCvs().pipe(
    catchError((e) => {
      this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
      return of(this.cvService.getFakeCvs());
    });
  );
  constructor(
    private logger: LoggerService,
    private toastr: ToastrService,
    private cvService: CvService,
    @Inject(HelperService)
    private helpersService: HelperService[]
  ) {
    this.helpersService.forEach((helper) => helper.hello());
    this.logger.logger("je suis le cvComponent");
    this.toastr.info("Bienvenu dans notre CvTech");
  }
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
