import { HelperService } from "../services/helper.service";
import { LoggerService } from "../services/logger.service";

export function helperProviderFactory(logger: LoggerService) {
  return new HelperService(logger);
}
