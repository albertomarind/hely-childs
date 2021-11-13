import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogTermsAndConditionsComponent } from '../dialog-terms-and-conditions/dialog-terms-and-conditions.component';
@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.scss']
})
export class AddChildComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      nombreNino: [null,Validators.required],
      edadNino: [null,Validators.required],
      nombrePadreTutor: [null,Validators.required],
      telefonoPadreTutor: [null,Validators.required],
      autActividadFisica: false,
      autBano: false,
      autMaquillaje: false,
      autPinturas: false,
      padAlergiaEnfermedad: false,
      descAlergiaEnfermedad: [''],
      observaciones: [''],
      terminosCondiciones: false
    });
  }

  get f() {
    return this.form.controls;
  }

  openDialog() {
    this.dialog.open(DialogTermsAndConditionsComponent, { disableClose: true });
  }

  resetForm(){
    this.form.reset();
  }

  save() {
    console.log(this.form.value);
    console.log(this.form.valid);
  }

}
