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
  public todoList: string[] = [];
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
    const target = event.target as HTMLInputElement;
    const newTodo = target.value.trim();
    if (newTodo) {
      this.todoListSrv.createTodo(newTodo);
      target.value = '';
    }
    this.getTodoList();
  }

  // getTodoList - 取得待辦事項列表
  getTodoList(): void {
    JSON.parse(JSON.stringify(this.todoListSrv.getTodoList())).forEach(
      (todo: Todo) => {
        this.todoList.push(todo.getTitle());
      }
    );
    return;
  }
}
