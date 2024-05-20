import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-misembarcaciones',
  templateUrl: './misembarcaciones.component.html',
  styleUrls: ['./misembarcaciones.component.css']
})
export class MisembarcacionesComponent implements OnInit {
  idLocalStorage: any;
  tieneBarcos: boolean = false;
  barcos: any[] = [];
  embarcacionSeleccionada: any;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private sharedDataService: SharedDataService
  ) {
    this.idLocalStorage = localStorage.getItem('clienteId');
  }
  ngOnInit() {
    console.log(this.idLocalStorage);
    this.apiService.getInfoBarcos(this.idLocalStorage).subscribe((response: any) => {
      this.barcos = response;
      this.tieneBarcos = this.barcos.length > 0;
      console.log(this.tieneBarcos);
      console.log(this.barcos);
  
    });
  
  }
  seleccionarEmbarcacion(event: any) {
    const embarcacionId = event.target.value;
    this.embarcacionSeleccionada = this.barcos.find(embarcacion => embarcacion.id === parseInt(embarcacionId, 10));
  }

}
