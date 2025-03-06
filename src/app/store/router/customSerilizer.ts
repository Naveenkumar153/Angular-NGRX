import { Params, RouterStateSnapshot } from "@angular/router";
import { RouterStateSerializer } from "@ngrx/router-store";

export interface RouterStateModel{
    url:string,
    params:Params,
    queryParams:Params
};

export class CustomSerializer implements RouterStateSerializer<RouterStateModel>{
    serialize(routerState: RouterStateSnapshot): RouterStateModel {
        const { url } = routerState;
        const { queryParams } = routerState.root;
        let route = routerState.root;
        while(route.firstChild){
            route = route.firstChild;
        }
        const { params } = route; 
        return { url, params, queryParams };
    }
}