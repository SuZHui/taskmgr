import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { DragDropService } from '../drag-drop.service';

@Directive({
  selector: '[app-draggable][dragTag][dragData][draggedClass]',
})
export class DragDirective {
  private _isDraggable = false;

  @Input()
  draggedClass: string;

  @Input()
  dragTag: string;

  @Input()
  dragData: any;

  constructor(
    private el: ElementRef,
    private render2: Renderer2,
    private service: DragDropService
  ) { }

  @Input('app-draggable')
  set isDraggable(val: boolean) {
    this._isDraggable = val;
    this.render2
      .setAttribute(this.el.nativeElement, 'draggable', `${val}`)
  }

  get isDraggable(): boolean {
    return this._isDraggable;
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(e: Event) {
    if (this.el.nativeElement === e.target) {
      this.render2
        .addClass(this.el.nativeElement, this.draggedClass);
      this.service.setDragData({ tag: this.dragTag, data: this.dragData })
    }
  }

  @HostListener('dragend', ['$event'])
  ondragend(e: Event) {
    if (this.el.nativeElement === e.target) {
      this.render2
        .removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}
