import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-servicioscancelados',
  templateUrl: './servicioscancelados.component.html',
  styleUrls: ['./servicioscancelados.component.css']
})
export class ServicioscanceladosComponent implements OnInit {
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

    this.apiService.getServiceOfClientCanel(this.idLocalStorage).subscribe((response: any) => {
      this.servicios = response.data;
      this.tieneServicios = this.servicios.length > 0;
   
    });
  
  }

  actualizarListaServicios(idTarjetaEliminada: number): void {
    window.location.reload();
  }
}
