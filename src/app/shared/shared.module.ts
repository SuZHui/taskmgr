import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatToolbarModule,
  MatIconModule, 
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatDialog,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [ MatDialog ],
  declarations: [],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule
  ]
})
export class SharedModule { }
