import {Categories} from './Categories';

export class Todo {
  done: boolean;
  constructor(public task: string) {
    this.done = false;
  }
}
