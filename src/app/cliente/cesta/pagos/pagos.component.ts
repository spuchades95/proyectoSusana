import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
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
  fecha: any = 0;
  @Output() actualizarTotal: EventEmitter<number> = new EventEmitter<number>();

  constructor(private apiService: ApiService, private router: Router) {
    this.idLocalStorage = localStorage.getItem('clienteId');
  }

  ngOnInit() {
    this.obtenerEmbarcaciones();
    this.obtenerMetodosDePago();
    this.obtenerServiciosParaPagar();
    this.sacarfecha();

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
      this.serviciosParaPagar = JSON.parse(servicios).map(
        (servicio: { precio: any }) => ({
          ...servicio,
          precio: Number(servicio.precio),
        })
      );
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
  sacarfecha() {
    const now = new Date();
    this.fecha = now.toISOString().substring(0, 10);
  }
  getFechaFinalizacion(tipoPrecio: string, fechaContratacion: string) {
    const fechafinalizacion = new Date(fechaContratacion);
    if (tipoPrecio === 'Precio_mensual') {
      fechafinalizacion.setMonth(fechafinalizacion.getMonth() + 1);
    }
    return fechafinalizacion.toISOString().substring(0, 10);
  }
  realizarPago() {
    const pagoTicket = {
      Total: this.total,
      Estado: 'Pagado',
      FechaEmision: this.fecha,
      Tarjeta_id: this.metodoDePagoSeleccionado.id,
    };

    const pedidos: any[] = [];
    this.serviciosParaPagar.forEach((servicio) => {
      let estadoPedido = '';
      if (servicio.tipoPrecio === 'Precio_unico') {
        estadoPedido = 'Procesando';
      } else if (servicio.tipoPrecio === 'Precio_mensual') {
        estadoPedido = 'Activo';
      }

      const pedido = {
        Servicio_id: servicio.id,
        Estado: estadoPedido,
        Cliente_id: this.idLocalStorage,
        FechaContratacion: this.fecha,
        FechaFinalizacion: this.getFechaFinalizacion(
          servicio.tipoPrecio,
          this.fecha
        ),
      };

      pedidos.push(pedido);
    });
    const serviciosBarco: any[] = [];
    this.serviciosParaPagar.forEach((servicio) => {
      const servicioBarco = {
        Servicio_id: servicio.id,
        Embarcacion_id: this.embarcacionSeleccionada.id,
        FechaContratacion: this.fecha,
      };

      serviciosBarco.push(servicioBarco);
    });

    console.log(pagoTicket);
    this.apiService
      .postTicket(pagoTicket)
      .pipe(
        switchMap((response) => {
          console.log('Ticket:', response);

          return this.apiService.postHire(pedidos);
        }),
        switchMap((response) => {
          console.log('Servicios contratados:', response);

          return this.apiService.postSolicita(serviciosBarco);
        })
      )
      .subscribe(
        (response) => {
          console.log('compra completada:', response);

          const serviciosParaPagar = JSON.parse(
            localStorage.getItem('serviciosParaPagar') || '[]'
          );

          const serviciosRestantes = serviciosParaPagar.filter(
            (servicio: any) => {
              return !this.serviciosParaPagar.some(
                (servicioPagado: any) => servicioPagado.id === servicio.id
              );
            }
          );

          localStorage.setItem(
            'serviciosParaPagar',
            JSON.stringify(serviciosRestantes)
          );

          localStorage.removeItem('datosSeleccionados');

          this.router.navigate(['/cliente/inicio']);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
