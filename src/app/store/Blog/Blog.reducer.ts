import { createReducer, on } from "@ngrx/store";
import { BlogInitialState } from "./Blog.state";
import { addBlogs, loadBlogs } from "./Blog.action";
import { BlogModel } from "./Blog.model";


export const blogReducer = createReducer(BlogInitialState,
    on(loadBlogs, (state) => ({ ...state, loading: true })),
    on(addBlogs, (state, { blogInput: { id, title, description } }) => { 
        return {
            ...state,
            blogs: [...state.blogs, { id, title, description }]
        }
        // ...state,  
        // id: id,
        // title: title,
        // description: description
    }),
);