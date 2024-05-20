import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-misservicios',
  templateUrl: './misservicios.component.html',
  styleUrls: ['./misservicios.component.css']
})
export class MisserviciosComponent implements OnInit {
  idLocalStorage: any;
  tieneServicios: boolean = false;
  servicios: any[] = [];
  constructor(
    private apiService: ApiService,
    private router: Router,
    private sharedDataService: SharedDataService
  ) {
    this.idLocalStorage = localStorage.getItem('clienteId');
  }
  ngOnInit() {
    console.log(this.idLocalStorage);
    this.apiService.getServiceOfClient(this.idLocalStorage).subscribe((response: any) => {
      this.servicios = response.data;
      this.tieneServicios = this.servicios.length > 0;
      console.log(this.tieneServicios);
      console.log(this.servicios);
  
    });
  
  }

  actualizarListaServicios(idTarjetaEliminada: number): void {
    window.location.reload();
  }
}
