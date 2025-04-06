import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Todo {
  text: string;
  completed: boolean;
  id: number;
};

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone: true,  
  imports: [
    FormsModule,
    CommonModule,
  ],
})

export class TodoComponent {
 
  todoText: string = '';
  todos: Todo[] = [];

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.todoText = input.value;
    console.log(this.todoText);
  };

  addTodo() {
    console.log(this.todoText);
    if (this.todoText.trim() === '') return;
    this.todos.push({ text: this.todoText, completed: false, id: Date.now() });
    this.todoText = '';
  };

  editTodo(id:number):void{
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      const newText = prompt('Edit todo:', todo.text);
      if (newText !== null) {
        todo.text = newText;
      }
    }
  }

  removeTodo(id:number){
    this.todos = this.todos.filter(todo => todo.id !== id)
  };


}
