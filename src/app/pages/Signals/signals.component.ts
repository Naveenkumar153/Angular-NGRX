import { Component, computed, effect, OnInit, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  standalone:true,
  imports: [],
})
export class SignalsComponent implements OnInit {
  count   = signal(0);
  colours = signal(['red', 'green', 'blue']);
  length  = signal(20);
  breadth = signal(40);
  area    = computed(() => {
    return this.length() + this.breadth();
  }, { });

  constructor() {
    effect(() => {
      console.log('colours', this.colours());
    }); 
    effect(() => {
      console.log('area', this.area());
    }); 
    effect(() => {
      console.log('count', this.count());
    }); 
  }

  ngOnInit(): void {
  };

  increment() {
    // this.count.update(value => value + 1);
    this.colours.update(colours => [...colours, 'yellow']);
    // console.log(this.colours());
    // console.log(this.count());
    // this.length.update(value => value + 10);
  }
  decrement() {
    this.count.update(value => value - 1);
    // this.breadth.update(value => value + 20);
  }

}
