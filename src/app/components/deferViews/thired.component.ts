import { Component } from "@angular/core";

@Component({
    selector: 'thired-component',
    template:`
        <div class="container">
            <h1>thired Component</h1>
        </div>
     `,
    styles:[
        `
            .container{
                background-color:pink;
                padding: 20px;
                margin: 20px 0px;
                border-radius: 5px;
                width:100%;
                color:#fff;
                height: 500px;
            }
        `
    ],
    standalone:true,
    imports:[],
})
export class ThiredComponent{

}