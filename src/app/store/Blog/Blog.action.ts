import { createAction } from "@ngrx/store";
import { BlogActions } from "./Blog.model";

export const loadBlogs = createAction(BlogActions.Load);
export const loadBlogsSuccess = createAction(BlogActions.LoadSuccess, (blogs: any) => ({blogs}));