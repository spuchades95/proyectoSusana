import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resumenpedido',
  templateUrl: './resumenpedido.component.html',
  styleUrls: ['./resumenpedido.component.css']
})
export class ResumenpedidoComponent implements OnInit {
  @Input() serviciosParaPagar: any[] = [];
  @Input() gastosGestion: number = 0;
  @Input() totalServicios: number = 0;

  constructor(private router: Router) {}
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
  realizarPago() {
    localStorage.setItem('serviciosParaPagar', JSON.stringify(this.serviciosParaPagar));
    this.router.navigate(['/cliente/cestapagos']);
  }
}
