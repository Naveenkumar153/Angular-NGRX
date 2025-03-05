import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
@NgModule({
    exports:[
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        MatProgressSpinnerModule
    ],
    imports:[],
    declarations:[],
    providers:[],
})
export class MaterialModule {}