import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { combineLatest, interval, Observable, of, Subject } from 'rxjs';
import { debounceTime, map, mergeMap, startWith, take, tap,  zipWith } from 'rxjs/operators';
import { zip } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';


type Durum = ['flat bread', 'meat', 'sauce', 'tomato', 'cabbage'];

let flatBred = 0;
let meat = 0;
let sauce = 0;
let tomato = 0;
let cabbage = 0;
let customerId = 0;

interface Order{
  amount:number,
  customerId:number,
};

interface Product{
  product:Durum,
  customerId:number,
}

@Component({
  selector: 'app-rxjs-operator',
  templateUrl: './rxjs-operator.component.html',
  styleUrls: ['./rxjs-operator.component.scss'],
  standalone: true,
  imports:[FormsModule, ReactiveFormsModule, CommonModule, MatInputModule, MatSelectModule, MatButtonModule],
})
export class RxjsComponent implements OnInit {

  searchControl = new FormControl('');
  filterControl = new FormControl('');

  items$: Observable<{ name: string; category: string }[]> = of([
    { name: 'Item 1', category: 'category1' },
    { name: 'Item 2', category: 'category2' },
    { name: 'Item 3', category: 'category1' },
    { name: 'Item 4', category: 'category2' },
  ]);

  filteredItems$!: Observable<{ name: string; category: string }[]>;

  durms$!    : Observable<any>;
  delivery$! : Observable<Product>;

  _order     = new Subject<Order>();
  _flatBread$ = new Subject<'flat bread'>();
  _meat$    = new Subject<'meat'>();
  _sauce$   = new Subject<'sauce'>();
  _tomato$  = new Subject<'tomato'>();
  _cabbage$ = new Subject<'cabbage'>();

  ngOnInit() {
    // this.combineLatestMethod();
    // this.combineLatestWithSimpleExample();
    // this.zipOperator();
    // this.combineLatestOperator();
    // this.mergeMapOperator();
    // this.mergeMapExampleTwo();

    this.durms$ = zip([
      this._flatBread$.pipe(map(count => `${count} ${++flatBred}`),tap(console.log)),
      this._meat$.pipe(map(count => `${count} ${++meat}`),tap(console.log)),
      this._sauce$.pipe(map(count => `${count} ${++sauce}`),tap(console.log)),
      this._tomato$.pipe(map(count => `${count} ${++tomato}`),tap(console.log)),
      this._cabbage$.pipe(map(count => `${count} ${++cabbage}`),tap(console.log)),
    ])
    .pipe( 
      map(([flatBread, meat, sauce, tomato, cabbage]) => {
        return [flatBread, meat, sauce, tomato, cabbage];
      }),
      tap(durum => console.log('durum', durum))
    );

    this.delivery$ = this._order.pipe(
      tap((order) => console.log("New order: ", order)),
      mergeMap(({ amount,customerId }) => {
        console.log('amount,customerId',amount,customerId);
        return this.durms$.pipe(
          take(amount as number),
          map((durm) => ({ product: durm, customerId })),
        )
      }),
      tap((product) => console.log('Delivered Product: ', product)),
    );
  };

  combineLatestMethod() {
    const search$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      tap((value) => console.log('Search:', value))
    );

    const filter$ = this.filterControl.valueChanges.pipe(
      startWith(''),
      tap((value) => console.log('Filter:', value))
    );

    this.filteredItems$ = combineLatest([this.items$, search$, filter$]).pipe(
      map(([items, search, filter]) => {
        console.log('items,search,filter',items,search,filter);
        return items.filter((item) => {
          const matchesSearch = item.name
            .toLowerCase()
            .includes(search?.length ? search.toLowerCase() : '');
          const matchesFilter = filter ? item.category === filter : true;
          return matchesSearch && matchesFilter;
        });
      })
    );
  };

  combineLatestWithSimpleExample():void{
    // const source1$ = of(1, 2, 3);
    // const source2$ = of(4, 5, 6);
    const source1$ = interval(1000).pipe(take(3),tap(source1 => console.log('source1',source1)));
    const source2$ = interval(1000).pipe(take(3),tap(source1 => console.log('source2',source1)));
    const combined$ = combineLatest([source1$, source2$]);
    combined$.subscribe(([value1, value2]) => {
      console.log('Combined values:', value1, value2);
    });
  };

  zipOperator(): void {
    this.durms$ = zip(
      this._flatBread$.pipe(map(count => `${count} ${++flatBred}`),tap(console.log)),
      this._meat$.pipe(map(count => `${count} ${++meat}`),tap(console.log)),
      this._sauce$.pipe(map(count => `${count} ${++sauce}`),tap(console.log)),
      this._tomato$.pipe(map(count => `${count} ${++tomato}`),tap(console.log)),
      this._cabbage$.pipe(map(count => `${count} ${++cabbage}`),tap(console.log)),
    )
    .pipe(
      // map(([flatBread, meat, sauce, tomato, cabbage]) => {
      //   return [flatBread, meat, sauce, tomato, cabbage];
      // }),
      tap(durum => console.log('durum', durum))
    );
  };
  combineLatestOperator(): void {
    this.durms$ = combineLatest([
      this._flatBread$.pipe(map(count => `${count} ${++flatBred}`),tap(console.log)),
      this._meat$.pipe(map(count => `${count} ${++meat}`),tap(console.log)),
      this._sauce$.pipe(map(count => `${count} ${++sauce}`),tap(console.log)),
      this._tomato$.pipe(map(count => `${count} ${++tomato}`),tap(console.log)),
      this._cabbage$.pipe(map(count => `${count} ${++cabbage}`),tap(console.log)),
    ])
    .pipe(
      // map(([flatBread, meat, sauce, tomato, cabbage]) => {
      //   return [flatBread, meat, sauce, tomato, cabbage];
      // }),
      tap(durum => console.log('durum', durum))
    );
  };

  mergeMapOperator():void{
    this.delivery$ = this._order.pipe(
      tap((order) => console.log("New order: ", order)),
      mergeMap(({ amount,customerId }) => {
        console.log('amount,customerId',amount,customerId);
        return this.durms$.pipe(
          tap( durms => console.log('mergeMap', durms)),
          take(amount as number),
          map((durm) => ({ product: durm, customerId })),
        )
      }),
      tap((product) => console.log('Delivered Product: ', product)),
    );
  };

  dispatchOrder():void{
    const amount = Math.floor(Math.random() * 3) + 1;
    ++customerId;
    this._order.next({ amount, customerId });
  };

  mergeMapExampleTwo(){
    let interval1$ = interval(1000);
    let interval2$ = interval(500);
    let srcObservable= of(1,2,3,4)
    let innerObservable= of('A','B','C','D')
    
    srcObservable.pipe(
      mergeMap( val => {
        console.log('Source value '+val)
        console.log('starting new observable')
        return innerObservable
      })
    )
    .subscribe(ret=> {
      console.log('Recd ' + ret);
    })
 
  }
}