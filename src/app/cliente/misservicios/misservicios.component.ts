import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-misservicios',
  templateUrl: './misservicios.component.html',
  styleUrls: ['./misservicios.component.css'],
})
export class MisserviciosComponent implements OnInit {
  idLocalStorage: any;
  tieneServicios: boolean = false;
  servicios: any[] = [];
  constructor(private apiService: ApiService) {
    this.idLocalStorage = localStorage.getItem('clienteId');
  }
  ngOnInit() {
    this.apiService
      .getServiceOfClient(this.idLocalStorage)
      .subscribe((response: any) => {
        this.servicios = response.data;
        this.tieneServicios = this.servicios.length > 0;
        this.servicios.sort((a, b) => {
          const [dayA, monthA, yearA] = a.FechaContratacion.split('/');
          const [dayB, monthB, yearB] = b.FechaContratacion.split('/');
          const dateA = `${yearA}${monthA.padStart(2, '0')}${dayA.padStart(2, '0')}`;
          const dateB = `${yearB}${monthB.padStart(2, '0')}${dayB.padStart(2, '0')}`;
          return dateB.localeCompare(dateA);
        });
    
        console.log(this.servicios);
      });
  }

  actualizarListaServicios(idTarjetaEliminada: number): void {
    window.location.reload();
  }
}
