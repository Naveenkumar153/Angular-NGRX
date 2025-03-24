import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { asapScheduler, asyncScheduler, map, Observable, observeOn, of, queueScheduler, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx';
  sub = new Subject<'Subject hello'>();
  permission:number[] = [1,2,3,4,5,6,7,8,9,10];
  constructor(private http:HttpClient) {
  }

  runAsync() {
    console.log('console.log start'); // immediately
    requestAnimationFrame (() => { console.log('requestAnimationFrame has ended') }); // macro task 
    setTimeout(() => { console.log('setTimeout has ended') }, 3000); // macro task
    Promise.resolve('Promise has resolved').then((value) => console.log(value)); // micro task

    of('Stream value').subscribe(console.log); // ??
    this.sub.pipe(observeOn(asapScheduler)).subscribe(console.log);
    this.sub.next('Subject hello');

    // write the mutation observer code here
  //  const mutation = new MutationObserver(() => console.log('MutationObserver has ended'));
  //  mutation.observe(document.body, { attributes: true });
  //  document.body.setAttribute('class', 'fdsafasf');

  //  Promise.resolve(
  //   fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json())
  //  ).then(value => console.log("Promise has resolved api", value));

    // process.nextTick(() => console.log('process.nextTick has ended')); 

    // this.http.get("https://jsonplaceholder.typicode.com/todos/1").pipe(observeOn(asyncScheduler)).subscribe(console.log);

    of('asapScheduler value').pipe(observeOn(asapScheduler)).subscribe(console.log); // we can run even micro task
    of('asyncScheduler').pipe(observeOn(asyncScheduler)).subscribe(console.log); // we can run even macro task
    of('queueScheduler').pipe(observeOn(queueScheduler)).subscribe(console.log); // we can run even macro task
  };

  ngOnInit(): void {
      // this.hotAndColdObservables();
      this.clousreExample();
      this.clousreExample();
  };

  clousreExample() {
    let counter = Date.now();
    const increment = () => {
      console.log(counter);
    };
    increment();
  };

  hotAndColdObservables(){
    // // cold observable
    // const coldObservable = of('Cold observable');
    // coldObservable.subscribe(console.log);
    // coldObservable.subscribe(console.log);

    // // hot observable
    // const hotObservable = new Subject();
    // hotObservable.next('Hot observable');
    // hotObservable.subscribe(console.log);
    // hotObservable.subscribe(console.log);


    // const obs$ = formTimeStamp();
    const obs$ = of(null).pipe(map(() => Math.random()));
    obs$.subscribe(console.log);
    obs$.subscribe(console.log);
    setTimeout(() => {
      obs$.subscribe(console.log);
    },1000);
  };
};

const formTimeStamp = ():Observable<number> => {
  const timeStamp = Date.now();
  return new Observable((subscriber) => {
    subscriber.next(timeStamp);
  });
};
