import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalboatsComponent } from './modalboats/modalboats.component';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css'],
})
export class BoatsComponent {
  boatData: any = [];

  @Input() Origen: string = '';
  @Input() Matricula: string = '';
  @Input() TipoBarco: string = '';
  @Input() NombreBarco: string = '';
  @Input() idbarco: number = 0;
  @Input() Manga: string = '';
  @Input() Eslora: string = '';
  @Input() Modelo: string = '';
  @Input() NumeroPlaza: string = '';
  @Input() FechaInicio: string = '';
  @Input() FechaFinalizacion: string = '';
  @Input() Plaza: string = '';

  constructor(private dialog: MatDialog) {}

  openModal(boatData: any): void {
    const dialogRef = this.dialog.open(ModalboatsComponent, {
      data: {
        NombreBarco: this.NombreBarco,
        TipoBarco: this.TipoBarco,
        Matricula: this.Matricula,
        Origen: this.Origen,
        Manga: this.Manga,
        Eslora: this.Eslora,
        Modelo: this.Modelo,
        NumeroPlaza: this.NumeroPlaza,
        FechaInicio: this.FechaInicio,
        FechaFinalizacion: this.FechaFinalizacion,
        Plaza: this.Plaza,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {

    });
  }
}
