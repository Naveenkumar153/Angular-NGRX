import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { BlogActions, BlogModel } from "./Blog.model";

// export const loadBlogs    = createAction(BlogActions.Load);
// export const addBlogs     = createAction(BlogActions.Add, props<{blogInput:BlogModel}>());
// export const updateBlogs  = createAction(BlogActions.Update, props<{blogInput:BlogModel}>());
// export const deleteBlog   = createAction(BlogActions.Delete, props<{id:number}>());

export const blogsActions = createActionGroup({
    source: 'Blog',
    events:{
        loadBlogs: emptyProps(),
        loadSuccessBlogs: props<{blogs:BlogModel[]}>(),
        loadFailureBlogs: props<{errorMsg:string}>(),
        addSuccessBlogs: props<{blogInput:BlogModel}>(),
        addBlog: props<{blogInput:BlogModel}>(),
        updateBlog: props<{blogInput:BlogModel}>(),
        updateBlogSuccess: props<{blogInput:BlogModel}>(),
        deleteBlog: props<{id:number}>(),
        deleteBlogSuccess: props<{id:number}>(),
    }
});