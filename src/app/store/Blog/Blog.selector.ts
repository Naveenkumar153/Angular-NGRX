import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogModel, Blogs } from "./Blog.model";


const blogState = createFeatureSelector<Blogs>('blog');
export const getBlogs = createSelector(blogState,(state:Blogs) => state.blogs);