import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme: boolean = false;

  /**
   * 切换主题css
   * @param check {boolean}
   */
  switchTheme(check: boolean) {
    this.darkTheme = check;
  }
}
