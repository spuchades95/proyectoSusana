import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalservicioComponent } from './modalservicio/modalservicio.component';
@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit{
  status: string = 'Activo'; 
  statusImageUrl: string = 'assets/img/inprocess.svg';

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
 
    this.cambiarImagenSegunEstado();
  }
  cambiarImagenSegunEstado(): void {
    switch (this.status) {
      case 'Activo':
        this.statusImageUrl = 'assets/img/active.svg';
        break;
      case 'Cancelado':
        this.statusImageUrl = 'assets/img/cancel.svg';
        break;
      case 'Procesando':
        this.statusImageUrl = 'assets/img/inprocess.svg';
        break;
        case 'Completado':
        this.statusImageUrl = 'assets/img/complete.svg';
        break;
          
    }
  }



  openModal(): void {
    const dialogRef = this.dialog.open(ModalservicioComponent, {
      data: { /* aquí puedes pasar datos al modal si es necesario */ }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal cerrado');
    });
  }

}
