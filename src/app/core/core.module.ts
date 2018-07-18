import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';
import { loadSvgResources } from '../utils/svg.util'

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import 'hammerjs';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [ 
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent 
  ],
  exports: [
    SharedModule,
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
  ]
})
export class CoreModule { 
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
  ) { 
    if (parent) {
      throw new Error('Core模块已经存在， 不能再次加载!');
    }
    // 加载svg资源
    loadSvgResources(ir, ds)
  }
}
