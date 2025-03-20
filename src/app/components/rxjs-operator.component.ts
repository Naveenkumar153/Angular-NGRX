import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { combineLatest, interval, Observable, of } from 'rxjs';
import { debounceTime, map, startWith, take, tap, zip, zipWith } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operator',
  templateUrl: './rxjs-operator.component.html',
  styleUrls: ['./rxjs-operator.component.scss'],
  standalone: true,
  imports:[FormsModule, ReactiveFormsModule, CommonModule, MatInputModule, MatSelectModule],
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

  ngOnInit() {
    // this.combineLatestMethod();
    this.combineLatestWithSimpleExample();
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
  }
}