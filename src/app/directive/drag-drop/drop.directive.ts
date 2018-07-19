import { Directive, ElementRef, Renderer2, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { DragDropService, DragData } from '../drag-drop.service';
import { take } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Directive({
  selector: '[app-droppable][dropTags][dragEnterClass]'
})
export class DropDirective {

  @Output() dropped = new EventEmitter<DragData>();
  @Input() dragEnterClass: string;
  @Input() dropTags: string[] = [];
  private data$: Observable<DragData>

  constructor(
    private el: ElementRef,
    private render2: Renderer2,
    private service: DragDropService
  ) { 
    this.data$ = this.service.getDragData().pipe(take(1));
  }

  @HostListener('dragenter', ['$event'])
  ondragenter(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.el.nativeElement === e.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.render2.addClass(this.el.nativeElement, this.dragEnterClass);
        }
      })
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.el.nativeElement === e.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.render2.setProperty(e, 'dataTransfer.effectAllowed', 'all');
          this.render2.setProperty(e, 'dataTransfer.dropEffect', 'move');
        } else {
          this.render2.setProperty(e, 'dataTransfer.effectAllowed', 'none');
          this.render2.setProperty(e, 'dataTransfer.dropEffect', 'none');
        }
      });
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.el.nativeElement === e.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.render2.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragData);
          this.service.clearDragData();
        }
      });
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.el.nativeElement === e.target) {
      this.render2.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

}
