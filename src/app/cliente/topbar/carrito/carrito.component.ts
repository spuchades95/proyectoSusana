import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent {
  showDropUser: boolean = false;
  @Output() dropdownToggled = new EventEmitter<boolean>();

  toggleDropdown() {
    this.showDropUser = !this.showDropUser;
    this.dropdownToggled.emit(this.showDropUser);
  }
  obtenerCantidadCarrito(): number {
    const carrito = localStorage.getItem('datosSeleccionados');
    if (carrito) {
      const serviciosSeleccionados = JSON.parse(carrito);
      return serviciosSeleccionados.length;
    }
    return 0;
  }
}
