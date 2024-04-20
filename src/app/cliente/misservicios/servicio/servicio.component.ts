import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit{
  status: string = 'Activo'; 
  statusImageUrl: string = 'assets/img/inprocess.svg';

  constructor() { }

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


}
