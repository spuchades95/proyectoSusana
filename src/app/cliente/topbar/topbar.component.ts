import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';
import { Router } from '@angular/router';

@Component({
 // standalone:true,
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  name: string = this.capitalizeFirstLetter(localStorage.getItem('name') || 'Usuario');
  role = localStorage.getItem('role') || null;
  showDropUser: boolean = false;

  handleDropdownToggle(showDropUser: boolean) {
    this.showDropUser = showDropUser;
  }
  constructor(private authService: AuthService, private router: Router, private tokenService: TokenService) { }

  logout() {

    this.tokenService.removeToken();

    this.router.navigate(['/login']);
  }
  private capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }




}
