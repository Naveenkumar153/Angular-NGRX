import { createReducer, on } from "@ngrx/store";
import { BlogInitialState } from "./Blog.state";
import { blogsActions } from "./Blog.action";
// import { addBlogs, deleteBlog, loadBlogs, updateBlogs } from "./Blog.action";


export const blogReducer = createReducer(BlogInitialState,
    on(blogsActions.loadBlogs, (state) => ({ ...state })),
    on(blogsActions.loadSuccessBlogs, (state,action) => ({ ...state, blogs:[...action.blogs]})),
    on(blogsActions.addBlog, (state, { blogInput: { id, title, description } }) => { 
        return {
            ...state,
            blogs: [...state.blogs, { id, title, description }]
        }
    }),
    on(blogsActions.updateBlog, (state, { blogInput: { id, title, description } }) => {
        return {
            ...state,
            blogs: state.blogs.map(blog => {
                debugger;
                return blog.id === id ? { ...blog, title, description } : blog
            })
        }
    }),
    on(blogsActions.deleteBlog, (state,  { id }) => {
        return {
            ...state,
            blogs: state.blogs.filter(blog => blog.id !== id)
        }
    })
);