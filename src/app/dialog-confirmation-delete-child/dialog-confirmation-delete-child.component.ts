import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Child } from '../models/child';

@Component({
  selector: 'app-dialog-confirmation-delete-child',
  templateUrl: './dialog-confirmation-delete-child.component.html',
  styleUrls: ['./dialog-confirmation-delete-child.component.scss']
})
export class DialogConfirmationDeleteChildComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public child: Child) { }

  ngOnInit(): void {
  }

}
