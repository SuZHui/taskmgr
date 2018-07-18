import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Root Component
import { AppComponent } from './app.component';

// Modules
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    ProjectModule,
    TaskModule
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
