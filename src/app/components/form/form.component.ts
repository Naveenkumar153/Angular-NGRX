import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone:true,
  imports:[
     ReactiveFormsModule,
     FormsModule,
     MatFormFieldModule,
     MatInputModule,
  ]
})

export class FormComponent implements OnInit{

  
  userForm!: FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
      this.userForm = this.fb.group({
         userName:['',[Validators.minLength(5),Validators.required]],
         password:['',[Validators.minLength(5),Validators.required]]
      });
  };

  submitForm():void{
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }
    console.log(this.userForm.value);
  }

}
