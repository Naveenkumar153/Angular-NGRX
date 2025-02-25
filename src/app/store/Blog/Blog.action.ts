import { createAction, props } from "@ngrx/store";
import { BlogActions, BlogModel } from "./Blog.model";

export const loadBlogs = createAction(BlogActions.Load);
export const addBlogs  = createAction(BlogActions.Add, props<{blogInput:BlogModel}>());
