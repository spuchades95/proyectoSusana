import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-servicios-seleccionados',
  templateUrl: './servicios-seleccionados.component.html',
  styleUrls: ['./servicios-seleccionados.component.css']
})
export class ServiciosSeleccionadosComponent {
  @Input() serviciosSeleccionados: any[] = [];
  @Output() servicioEliminado: EventEmitter<number> = new EventEmitter<number>();
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  obtenerImageUrl(imagen: string): string {
    return this.apiService.getImageUrl(imagen);
  }

  eliminarServicio(index: number) {
    this.servicioEliminado.emit(index);
  
  }
}
