import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-existetarjeta',
  templateUrl: './existetarjeta.component.html',
  styleUrls: ['./existetarjeta.component.css'],
})
export class ExistetarjetaComponent {
  @Input() numero: string = '';
  @Input() cliente: string = '';
  @Input() fechaCaducidad: string = '';
  @Input() idTarjeta: number = 0;
  @Output() tarjetaEliminada: EventEmitter<number> = new EventEmitter<number>();
  constructor(private apiService: ApiService) {}
  getNumeroFormateado(): string {
    let numeroTarjeta = this.numero.toString();
    let primeraParte = numeroTarjeta.slice(0, -4).replace(/\d/g, '*');
    let ultimosCuatro = numeroTarjeta.slice(-4);
    return `${primeraParte} ${ultimosCuatro}`;
  }

  eliminarTarjeta(idTarjeta: number): void {
    this.apiService.deleteTarjetaPorId(idTarjeta).subscribe(
      () => {
        this.tarjetaEliminada.emit(idTarjeta);
      },
      (error) => {
        console.error('Error al eliminar la tarjeta:', error);
      }
    );
  }
}
