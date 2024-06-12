import { InjectionToken } from "@angular/core";
import { HelperService } from "../services/helper.service";

export const HELPER_INJECTION_TOKEN = new InjectionToken<HelperService>(
  "HELPER_INJECTION_TOKEN"
);
