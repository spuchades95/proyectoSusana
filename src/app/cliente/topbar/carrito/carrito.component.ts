import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  obtenerCantidadCarrito(): number {
  
return 19;
  }

  showDropUser: boolean = false;
  @Output() dropdownToggled = new EventEmitter<boolean>();

  toggleDropdown() {
    this.showDropUser = !this.showDropUser;
    this.dropdownToggled.emit(this.showDropUser);

  }

}
