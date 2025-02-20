import { Action, createReducer, on } from "@ngrx/store";
import { Counter } from "./counter.enum";
import { CounterActions } from "./counter.action";

interface CounterState {
    count: number;
}

export const initialState:CounterState = {
    count: 0,
};

const _counterReducer = createReducer(initialState,
    on(CounterActions.increment, (state) => ({ ...state, count: state.count + 1 })),
    on(CounterActions.decrement, (state) => ({ ...state, count: state.count - 1 })),
    on(CounterActions.reset, (state) => ({ ...state, count: 0 }))
);

export function counterReducer(state:CounterState, action: Action) {
    return _counterReducer(state, action);
    // switch (action.type) {
    //     case Counter.Increment:
    //         return state + 1;
    //     case Counter.Decrement:
    //         return state - 1;
    //     case Counter.Reset:
    //         return 0;
    //     default:
    //         return state;
    // }
};