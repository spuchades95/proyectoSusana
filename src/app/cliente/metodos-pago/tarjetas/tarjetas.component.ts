import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {
  mostrarAgregar: boolean = false; // Por defecto, mostrar la plantilla de agregar tarjeta

  // Método para cambiar entre las plantillas
  cambiarVista() {
    this.mostrarAgregar = !this.mostrarAgregar;
  }
}
