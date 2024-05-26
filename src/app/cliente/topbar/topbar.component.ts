import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';

@Component({
  // standalone:true,
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  searchTerm: string = '';
  services: any[] = [];
  serviciosFiltrados: any[] = [];
  showDropUser: boolean = false;

  handleDropdownToggle(showDropUser: boolean) {
    this.showDropUser = showDropUser;
  }
  constructor(
    private apiService: ApiService,
    private sharedDataService: SharedDataService,
    private router: Router
  ) {
    this.loadServices();
  }

  loadServices(): void {
    this.apiService.getServicios().subscribe((response: any) => {
      this.services = response;
    });
  }

  search(): void {
    if (this.searchTerm.trim() !== '') {
      this.serviciosFiltrados = this.services.filter((servicio) =>
        servicio.Nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      if (this.serviciosFiltrados.length === 1) {
        const servicioSeleccionado = this.serviciosFiltrados[0];
        this.sharedDataService.setData('servicioSeleccionado', servicioSeleccionado);
        this.router.navigate(['/cliente/servicio', servicioSeleccionado.id]);
      }
    }
  }


}
