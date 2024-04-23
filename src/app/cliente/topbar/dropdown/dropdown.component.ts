import { Component, HostListener } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  isOpen: boolean = false;
  servicios: string[] = ['Servicio 1', 'Servicio 2', 'Servicio 3'];

  toggleMenu() {
    this.isOpen = !this.isOpen;
    
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdownElement = target.closest('.dropdown');
    if (!dropdownElement || !dropdownElement.contains(target)) {
      this.isOpen = false;
    }
  }
}
