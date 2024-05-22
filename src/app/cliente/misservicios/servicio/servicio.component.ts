import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalservicioComponent } from './modalservicio/modalservicio.component';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css'],
})
export class ServicioComponent implements OnInit {
  @Input() id: any = '';
  @Input() Estado: any = '';
  @Input() Servicio: any = '';
  @Input() FechaContratacion: any = '';
  @Input() Imagen: any = '';
  @Input() Ticket_Numero: any = '';
  @Input() Ticket_Total: any = '';
  imageUrl: any = '';
  EstadoActivo: boolean = true;
  @Output() actualizaEstado: EventEmitter<number> = new EventEmitter<number>();
  statusImageUrl: string = 'assets/img/inprocess.svg';

  constructor(private dialog: MatDialog, private apiService: ApiService) {}

  ngOnInit(): void {
    this.filtrarPorEstado();
    this.cambiarImagenSegunEstado();
    this.imageUrl = this.apiService.getImageUrl(this.Imagen);
    console.log(this.imageUrl);
  }
  filtrarPorEstado(): void {
    if (this.Estado === 'Activo') {
      this.EstadoActivo = true;
    } else {
      this.EstadoActivo = false;
    }
  }

  cambiarImagenSegunEstado(): void {
    switch (this.Estado) {
      case 'Activo':
        this.statusImageUrl = 'assets/img/active.svg';
        break;
      case 'Cancelado':
        this.statusImageUrl = 'assets/img/cancel.svg';
        break;
      case 'Procesando':
        this.statusImageUrl = 'assets/img/inprocess.svg';
        break;
      case 'Completado':
        this.statusImageUrl = 'assets/img/complete.svg';
        break;
    }
  }

  actualizaestado(id: number): void {
    this.apiService.putEstadoCancelado(id).subscribe(
      () => {
        this.actualizaEstado.emit(id);
      },
      (error) => {
        console.error('Error al cancelar servicio:', error);
      }
    );
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalservicioComponent, {
      data: {
        Servicio: this.Servicio,
        Ticket_Numero: this.Ticket_Numero,
        Ticket_Total: this.Ticket_Total,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Modal cerrado');
    });
  }
}
