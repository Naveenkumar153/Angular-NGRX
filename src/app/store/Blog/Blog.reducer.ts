import { createReducer, on } from "@ngrx/store";
import { BlogInitialState } from "./Blog.state";
import { addBlogs, deleteBlog, loadBlogs, updateBlogs } from "./Blog.action";
import { BlogModel } from "./Blog.model";


export const blogReducer = createReducer(BlogInitialState,
    on(loadBlogs, (state) => ({ ...state, loading: true })),
    on(addBlogs, (state, { blogInput: { id, title, description } }) => { 
        return {
            ...state,
            blogs: [...state.blogs, { id, title, description }]
        }
    }),
    on(updateBlogs, (state, { blogInput: { id, title, description } }) => {
        return {
            ...state,
            blogs: state.blogs.map(blog => blog.id === id ? { ...blog, title, description } : blog)
        }
    }),
    on(deleteBlog, (state,  { id }) => {
        return {
            ...state,
            blogs: state.blogs.filter(blog => blog.id !== id)
        }
    })
);