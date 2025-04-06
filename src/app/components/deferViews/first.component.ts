import { Component } from "@angular/core";

@Component({
    selector: 'first-component',
    template:`
        <div class="container">
            <h1>First Component</h1>
        </div>
     `,
    styles:[
        `
        .container{
            background-color: lightblue;
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
export class FirstComponent{

}