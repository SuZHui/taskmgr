import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatDialog } from '@angular/material';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
// Root Component
import { AppComponent } from './app.component';
import { ProjectModule } from './project/project.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    CoreModule,
    LoginModule,
    ProjectModule,
    AppRoutingModule
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
