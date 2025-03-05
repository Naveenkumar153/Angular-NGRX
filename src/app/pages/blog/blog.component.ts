import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddBlogComponent } from 'src/app/components/add-blog/add-blog.component';
import { MaterialModule } from 'src/app/material.module';
import { blogsActions } from 'src/app/store/Blog/Blog.action';
// import { addBlogs, deleteBlog, updateBlogs } from 'src/app/store/Blog/Blog.action';
import { BlogModel, Blogs } from 'src/app/store/Blog/Blog.model';
import { getBlogInfo, getBlogs } from 'src/app/store/Blog/Blog.selector';
import { AppStateModel } from 'src/app/store/global.model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

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
    MatSnackBarModule,
  ]
})
export class BlogComponent implements OnInit {
  // blogs = this.store.select(blogsActions['[Blog]LoadBlogs']) 
  blogs$ = this.store.select(getBlogs);
  errorMsg:string = '';
  
  constructor(private store:Store<AppStateModel>,public dialog: MatDialog, private snackBar:MatSnackBar ) {}
  
  ngOnInit(): void {
    this.store.dispatch(blogsActions.loader({loader: true}));
    setTimeout(() => {
      this.store.dispatch(blogsActions.loadBlogs());
      this.store.select(getBlogInfo).subscribe((blog:Blogs) => {
        if(blog.errorMsg){
          this.errorMsg = blog.errorMsg;
          this.snackBar.open(blog.errorMsg, 'Close', { duration: 3000 });
        }
      });
    },2000);
  };

  addBlog(){
   this.openDialog();
  };

  openDialog(blogId?:number, isEdit:boolean=false):void{
    let dialogs = this.dialog.open(AddBlogComponent,{
      width: '600px',
      height: 'auto',
      data: { 
        title: isEdit ? 'Edit Blog' : 'Add Blog',
        data: isEdit ? blogId : null
      }
    });
    dialogs.afterClosed().subscribe((blog:BlogModel) => {
      console.log('blog',blog);
      if(isEdit){
        this.store.dispatch(blogsActions.updateBlog({blogInput: blog}));
      }else{
        this.store.dispatch(blogsActions.addBlog({blogInput: blog}));
      }
    })
  }

  editBlog(blog:BlogModel){
    this.openDialog(blog.id, true);
  };

  deleteBlog(blogId:number){
    console.log('blogId',blogId);
    this.store.dispatch(blogsActions.deleteBlog({id:blogId}));
  }

}
