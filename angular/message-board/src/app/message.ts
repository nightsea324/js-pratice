export class Message {
  // name - 留言者
  name: string;
  // message - 留言內容
  message: string;
  // date - 留言時間
  date: Date;

  constructor(name: string, content: string) {
    this.name = name;
    this.message = content;
    this.date = new Date();
  }
}
