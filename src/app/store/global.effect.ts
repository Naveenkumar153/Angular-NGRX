import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../shared/master.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { globalActions } from "./global.action";
import { catchError, exhaustMap, map, of } from "rxjs";


@Injectable()
export class GlobalEffects{
    constructor(
            private actions$:Actions,private snackBar: MatSnackBar, private store: Store,
        ) { };

    showAlert$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(globalActions.showAlertMsg),
            exhaustMap((action) => {
                return this.showSnackBar(action.msg)
                .afterDismissed()
                .pipe(
                    map(() => {
                        return globalActions.emptyAction(); 
                    }),
                    catchError((error:Error) => of(globalActions.showAlertMsg({ msg: "Update Failed - " + error.message })))
                )
            })
        )
    });

    private showSnackBar(msg:string) {
        return this.snackBar.open(msg, 'Close', { 
            duration: 3000,
            verticalPosition:'top',
            horizontalPosition:'right',
         });
    }
}