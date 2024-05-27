import { Component, Inject } from '@angular/core';
import { dialogoserrvicio } from '../dialogoservicio';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modalservicio',
  templateUrl: './modalservicio.component.html',
  styleUrls: ['./modalservicio.component.css'],
})
export class ModalservicioComponent {
  servicio: dialogoserrvicio;

  constructor(
    public dialogRef: MatDialogRef<ModalservicioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogoserrvicio
  ) {
    this.servicio = { ...data };
  }
}
