import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {
  serviciosSeleccionados: any[] = [];
  serviciosParaPagar: any[] = [];

  ngOnInit() {
    const datosGuardados = localStorage.getItem('datosSeleccionados');
    if (datosGuardados) {
      this.serviciosSeleccionados = JSON.parse(datosGuardados);
      this.actualizarServiciosParaPagar();
    }
  }

  eliminarDelCarrito(id: number) {
    this.serviciosSeleccionados = this.serviciosSeleccionados.filter(servicio => servicio.id !== id);
    localStorage.setItem('datosSeleccionados', JSON.stringify(this.serviciosSeleccionados));
    this.actualizarServiciosParaPagar();
    console.log(this.serviciosSeleccionados);
  }

  actualizarServiciosSeleccionados(servicio: any) {
    const index = this.serviciosSeleccionados.findIndex(s => s.id === servicio.id);
    if (index !== -1) {
      this.serviciosSeleccionados[index] = servicio;
      console.log(this.serviciosSeleccionados);
    }
    localStorage.setItem('datosSeleccionados', JSON.stringify(this.serviciosSeleccionados));
    this.actualizarServiciosParaPagar();
    console.log(this.serviciosSeleccionados);
  }

  actualizarServiciosParaPagar() {
    this.serviciosParaPagar = this.serviciosSeleccionados.filter(servicio => servicio.seleccionado);
    localStorage.setItem('serviciosParaPagar', JSON.stringify(this.serviciosParaPagar));
    console.log(this.serviciosSeleccionados);
    console.log(this.serviciosParaPagar);

  }
}
