import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss'],
  standalone: true,
  imports:[MaterialModule],
})
export class AddBlogComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
  }

  openDialog(){
    
  }

}
