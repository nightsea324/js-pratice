import { Component } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'message-board';

  // name - 名稱
  name = '';
  // content - 內容
  content = '';
  // messages - 留言
  messageList: Message[] = [
    {
      name: 'name',
      message: 'message',
      date: new Date(),
    },
    {
      name: 'name',
      message: 'message',
      date: new Date(),
    },
    {
      name: 'name',
      message: 'message',
      date: new Date(),
    },
    {
      name: 'name',
      message: 'message',
      date: new Date(),
    },
  ];

  // createMessage - 新增留言
  createMessage(): void {
    // checkWhenCreate
    if (this.checkWhenCreate()) {
      return;
    }

    // 建立新message物件
    const newMessage = new Message('testName', 'testContent');

    // 推入message列表
    this.messageList.push(newMessage);

    // 清空
    this.content = '';
  }
  // checkWhenCreate - 新增留言檢查
  checkWhenCreate(): boolean {
    return !this.name.trim() || !this.content.trim;
  }
}
