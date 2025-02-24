import { Component } from '@angular/core';
import { CounterComponent } from 'src/app/components/counter/counter.component';
import { NavBarModule } from 'src/app/components/nav-bar/nav-bar.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports:[
    NavBarModule,
  ]
})
export class HomeComponent {

}
