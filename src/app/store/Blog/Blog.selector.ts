import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogModel } from "./Blog.model";


const blogState = createFeatureSelector<BlogModel[]>('blog');
export const getBlogs = createSelector(blogState,(state:BlogModel[]) => state);