import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor() {}
  // todoList - 待辦事項列表
  private todoList: Todo[] = [];

  // createTodo - 新增待辦事項
  createTodo(title: string): void {
    // checkWhenCreate
    if (!title || !title.trim()) {
      return;
    }
    this.todoList.push(new Todo(title));
  }

  // getTodoList - 取得待辦事項列表
  getTodoList(): Todo[] {
    return this.todoList;
  }
}
