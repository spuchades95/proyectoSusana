import { Component, Input, OnInit,  EventEmitter, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-resumen-pedido-pago',
  templateUrl: './resumen-pedido-pago.component.html',
  styleUrls: ['./resumen-pedido-pago.component.css']
})
export class ResumenPedidoPagoComponent implements OnInit {
  @Input() serviciosParaPagar: any[] = [];
  @Input() gastosGestion: number = 0;
  @Input() totalServicios: number = 0;
  @Output() realizarPagoEvent: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {
    this.calcularTotales();
  }
  ngOnChanges() {
    this.calcularTotales();
  }

  calcularTotales() {
    this.totalServicios = this.serviciosParaPagar.reduce((sum, servicio) => sum + parseFloat(servicio.precio), 0);
  }

  get total() {
    return this.totalServicios + this.gastosGestion;
  }
  onRealizarPago() {
    this.realizarPagoEvent.emit();
  }
  realizarPago(pagoData: any) {
  
      // this.apiService.realizarPago(pagoData).subscribe(
      //   response => {
      //     console.log('Pago realizado con éxito:', response);
      //     this.realizarPagoEvent.emit(response); // Emitir evento cuando el pago sea exitoso
      //   },
      //   error => {
      //     console.error('Error al realizar el pago:', error);
      //   }
      // );
    
  }
}
