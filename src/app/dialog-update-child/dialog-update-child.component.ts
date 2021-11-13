import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Child } from '../models/child';

@Component({
  selector: 'app-dialog-update-child',
  templateUrl: './dialog-update-child.component.html',
  styleUrls: ['./dialog-update-child.component.scss']
})
export class DialogUpdateChildComponent implements OnInit {
  value: any;
  constructor(@Inject(MAT_DIALOG_DATA) public child: Child, public dialogRef: MatDialogRef<DialogUpdateChildComponent>) { }

  ngOnInit(): void {
    this.value = this.child.observaciones;
  }
  update() {
    this.dialogRef.close({ update: true, newValue: this.value });
  }

}
