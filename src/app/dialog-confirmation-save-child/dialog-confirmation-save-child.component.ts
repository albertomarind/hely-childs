import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Child } from '../models/child';

@Component({
  selector: 'app-dialog-confirmation-save-child',
  templateUrl: './dialog-confirmation-save-child.component.html',
  styleUrls: ['./dialog-confirmation-save-child.component.scss']
})
export class DialogConfirmationSaveChildComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public child: Child) { }

  ngOnInit(): void {
  }

}
