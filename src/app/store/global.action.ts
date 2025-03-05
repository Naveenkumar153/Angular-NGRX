import { createActionGroup, emptyProps, props } from "@ngrx/store";


export const globalActions = createActionGroup({
    source: 'Global',
    events:{
        'showAlertMsg': props<{msg:string}>(),
        'emptyAction': emptyProps(),
    }
});