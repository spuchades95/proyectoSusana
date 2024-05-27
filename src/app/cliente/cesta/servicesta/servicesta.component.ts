import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-servicesta',
  templateUrl: './servicesta.component.html',
  styleUrls: ['./servicesta.component.css'],
})
export class ServicestaComponent {
  @Input() servicio: any = {};
  @Output() servicioEliminado = new EventEmitter<number>();
  @Output() servicioSeleccionado = new EventEmitter<any>();
  constructor(private apiService: ApiService) {}

  toggleSeleccionado() {
    this.servicio.seleccionado = !this.servicio.seleccionado;
    this.servicioSeleccionado.emit(this.servicio);
  }

  eliminarServicio() {
    this.servicioEliminado.emit(this.servicio.id);
  }

  obtenerImageUrl(imagen: string): string {
    return this.apiService.getImageUrl(imagen);
  }
}
