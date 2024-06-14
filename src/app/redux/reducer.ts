import { createReducer, on } from "@ngrx/store";
import { appInitState } from ".";
import { initAppAction } from "./action";

export const appStateReducer = createReducer(
  appInitState,
  on(initAppAction, (oldState) => ({
    ...oldState,
    appName: "La Banque Postale",
  }))
);
