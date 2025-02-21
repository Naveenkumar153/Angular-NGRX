import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { counterActions } from 'src/app/store/Counter/counter.action';
import { Counter, CounterAction } from 'src/app/store/Counter/counter.enum';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterState } from 'src/app/store/Counter/counter.reducer';
import { getCounter } from 'src/app/store/Counter/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
  imports:[
    AsyncPipe,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ]
})
export class CounterComponent implements OnInit {

  counter$!:Observable<number>;
  counterType = Counter;
  counterActionType = CounterAction;
  selectedAction:string = 'Add';
  counterValue:string = '';
  constructor(private store:Store<{ counter:number }>) {}
  
  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  };

  counterAction(type:Counter){
    console.log(type);
    switch(type){
      case Counter.Increment:
        this.store.dispatch(counterActions.increment());
        break;
      case Counter.Decrement:
        this.store.dispatch(counterActions.decrement());
        break;
      case Counter.Reset:
        this.store.dispatch(counterActions.reset());
        break;
      case Counter.Custom:
        console.log('this.selectedAction',this.selectedAction);
        this.store.dispatch(counterActions.customCounter({ count: +this.counterValue, value: this.selectedAction }));
        break;
    }
  };

}
