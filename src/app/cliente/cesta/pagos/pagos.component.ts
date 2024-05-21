import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';
import { now } from 'jquery';

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
  gastosGestion: number = 1.50;
  total: number = 0;

  @Output() actualizarTotal: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
    this.idLocalStorage = localStorage.getItem('clienteId');
  }

  ngOnInit() {
    this.obtenerEmbarcaciones();
    this.obtenerMetodosDePago();
    this.obtenerServiciosParaPagar();
    console.log(this.serviciosParaPagar );
  }

  obtenerMetodosDePago() {
    this.apiService.getCardsByIdUser(this.idLocalStorage).subscribe((response: any) => {
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
      this.serviciosParaPagar = JSON.parse(servicios).map((servicio: { precio: any; }) => ({
        ...servicio,
        precio: Number(servicio.precio) 
      }));
      this.calcularTotal();
    }
  }

  calcularTotal() {
    const totalServicios = this.serviciosParaPagar.reduce(
      (acc, servicio) => acc + Number(servicio.precio),
      0
    );
    this.total = totalServicios + Number(this.gastosGestion);
    console.log(this.total);
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
    this.actualizarTotal.emit(this.total); 
  }

  realizarPago() {
    const pagoData = {
      embarcacion: this.embarcacionSeleccionada,
      metodoDePago: this.metodoDePagoSeleccionado,
      servicios: this.serviciosParaPagar,
  
    };

    const pagoTicket = {
      Total: this.total,
      Estado: 'Pagado',
      FechaEmision: now(),
      Tarjeta_id: this.metodoDePagoSeleccionado.id,
    };
    const servicioBarco={

      
    }

console.log(pagoTicket);

    // this.apiService.postHire(pagoData).subscribe(
    //   response => {
    //     console.log('Pago realizado con éxito:', response);
    //   },
    //   error => {
    //     console.error('Error al realizar el pago:', error);
    //   }
    // );
  }
}
