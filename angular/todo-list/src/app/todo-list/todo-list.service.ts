import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
// Filter
import { Filter } from './interface.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor() {}
  // todoList - 待辦事項列表
  private todoList: Todo[] = [
    new Todo('tempTitle'),
    new Todo('tempTitle'),
    new Todo('tempTitle'),
  ];

  // createTodo - 新增待辦事項
  createTodo(title: string): void {
    // checkWhenCreate
    if (!title || !title.trim()) {
      return;
    }
    // create
    this.todoList.push(new Todo(title));

    return;
  }

  // getTodoList - 取得待辦事項列表
  getTodoList(filter: Filter | null): Todo[] {
    // get all
    if (filter === null) {
      return this.todoList;
    }
    // get filter
    return this.todoList.filter(
      (todo: Todo) => todo.getIsCompleted() === filter.IsCompleted
    );
  }

  // deleteTodo = 刪除待辦事項
  deleteTodo(index: number): void {
    // delete
    this.todoList.splice(index, 1);

    return;
  }

  // updateTodo - 更新待辦事項
  updateTodo(todo: Todo, index: number): void {
    // replace
    this.todoList.splice(index, 1, todo);

    return;
  }

  // deleteAllCompletedTodo - 刪除所有已完成待辦事項
  deleteAllCompletedTodo(): void {
    // delete
    this.todoList = this.todoList.filter(
      (todo: Todo) => todo.getIsCompleted() === false
    );

    return;
  }
}
