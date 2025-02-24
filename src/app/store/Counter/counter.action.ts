import { createAction, props } from "@ngrx/store";
import { Counter } from "./counter.model";

const increment = createAction(Counter.Increment);
const decrement = createAction(Counter.Decrement);
const reset     = createAction(Counter.Reset);
const customCounter = createAction(Counter.Custom, props<{ count:number, value:string }>());

export const counterActions = {
    increment,
    decrement,
    reset,
    customCounter
};