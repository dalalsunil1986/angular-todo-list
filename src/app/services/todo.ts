import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';

@Injectable()
export class Todo{
    constructor(private http:HttpClient){}

    add(todo:{}){
        return this.http.post('https://angular-todo-list-b9867.firebaseio.com/todos.json',todo);
    }

    get(){
        return this.http.get('https://angular-todo-list-b9867.firebaseio.com/todos.json')
            .pipe(
                map(
                (response)=>{
                        console.log(Object.keys(response));
                        return Object.keys(response).map((i) =>({...response[i],id:i})).reverse()
                    }
                )
            )
    }

    update(todo){
        const td = {...todo}
        delete td["showAction"]
        delete td["in_edit_mode"]

        return this.http.put('https://angular-todo-list-b9867.firebaseio.com/todos/'+todo.id+".json",td);
    }

    delete(todo){
        return this.http.delete('https://angular-todo-list-b9867.firebaseio.com/todos/'+todo.id+".json");
    }
}
