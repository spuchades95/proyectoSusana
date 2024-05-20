import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css'],
})
export class PagosComponent implements OnInit {
  idLocalStorage: any;
  tarjetas: any[] = [];
  barcos: any[] = [];
  embarcacionSeleccionada: any;
  metodoDePagoSeleccionado: any;
  serviciosParaPagar: any[] = [];
  gastosGestion: number = 1.5;
  total: number = 0;

  @Output() actualizarTotal: EventEmitter<number> = new EventEmitter<number>();
  constructor(
    private apiService: ApiService,
    private router: Router,
    private sharedDataService: SharedDataService
  ) {
    this.idLocalStorage = localStorage.getItem('clienteId');
  }
  ngOnInit() {
    this.obtenerEmbarcaciones();
    this.obtenerMetodosDePago();
    this.obtenerServiciosParaPagar();
  }

  obtenerMetodosDePago() {
    this.apiService
      .getCardsByIdUser(this.idLocalStorage)
      .subscribe((response: any) => {
        this.tarjetas = response.data;
        console.log(this.tarjetas);
      });
  }

  obtenerEmbarcaciones() {
    this.apiService.getInfoBarcos(this.idLocalStorage).subscribe((data) => {
      this.barcos = data;
      console.log(this.barcos);
    });
  }
  obtenerServiciosParaPagar() {
    const servicios = localStorage.getItem('serviciosParaPagar');
    if (servicios) {
      this.serviciosParaPagar = JSON.parse(servicios);
      this.calcularTotal();
    }
  }
  calcularTotal() {
    this.total = this.serviciosParaPagar.reduce(
      (acc, servicio) => acc + servicio.precio,
      this.gastosGestion
    );
  }
  seleccionarEmbarcacion(event: any) {
    const embarcacionId = event.target.value;
    this.embarcacionSeleccionada = this.barcos.find(
      (embarcacion) => embarcacion.id === parseInt(embarcacionId, 10)
    );
  }

  seleccionarMetodoDePago(event: any) {
    const metodoId = event.target.value;
    this.metodoDePagoSeleccionado = this.tarjetas.find(
      (metodo) => metodo.id === parseInt(metodoId, 10)
    );
  }
  eliminarServicio(index: number) {
    this.serviciosParaPagar.splice(index, 1);
    this.calcularTotal();
    this.actualizarTotal.emit(this.total); // Emitir el evento para notificar el cambio de total
  }
  realizarPago() {
    const pagoData = {
      embarcacion: this.embarcacionSeleccionada,
      metodoDePago: this.metodoDePagoSeleccionado,
      servicios: this.serviciosParaPagar,
      total: this.total,
    };
    console.log('Realizando pago con los datos:', pagoData);
    // Aquí enviarías pagoData a tu API para realizar el pago
  }
}
