import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MatSidenavModule } from '@angular/material';

// Root Component
import { AppComponent } from './app.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    ProjectModule,
    TaskModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
