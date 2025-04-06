import { Component } from "@angular/core";

@Component({
    selector: 'second-component',
    template:`
        <div class="container">
            <h1>second Component</h1>
        </div>
     `,
    styles:[
        `
            .container{
                background-color: red;
                padding: 20px;
                border-radius: 5px;
                width:100%;
                color:#fff;
                margin: 20px 0px;
                height: 500px;
            }
        `
    ],
    standalone:true,
    imports:[],
})
export class SecondComponent{

}