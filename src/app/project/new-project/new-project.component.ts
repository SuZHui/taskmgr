import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<NewProjectComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private oc: OverlayContainer
  ) { }

  ngOnInit() {
    this.oc
      .getContainerElement()
      .classList.add(this.data.dark ? 'myapp-dark-theme' : null);
  }

  onClick() {
    this.dialogRef.close();
  }

}
