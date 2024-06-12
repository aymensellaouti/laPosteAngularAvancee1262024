import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

/* HelperService elle dit à l'Injector s'il te plait j'ai des dépendances
  Merci de les injecter
*/
@Injectable()
export class Helper2Service {
  constructor(private logger: LoggerService) {}
  hello() {
    this.logger.logger("Hello from Helper 2");
  }
}
