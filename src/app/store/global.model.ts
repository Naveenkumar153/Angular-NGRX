import { BlogModel } from "./Blog/Blog.model";
import { CounterState } from "./Counter/counter.model";

export interface AppStateModel {
    counter: CounterState,
    blog: BlogModel[],
}