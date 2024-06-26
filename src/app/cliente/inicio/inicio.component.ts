import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';

import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  servicios: any[] = [];
  
  constructor(
    private apiService: ApiService,
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.apiService.getServicios().subscribe(
      (data: any[]) => {
        this.servicios = data.map((servicio) => {
          servicio.imageUrl = this.apiService.getImageUrl(servicio.Imagen);

          return servicio;
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  scrollLeft() {
    const carousel = document.getElementById('carousel');
    if (carousel) {
      setTimeout(() => {
        carousel.scrollLeft -= carousel.offsetWidth;
      }, 200);
    }
  }

  scrollRight() {
    const carousel = document.getElementById('carousel');
    if (carousel) {
      setTimeout(() => {
        carousel.scrollLeft += carousel.offsetWidth;
      }, 200);
    }
  }

  seleccionarServicio(servicio: any) {
    this.sharedDataService.setData('servicioSeleccionado', servicio);
    this.router.navigate(['cliente/servicio', servicio.id]);
  }
}
