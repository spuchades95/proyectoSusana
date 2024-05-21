import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropuser',
  templateUrl: './dropuser.component.html',
  styleUrls: ['./dropuser.component.css']
})
export class DropuserComponent {

  name: string = this.capitalizeFirstLetter(localStorage.getItem('name') || 'Usuario');
  fullname= localStorage.getItem('fullname') || null;
  constructor(private authService: AuthService, private router: Router, private tokenService: TokenService) { }


  logout() {

    this.tokenService.removeToken();

    this.router.navigate(['/login']);
  }
  private capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);

  }
 
}
