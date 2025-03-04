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
        addBlog: props<{blogInput:BlogModel}>(),
        updateBlog: props<{blogInput:BlogModel}>(),
        deleteBlog: props<{id:number}>(),
        loadSuccessBlogs: props<{blogs:BlogModel[]}>(),
    }
});