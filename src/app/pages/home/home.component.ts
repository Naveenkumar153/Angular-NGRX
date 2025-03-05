import { NgFor } from '@angular/common';
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
    NgFor
  ]
})
export class HomeComponent {
  name:string = 'Naveen';
  disabled = false;

  comments:string[] = [];

  addComment(comment:string){
    this.comments.push(comment);
  }
}
