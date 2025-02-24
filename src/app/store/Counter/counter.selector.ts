import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.model";

const counterState  = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(counterState,(state) => state.count);
