import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-misembarcaciones',
  templateUrl: './misembarcaciones.component.html',
  styleUrls: ['./misembarcaciones.component.css'],
})
export class MisembarcacionesComponent implements OnInit {
  idLocalStorage: any;
  tieneBarcos: boolean = false;
  barcos: any[] = [];
  embarcacionSeleccionada: any;
  constructor(private apiService: ApiService) {
    this.idLocalStorage = localStorage.getItem('clienteId');
  }
  ngOnInit() {
    this.apiService
      .getInfoBarcos(this.idLocalStorage)
      .subscribe((response: any) => {
        this.barcos = response;
        this.tieneBarcos = this.barcos.length > 0;
      });
  }
  seleccionarEmbarcacion(event: any) {
    const embarcacionId = event.target.value;
    this.embarcacionSeleccionada = this.barcos.find(
      (embarcacion) => embarcacion.id === parseInt(embarcacionId, 10)
    );
  }
}
