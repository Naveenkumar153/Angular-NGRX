import { createReducer, on } from "@ngrx/store";
import { BlogInitialState } from "./Blog.state";
import { blogsActions } from "./Blog.action";
// import { addBlogs, deleteBlog, loadBlogs, updateBlogs } from "./Blog.action";


export const blogReducer = createReducer(BlogInitialState,
    on(blogsActions.loadBlogs, (state) => ({ ...state,loader: false })),
    on(blogsActions.loadSuccessBlogs, (state,action) => ({ ...state, blogs:[...action.blogs],loader: false})),
    on(blogsActions.loadFailureBlogs, (state, { errorMsg }) => ({ ...state, errorMsg, loader: false })),
    on(blogsActions.addSuccessBlogs, (state, { blogInput: { id, title, description } }) => { 
        return {
            ...state,
            blogs: [...state.blogs, { id, title, description }],
            loader: false
        }
    }),
    on(blogsActions.updateBlogSuccess, (state, { blogInput: { id, title, description } }) => {
        return {
            ...state,
            blogs: state.blogs.map(blog => {
                return blog.id === id ? { ...blog, title, description } : blog
            }),
            loader: false
        }
    }),
    on(blogsActions.deleteBlog, (state,  { id }) => {
        return {
            ...state,
            blogs: state.blogs.filter(blog => blog.id !== id),
            loader: false
        }
    }),
    on(blogsActions.loader, (state, { loader }) => ({ ...state, loader }))
);