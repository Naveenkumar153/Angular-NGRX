import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "src/app/shared/master.service";
import { blogsActions } from "./Blog.action";
import { catchError, EMPTY, exhaustMap, map, of, switchMap, tap } from "rxjs";
import { BlogModel } from "./Blog.model";


@Injectable()
export class BlogEffects {
    constructor(
        private actions$:Actions, private masterService:MasterService
    ) { };
    
    blogs$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(blogsActions.loadBlogs),
            tap(() => console.log('Effect Triggered')), // ✅ Debug log
            exhaustMap(() => {
                return this.masterService.getBlogs().pipe(
                    map((blogs:BlogModel[]) => {
                        console.log('API Response:', blogs); // ✅ API Debug
                        return blogsActions.loadSuccessBlogs({blogs});
                    }),
                    catchError((error:Error) => of(blogsActions.loadFailureBlogs({
                        errorMsg: error.message,
                    })))
                )
            })
        );
    });

    addBlog$ = createEffect(() => {
         return this.actions$.pipe(
            ofType(blogsActions.addBlog),
            tap(() => console.log('Effect Triggered')), // ✅ Debug log
            switchMap((action) => {
                return this.masterService.addBlogs(action.blogInput).pipe(
                    map((blog:BlogModel) => {
                        console.log('API Response:', blog); // ✅ API Debug
                        return blogsActions.addSuccessBlogs({blogInput: blog});
                    }),
                    catchError((error:Error) => of(blogsActions.loadFailureBlogs({
                        errorMsg: error.message,
                    })))
                )
            })
        );
    });

    updateBlog$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(blogsActions.updateBlog),
            tap(() => console.log('Effect Triggered')), // ✅ Debug log
            switchMap((action) => {
                return this.masterService.updateBlog(action.blogInput).pipe(
                    map((blog:BlogModel) => {
                        console.log('API Response:', blog); // ✅ API Debug
                        return blogsActions.updateBlogSuccess({blogInput: blog});
                    }),
                    catchError((error:Error) => of(blogsActions.loadFailureBlogs({
                        errorMsg: error.message,
                    })))
                )
            })
        );
    });

    deleteBlog$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(blogsActions.deleteBlog),
            tap(() => console.log('Effect Triggered')), // ✅ Debug log
            switchMap((action) => {
                return this.masterService.deleteBlog(action.id).pipe(
                    map((blog:BlogModel) => {
                        console.log('API Response:', blog); // ✅ API Debug
                        return blogsActions.deleteBlogSuccess({id: blog.id});
                    }),
                    catchError((error:Error) => of(blogsActions.loadFailureBlogs({
                        errorMsg: error.message,
                    })))
                )
            })
        )
    });
};