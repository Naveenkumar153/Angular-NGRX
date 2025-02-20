import { createAction } from "@ngrx/store";
import { Counter } from "./counter.enum";

const increment = createAction(Counter.Increment);
const decrement = createAction(Counter.Decrement);
const reset     = createAction(Counter.Reset);

export const CounterActions = {
    increment,
    decrement,
    reset
}