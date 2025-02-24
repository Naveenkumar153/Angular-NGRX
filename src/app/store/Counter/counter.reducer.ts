import {  createReducer, on } from "@ngrx/store";
import { counterActions } from "./counter.action";
import { CounterAction, CounterState } from "./counter.model";

export const initialState:CounterState = {
    count: 0,
};

export const counterReducer = createReducer(initialState,
    on(counterActions.increment, (state) => ({ ...state, count: state.count + 1 })),
    on(counterActions.decrement, (state) => ({ ...state, count: state.count - 1 })),
    on(counterActions.reset, (state) => ({ ...state, count: 0 })),
    on(counterActions.customCounter, (state, { count, value }) => ({ 
        ...state, 
        count: value === CounterAction.Add ? state.count + count : state.count - count, 
    })),
);

// export function counterReducer(state:CounterState, action: Action) {
//     return _counterReducer(state, action);
//     switch (action.type) {
//         case Counter.Increment:
//             return state + 1;
//         case Counter.Decrement:
//             return state - 1;
//         case Counter.Reset:
//             return 0;
//         default:
//             return state;
//     }
// };