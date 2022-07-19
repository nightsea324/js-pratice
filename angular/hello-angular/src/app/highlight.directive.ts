import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = null;
  }
  @Input() appHighlight = '';

  // 滑鼠進入
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'red');
  }

  // 滑鼠移出
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  // 高亮
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
