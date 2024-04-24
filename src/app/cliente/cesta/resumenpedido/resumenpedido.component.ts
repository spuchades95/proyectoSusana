import { Component } from '@angular/core';

@Component({
  selector: 'app-resumenpedido',
  templateUrl: './resumenpedido.component.html',
  styleUrls: ['./resumenpedido.component.css']
})
export class ResumenpedidoComponent {
  botonPagoActivado = false;

  realizarPago() {
    // Aquí puedes implementar la lógica para procesar el pago
  }
}
