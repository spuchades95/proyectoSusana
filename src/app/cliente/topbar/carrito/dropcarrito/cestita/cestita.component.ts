import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-cestita',
  templateUrl: './cestita.component.html',
  styleUrls: ['./cestita.component.css']
})
export class CestitaComponent implements OnInit {
  @Input() datosSeleccionados: any[] = [];
  imageUrl: string | null = null;
  constructor(

    private apiService: ApiService
  ) {}
  ngOnInit() {
    const datosGuardados = localStorage.getItem('datosSeleccionados');
    if (datosGuardados) {
      this.datosSeleccionados = JSON.parse(datosGuardados);
    console.log(this.datosSeleccionados);
    }
  }
  obtenerImageUrl(imagen: string): string | null {
    return this.apiService.getImageUrl(imagen);
  }
  eliminarDelCarrito(index: number) {
    this.datosSeleccionados.splice(index, 1);
    localStorage.setItem('datosSeleccionados', JSON.stringify(this.datosSeleccionados));
  }
}
