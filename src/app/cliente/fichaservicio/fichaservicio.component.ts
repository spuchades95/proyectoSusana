import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';

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
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.sharedDataService.getData('servicioSeleccionado').subscribe((data) => {
      this.servicio = data;
      this.servicios = [data]; 
      this.servicios.forEach((servicio) => {
        servicio.imageUrl = this.apiService.getImageUrl(servicio.Imagen);
        console.log(servicio.imageUrl);
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
        tipoPrecio: this.precioSeleccionado === this.servicio.Precio_unico ? 'Precio_unico' : 'Precio_mensual'
      };
      
      this.datosSeleccionados.push(nuevoDato); 
      localStorage.setItem('datosSeleccionados', JSON.stringify(this.datosSeleccionados));
      console.log('Datos seleccionados guardados en localStorage:', this.datosSeleccionados);
    } else {
      console.error('No se ha seleccionado un precio');
    }
  }
  contratarAhora(){}




}
