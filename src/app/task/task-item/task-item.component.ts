import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { itemAnim } from '../../anims/item.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAnim
  ]
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() avatar;
  @Output() taskClick = new EventEmitter<void>();
  widerPriority = 'out';
 
  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner.avatar || 'unassigned';
  }

  onItemClick() {
    this.taskClick.emit();
  }

  @HostListener('mouseenter')
  onmouseenter() {
    this.widerPriority = 'in';
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.widerPriority = 'out';
  }

}
