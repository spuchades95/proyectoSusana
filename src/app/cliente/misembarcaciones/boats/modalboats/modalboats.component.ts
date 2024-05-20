import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dialogomodal } from '../dialogomodal';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-modalboats',
  templateUrl: './modalboats.component.html',
  styleUrls: ['./modalboats.component.css']
})
export class ModalboatsComponent {
  boatData: dialogomodal;

  constructor(
    public dialogRef: MatDialogRef<ModalboatsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogomodal 
  ) {
    this.boatData = { ...data }; 
  }


}
