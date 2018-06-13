import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Todo} from "./services/todo";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Angular Todo List';

    todoList = []
    @ViewChild("frm") frm: NgForm

    formData = {
        "title": "",
        "description": "",
        "category": "",
    }

    constructor(private todoService:Todo){}

    ngOnInit() {
        this.getTodos()
    }

    onTodoAddFormSubmitted(f) {
        this.todoList = [f.value, ...this.todoList];

        console.log(this.formData);

        this.todoService.add(f.value)
            .subscribe(
                response => {
                    console.log(response)

                    this.frm.resetForm();
                    this.frm.setValue(this.formData)
                },
                error => console.log(error)
            )
    }

    getTodos(){
        this.todoService.get()
            .subscribe(
                response => { console.log(response); this.todoList = [...this.todoList,...response]},
                error => console.log(error)
            )
    }

    updateTodo(todo){
        this.todoService.update(todo).subscribe(
            response => console.log(response),
            error => console.log(error)
        )
    }

    deleteTodo(todo){
        if(confirm("Are you sure to delete the selected todo?")) {
            this.todoList = this.todoList.filter(t => t.id !== todo.id)
            this.todoService.delete(todo).subscribe(
                response => console.log(response),
                error => console.log(error)
            )
        }
    }
}
