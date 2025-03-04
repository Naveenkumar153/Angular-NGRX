import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "src/app/shared/master.service";
import { blogsActions } from "./Blog.action";
import { catchError, EMPTY, exhaustMap, map, tap } from "rxjs";
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
                    catchError(() => EMPTY)
                )
            })
        );
    });
};