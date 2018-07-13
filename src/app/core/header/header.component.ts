import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  toggle = new EventEmitter<void>();

  @Output()
  toggleDarkTheme = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  openSidebar() {
    this.toggle
      .emit();
  }

  onChange(event: MatSlideToggleChange) {
    this.toggleDarkTheme
      .emit(event.checked);
  }

}
