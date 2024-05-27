import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-resumen-pedido-pago',
  templateUrl: './resumen-pedido-pago.component.html',
  styleUrls: ['./resumen-pedido-pago.component.css'],
})
export class ResumenPedidoPagoComponent implements OnInit {
  @Input() serviciosParaPagar: any[] = [];
  @Input() gastosGestion: number = 0;
  @Input() totalServicios: number = 0;
  @Output() realizarPagoEvent: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}
  ngOnInit() {}
}
