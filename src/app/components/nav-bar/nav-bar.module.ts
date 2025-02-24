import { NgModule } from "@angular/core";
import { NavBarComponent } from "./nav-bar.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [MatToolbarModule,MatButtonModule,CommonModule,RouterModule],
    exports: [NavBarComponent],
    declarations: [NavBarComponent],
})

export class NavBarModule {};