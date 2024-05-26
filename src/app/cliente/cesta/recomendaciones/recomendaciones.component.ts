import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router,ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';



@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css'],
})
export class RecomendacionesComponent {
  servicios: any[] = [];
  imageUrl: any = '';
  constructor(private apiService: ApiService,
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}
  ngOnInit() {
    this.apiService.getRandomServices().subscribe((response: any[]) => {
      response.forEach((servicio) => {
        servicio.imageUrl = this.apiService.getImageUrl(servicio.Imagen);
      });
      this.servicios = response;
    });
  }
 
  seleccionarServicio(servicio: any) {
    this.sharedDataService.setData('servicioSeleccionado', servicio);
      this.router.navigate(['cliente/servicio', servicio.id]);

  }

}
