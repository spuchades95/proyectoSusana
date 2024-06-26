import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
})
export class DatosComponent {
  idLocalStorage: any;
  newPassword: string = '';
  newEmail: string = '';
  newTelefono: string = '';
  newGenero: string = '';
  newNombre: string = '';
  clienteInfo: any;
  fechaNacimiento: any;
  clienteId: any = '';
  constructor(private apiService: ApiService) {
    this.idLocalStorage = localStorage.getItem('id');
  }
  ngOnInit() {
    this.apiService
      .getClienteInfo(this.idLocalStorage)
      .subscribe((response) => {
        const cliente = response.data;
        this.clienteInfo = cliente;
        this.newEmail = cliente.email;
        this.newGenero = cliente.genero;
        const fechaNacimientoISO = new Date(cliente.fecha_nacimiento)
          .toISOString()
          .substring(0, 10);

        this.fechaNacimiento = fechaNacimientoISO;
        this.clienteId = cliente.id;
        this.newTelefono = cliente.Telefono;
        this.newNombre = cliente.nombre;
      });
  }

  actualizarDatos() {
    const data = {
      NombreCompleto: this.newNombre,
      Genero: this.newGenero,
      FechaNacimiento: this.fechaNacimiento,
    };

    this.apiService.putDatos(this.clienteId, data).subscribe((response) => {});
  }

  actualizarTelefono() {
    let data = {
      Telefono: this.newTelefono,
    };
    this.apiService
      .putTelefono(this.clienteId, data)
      .subscribe((response) => {});
  }
  actualizarCorreo() {
    let data = {
      email: this.newEmail,
    };

    this.apiService.putEmail(this.clienteId, data).subscribe((response) => {});
  }
  actualizarContra() {
    const data = {
      password: this.newPassword,
    };

    this.apiService
      .putPassword(this.clienteId, data)
      .subscribe((response) => {});
  }
}
