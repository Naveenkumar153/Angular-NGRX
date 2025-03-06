import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateModel } from "./customSerilizer";

const getRouterState = createFeatureSelector<RouterReducerState<RouterStateModel>>('router');
export const routerStateInfo = createSelector(getRouterState,({state}) => state);