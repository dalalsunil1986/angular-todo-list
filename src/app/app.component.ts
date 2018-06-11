import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Todo List';
  todoList =  []

    onTodoAddFormSubmitted(f){
      this.todoList = [f.value,...this.todoList];

      f.reset();
    }
}
