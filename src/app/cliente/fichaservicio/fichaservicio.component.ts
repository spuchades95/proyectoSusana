import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fichaservicio',
  templateUrl: './fichaservicio.component.html',
  styleUrls: ['./fichaservicio.component.css'],
})
export class FichaservicioComponent {
  servicio: any;
  servicios: any[] = [];
  precioSeleccionado: any = null;
  datosSeleccionados: any[] = [];
  constructor(
    private sharedDataService: SharedDataService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sharedDataService.getData('servicioSeleccionado').subscribe((data) => {
      this.servicio = data;
      this.servicios = [data];
      this.servicios.forEach((servicio) => {
        servicio.imageUrl = this.apiService.getImageUrl(servicio.Imagen);
      });
    });
  }

  agregarALaCesta() {
    if (this.precioSeleccionado !== null) {
      const datosGuardados = localStorage.getItem('datosSeleccionados');
      if (datosGuardados) {
        this.datosSeleccionados = JSON.parse(datosGuardados);
      }

      const nuevoDato = {
        id: this.servicio.id,
        nombre: this.servicio.Nombre,
        imagen: this.servicio.Imagen,
        precio: this.precioSeleccionado,
        tipoPrecio:
          this.precioSeleccionado === this.servicio.Precio_unico
            ? 'Precio_unico'
            : 'Precio_mensual',
      };

      this.datosSeleccionados.push(nuevoDato);
      localStorage.setItem(
        'datosSeleccionados',
        JSON.stringify(this.datosSeleccionados)
      );
      this.router.navigate(['/cliente/inicio']);
    } else {
      alert('Por favor, selecciona un precio antes de añadir a la cesta.');
    }
  }
  contratarAhora() {
    if (this.precioSeleccionado !== null) {
      const nuevoDato = {
        id: this.servicio.id,
        nombre: this.servicio.Nombre,
        imagen: this.servicio.Imagen,
        precio: this.precioSeleccionado,
        tipoPrecio:
          this.precioSeleccionado === this.servicio.Precio_unico
            ? 'Precio_unico'
            : 'Precio_mensual',
      };

      localStorage.setItem('serviciosParaPagar', JSON.stringify([nuevoDato]));
      this.router.navigate(['/cliente/cestapagos']);
    } else {
      alert('Por favor, selecciona un precio antes de contratar.');
    }
  }
}
