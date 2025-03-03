import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogModel, Blogs } from "./Blog.model";
import { state } from "@angular/animations";


const blogState = createFeatureSelector<Blogs>('blog');
export const getBlogs = createSelector(blogState,(state:Blogs) => state.blogs);
export const getBlogBasedOnId = (id:number) => 
    createSelector(blogState, (state:Blogs) => state.blogs.find(blog => blog.id === id) as BlogModel ?? null);