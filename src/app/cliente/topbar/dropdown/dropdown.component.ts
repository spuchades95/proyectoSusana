import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  isOpen: boolean = false;
  servicios: any = [];

  constructor(
    private apiService: ApiService,
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}
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
  ngOnInit() {
    this.apiService.getServicios().subscribe(
      (data: any) => {
        this.servicios = data;
      },
      (error) => {
        console.error('Error al obtener servicios:', error);
      }
    );
  }

  seleccionarServicio(servicio: any) {
    this.sharedDataService.setData('servicioSeleccionado', servicio);
    this.router.navigate(['cliente/servicio', servicio.id]);
    this.isOpen = false;
  }
}
