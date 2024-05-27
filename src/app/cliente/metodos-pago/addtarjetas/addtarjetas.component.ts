import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtarjetas',
  templateUrl: './addtarjetas.component.html',
  styleUrls: ['./addtarjetas.component.css'],
})
export class AddtarjetasComponent {
  tarjetas: any[] = [];
  tarjeta: any;
  NumeroTarjeta: any = '';
  NombreTarjeta: any = '';
  FechaCaducidad: any = '';
  CVV: any = '';
  idLocalStorage: any;
  constructor(private apiService: ApiService, private router: Router) {
    this.idLocalStorage = localStorage.getItem('clienteId');
  }

  ngOnInit() {}

  introduceTarjeta() {
    let fecha = new Date(this.FechaCaducidad);
    let year = fecha.getFullYear();
    let month = fecha.getMonth() + 1;
    let day = fecha.getDate();

    let fechaCaducidadFormateada = `${year}-${month < 10 ? '0' : ''}${month}-${
      day < 10 ? '0' : ''
    }${day}`;

    const data = {
      NumeroTarjeta: this.NumeroTarjeta,
      NombreTarjeta: this.NombreTarjeta,
      FechaCaducidad: fechaCaducidadFormateada,
      CVV: this.CVV,
      Cliente_id: this.idLocalStorage,
    };

    this.apiService.postTarjetaCliente(data).subscribe((response) => {
      this.router.navigate(['/cliente/pagos']);
    });
  }
}
