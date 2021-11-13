import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm, AbstractControl, FormGroupDirective } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { DialogTermsAndConditionsComponent } from '../dialog-terms-and-conditions/dialog-terms-and-conditions.component';
import { ChildService } from '../services/child.service';
import { Child } from '../models/child';
import { DialogConfirmationSaveChildComponent } from '../dialog-confirmation-save-child/dialog-confirmation-save-child.component';
import { DialogMessageComponent } from '../dialog-message/dialog-message.component';
import { Status } from '../models/status';
@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.scss']
})
export class AddChildComponent implements OnInit {
  public form!: FormGroup;
  public showLoader: boolean = false;
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private childService: ChildService) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      nombreNino: [null, Validators.required],
      edadNino: [null, Validators.required],
      nombrePadreTutor: [null, Validators.required],
      telefonoPadreTutor: [null, Validators.required],
      autActividadFisica: false,
      autBano: false,
      autMaquillaje: false,
      autPinturas: false,
      padAlergiaEnfermedad: false,
      observaciones: [''],
      terminosCondiciones: false
    });

  }

  get f() {
    return this.form.controls;
  }

  eventChange(value: any) {
    if (value.checked) {
      this.form.addControl('descAlergiaEnfermedad', this.fb.control('', [Validators.required]))
    } else {
      this.form.removeControl('descAlergiaEnfermedad');
    }
  }

  openDialogTermsAndConditions() {
    this.dialog.open(DialogTermsAndConditionsComponent, { disableClose: true });
  }

  openDialogConfirmation() {
    let dialogRef = this.dialog.open(DialogConfirmationSaveChildComponent, {
      disableClose: true,
      data: this.getChild()
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'save') {
        this.showLoader = true;
        this.childService.save(this.getChild())
          .then(r => {
            console.log(r);
            this.showMessageDialog(Status.Success);
            this.resetForm();
          })
          .catch(e => {
            console.error(e);
            this.showMessageDialog(Status.Error);
          })
          .finally(() => {
            this.showLoader = false
          });
      }
    });
  }

  showMessageDialog(status: Status) {
    return this.dialog.open(DialogMessageComponent, {
      disableClose: true,
      data: status === Status.Success
    });
  }

  resetForm() {
    setTimeout(() => this.formGroupDirective.resetForm(), 100);
  }


  save() {
    this.openDialogConfirmation();
  }

  getChild() {
    let child: Child = {
      nombreNino: this.form.value.nombreNino,
      edadNino: this.form.value.edadNino,
      nombrePadreTutor: this.form.value.nombrePadreTutor,
      telefonoPadreTutor: this.form.value.telefonoPadreTutor,
      autActividadFisica: this.form.value.autActividadFisica,
      autBano: this.form.value.autBano,
      autMaquillaje: this.form.value.autMaquillaje,
      autPinturas: this.form.value.autPinturas,
      padAlergiaEnfermedad: this.form.value.padAlergiaEnfermedad,
      descAlergiaEnfermedad: this.form.value.descAlergiaEnfermedad ? this.form.value.descAlergiaEnfermedad : '',
      observaciones: this.form.value.observaciones,
      terminosCondiciones: this.form.value.terminosCondiciones
    };
    return child;
  }

}
