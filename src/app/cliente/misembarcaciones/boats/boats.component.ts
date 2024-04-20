import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalboatsComponent } from './modalboats/modalboats.component';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent {
  boatData: any;

  constructor(private dialog: MatDialog) { }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalboatsComponent, {
      data: { /* aquí puedes pasar datos al modal si es necesario */ }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal cerrado');
    });
  }



}
