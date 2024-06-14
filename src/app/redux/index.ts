import { TodoState } from "../todo/store";

export interface AppState {
  appName: string;
  todo: TodoState;
}

export const appInitState = {
  appName: "",
};
