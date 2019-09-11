import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/Todo';
import {Categories} from '../../model/Categories';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  newTodo: Todo;
 /* categories: Categories[] = [];
  arbeit: Categories = new Categories('Arbeit');
  privat: Categories = new Categories('Privat');
  hobby: Categories = new Categories('Hobby');
  */
todos: Todo[] = [];
  constructor() {
    this.newTodo = new Todo('');
  }

  ngOnInit() {
  }

  toggle(todo: Todo) {
    todo.done = !todo.done;
    this.todos.sort(x => !x.done ? -1 : 1);
  }

  save() {
    this.todos.push(this.newTodo);
    this.newTodo = new Todo('');
  }

  delete(todoTask: Todo) {
    this.todos = this.todos.filter(t => t !== todoTask);
  }
}
