import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { MaterialModule } from 'src/app/material.module';
import { BlogModel } from 'src/app/store/Blog/Blog.model';
import { getBlogBasedOnId } from 'src/app/store/Blog/Blog.selector';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss'],
  standalone: true,
  imports:[MaterialModule,FormsModule],
})
export class AddBlogComponent implements OnInit{

  title!: string;
  description!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public matData:{ title: string, data:number },
    public dialogRef: MatDialogRef<AddBlogComponent>,
    private store: Store
  ){}

  ngOnInit(): void {
    console.log(this.matData);
    if(this.matData.data){
      this.store.select(getBlogBasedOnId(this.matData.data)).subscribe((blog: BlogModel | null) => {
        blog && ( this.title = blog.title,  this.description = blog.description);
      });
    }
  }

  saveBlog():void{
    const id = this.matData.data ?? (Math.random());
    this.dialogRef.close({
      id: id.toString(),
      title: this.title,
      description: this.description,
    });
  }

}
