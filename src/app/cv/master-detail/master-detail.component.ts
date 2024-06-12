import { Component, inject, OnInit } from "@angular/core";
import { CvService } from "../services/cv.service";
import { ToastrService } from "ngx-toastr";
import { Cv } from "../model/cv";

@Component({
  selector: "app-master-detail",
  templateUrl: "./master-detail.component.html",
  styleUrls: ["./master-detail.component.css"],
})
export class MasterDetailComponent implements OnInit {
  cvsList: Cv[] = [];
  cvService = inject(CvService);
  toastr = inject(ToastrService);
  ngOnInit(): void {
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvsList = cvs;
      },
      error: (e) => {
        this.cvsList = this.cvService.getFakeCvs();
        this.toastr.error(`
        Attention!! Les données sont fictives, problème avec le serveur.
        Veuillez contacter l'admin.`);
      },
    });
  }
}
