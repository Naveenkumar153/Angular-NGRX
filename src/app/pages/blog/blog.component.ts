import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { AddBlogComponent } from 'src/app/components/add-blog/add-blog.component';
import { MaterialModule } from 'src/app/material.module';
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
    MatButtonModule,
    MatDialogModule,
  ]
})
export class BlogComponent implements OnInit {
  blogs$ = this.store.select(getBlogs);

  constructor(private store:Store<AppStateModel>,public dialog: MatDialog) {}

  ngOnInit(): void {

  };

  addBlog(){
    this.dialog.open(AddBlogComponent,{
      width: '250px',
      height: 'auto',
      data: { title: 'Add Blog' }
    });
    // const blog:BlogModel = {
    //   id: Math.random(),
    //   title: 'Blog Title',
    //   description: 'Blog Description'
    // }
    // this.store.dispatch(addBlogs({blogInput: blog}));
  }

}
