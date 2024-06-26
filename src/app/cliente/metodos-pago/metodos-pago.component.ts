import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-metodos-pago',
  templateUrl: './metodos-pago.component.html',
  styleUrls: ['./metodos-pago.component.css'],
})
export class MetodosPagoComponent implements OnInit {
  idLocalStorage: any;
  tieneTarjetas: boolean = false;
  tarjetas: any[] = [];
  constructor(private apiService: ApiService) {
    this.idLocalStorage = localStorage.getItem('clienteId');
  }
  ngOnInit() {
    this.apiService
      .getCardsByIdUser(this.idLocalStorage)
      .subscribe((response: any) => {
        this.tarjetas = response.data;
        this.tieneTarjetas = this.tarjetas.length > 0;
      });
  }

  actualizarListaTarjetas(idTarjetaEliminada: number): void {
    this.tarjetas = this.tarjetas.filter(
      (tarjeta) => tarjeta.id !== idTarjetaEliminada
    );
    this.tieneTarjetas = this.tarjetas.length > 0;
  }
}
