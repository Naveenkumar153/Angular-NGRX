import { Component } from '@angular/core';
import { CounterComponent } from 'src/app/components/counter/counter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports:[
    CounterComponent,
  ]
})
export class HomeComponent {

}
