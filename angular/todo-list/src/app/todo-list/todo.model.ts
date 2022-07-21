export class Todo {
  // title - 待辦事項標題
  private title = '';
  // isCompleted - 是否已完成
  private isCompleted = false;
  // editMode - 編輯模式
  private editMode = false;

  constructor(title: string) {
    this.title = title || '';
  }
  // getter -----
  // getTitle - 取得待辦事項標題
  getTitle(): string {
    return this.title;
  }
  // getIsCompleted - 取得是否已完成
  getIsCompleted(): boolean {
    return this.isCompleted;
  }
  // getEditMode - 取得編輯模式
  getEditMode(): boolean {
    return this.editMode;
  }

  // setter -----
  // updateTitle - 更新title
  updateTitle(title: string): void {
    this.title = title;
    return;
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

  // editModeOn - 開啟編輯模式
  editModeOn(): void {
    this.editMode = true;
    return;
  }
  // editModeOff - 關閉編輯模式
  editModeOff(): void {
    this.editMode = false;
    return;
  }
}
