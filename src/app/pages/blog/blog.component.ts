import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { BlogModel } from 'src/app/store/Blog/Blog.model';
import { getBlogs } from 'src/app/store/Blog/Blog.selector';
import { AppStateModel } from 'src/app/store/global.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  standalone: true,
  imports:[
    MatCardModule,
    CommonModule,
  ]
})
export class BlogComponent implements OnInit {
  blogs$ = this.store.select(getBlogs);

  constructor(private store:Store<AppStateModel>) {}

  ngOnInit(): void {

  }

}
