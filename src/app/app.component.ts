import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme: boolean = false;

  constructor(
    private oc: OverlayContainer
  ) {

  }

  /**
   * 切换主题css
   * @param check {boolean}
   */
  switchTheme(check: boolean) {
    this.darkTheme = check;
    this.oc
      .getContainerElement()
      .classList.add(check ? 'myapp-dark-theme' : null);
  }
}
