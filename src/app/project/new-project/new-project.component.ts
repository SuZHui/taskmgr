import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<NewProjectComponent>,
  ) { }

  ngOnInit() {}

  onClick() {
    this.dialogRef.close();
  }

}
