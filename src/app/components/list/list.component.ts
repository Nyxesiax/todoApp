import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  newTodo: Todo;
todos: Todo[] = [];
  constructor() {
    this.newTodo = new Todo('', '');
  }

  ngOnInit() {
  }

  toggle(todo: Todo) {
    todo.done = !todo.done;
  }

  save() {
    this.todos.push(this.newTodo);
    this.newTodo = new Todo('', '');
  }


  delete(todoTask: Todo) {
    this.todos = this.todos.filter(t => t !== todoTask);
  }
}
