import { blogReducer } from "./Blog/Blog.reducer";
import { counterReducer } from "./Counter/counter.reducer";
import { AppStateModel } from "./global.model";

export const appReducer = {
    counter:counterReducer,
    blog:blogReducer,
};