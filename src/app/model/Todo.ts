import {Categories} from './Categories';

export class Todo {
  done: boolean;
  constructor(public task: string, public category: Categories) {
    this.done = false;
  }
}
