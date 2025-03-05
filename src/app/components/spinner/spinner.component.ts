import { Component, Inject, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Blogs } from 'src/app/store/Blog/Blog.model';
import { getLoader } from 'src/app/store/Blog/Blog.selector';
import { AppStateModel } from 'src/app/store/global.model';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit{
  loader:boolean = false;

  constructor(private state: Store<AppStateModel>){}

  ngOnInit(): void {
    this.state.select(getLoader).subscribe(loader => {
      this.loader = loader;
      console.log('this.loader ',this.loader );
    });
  }
}
