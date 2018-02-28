import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoDataService {

lastId: number = 0;

todos: Todo[] = [];

  constructor() {
  }

//Post

addTodo(todo: Todo): TodoDataService {
  if (!todo.id) {
    todo.id = ++this.lastId;
  }
  this.todos.push(todo);
  return this;
}

deleteTodoById(id: number): TodoDataService {
  this.todos = this.todos
    .filter(todo => todo.id !==id);
  return this;
}

updateTodoById(id: number, values: Object = {}): Todo {
  let todo = this.getTodoById(id);
  if (!todo) {
    return null;
  }
  Object.assign(todo, values);
  reutrn todo;
}

getAllTodos(); Todo[] {
  return this.todos;
}










