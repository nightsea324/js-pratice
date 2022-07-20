export class Todo {
  // title - 待辦事項標題
  private title = '';
  // isCompleted - 是否已完成
  private isCompleted = false;

  constructor(title: string) {
    this.title = title || '';
  }

  // getTitle - 取得待辦事項標題
  getTitle(): string {
    return this.title;
  }
  // getIsCompleted - 取得是否已完成
  getIsCompleted(): boolean {
    return this.isCompleted;
  }

  // isCompletedOn - 開啟是否已完成狀態
  isCompletedOn(): void {
    this.isCompleted = true;
    return;
  }

  // isCompletedOff - 關閉是否已完成狀態
  isCompletedOff(): void {
    this.isCompleted = false;
    return;
  }
}
