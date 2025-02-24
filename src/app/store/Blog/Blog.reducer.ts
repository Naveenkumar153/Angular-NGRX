import { createReducer, on } from "@ngrx/store";
import { BlogInitialState } from "./Blog.state";
import { loadBlogs, loadBlogsSuccess } from "./Blog.action";


export const blogReducer = createReducer(BlogInitialState,
    on(loadBlogs, (state) => ({ ...state, loading: true })),
    on(loadBlogsSuccess, (state) => ({ ...state })),
);