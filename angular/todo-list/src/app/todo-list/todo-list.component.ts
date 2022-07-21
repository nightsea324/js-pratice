import { Component, OnInit } from '@angular/core';
// Srv
import { TodoListService } from './todo-list.service';
// Class
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public todoList: Todo[] = [];
  constructor(private todoListSrv: TodoListService) {
    this.todoListSrv = todoListSrv;
  }

  ngOnInit(): void {
    this.getTodoList();
  }

  // createTodo - 新增待辦事項
  createTodo(event: Event | null): void {
    // checkWhenCreate
    if (!event) {
      return;
    }

    // convert
    const target = event.target as HTMLInputElement;

    // 建立新todo物件
    const newTodo = target.value.trim();
    if (!newTodo) {
      return;
    }

    // create
    this.todoListSrv.createTodo(newTodo);

    // clear
    target.value = '';

    return;
  }

  // getTodoList - 取得待辦事項列表
  getTodoList(): void {
    // getList & push
    this.todoList = this.todoListSrv.getTodoList();

    return;
  }

  // deleteTodo - 刪除待辦事項
  deleteTodo(index: number): void {
    // deleteByIndex
    this.todoListSrv.deleteTodo(index);

    return;
  }

  // clickIsCompleted - 點擊已完成
  clickIsCompleted(todo: Todo): void {
    // on or off
    switch (todo.getIsCompleted()) {
      case true:
        todo.isCompletedOff();
        break;
      case false:
        todo.isCompletedOn();
        break;
    }

    return;
  }

  // editModeOn - 開啟編輯模式
  editModeOn(todo: Todo): void {
    todo.editModeOn();
    return;
  }

  // editModeOff - 關閉編輯模式
  editModeOff(todo: Todo): void {
    todo.editModeOff();
    return;
  }

  // updateTodo - 更新待辦事項
  updateTodo(todo: Todo, newTitle: String, index: number): void {
    // checkWhenUpdate
    if (!todo.getEditMode) {
      return;
    }
    if (!newTitle) {
      this.todoListSrv.deleteTodo(index);
      return;
    }

    // new title
    const title = newTitle.trim();
    // update todo
    todo.updateTitle(title);
    todo.editModeOff();

    return;
  }
}
