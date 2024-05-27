import { Component, Output, EventEmitter } from '@angular/core';
import { TokenService } from 'src/app/shared/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.css']
})
export class PerfilUserComponent {
  name: string = this.capitalizeFirstLetter(localStorage.getItem('name') || 'Usuario');
  role = localStorage.getItem('role') || null;

  constructor(private router: Router, private tokenService: TokenService) { }
  showDropUser: boolean = false;
  @Output() dropdownToggled = new EventEmitter<boolean>();

  toggleDropdown() {
    this.showDropUser = !this.showDropUser;
    this.dropdownToggled.emit(this.showDropUser);

  }
  logout() {

    this.tokenService.removeToken();
    this.router.navigate(['/login']);
  }
  private capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }


}
