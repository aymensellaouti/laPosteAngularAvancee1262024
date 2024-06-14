import { Component } from "@angular/core";
import { ConnectedUser } from "../../auth/services/auth.service";

@Component({
  selector: "app-cd-pere",
  templateUrl: "./cd-pere.component.html",
  styleUrls: ["./cd-pere.component.css"],
})
export class CdPereComponent {
  name = "aymen";
  user = new ConnectedUser(1, "admin@gmail.com");
}
