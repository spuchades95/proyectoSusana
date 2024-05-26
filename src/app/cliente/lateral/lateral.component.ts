import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/token.service';
@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent {
  constructor(private authService: AuthService, private router: Router, private tokenService: TokenService) { }

  logout() {
    localStorage.removeItem('datosSeleccionados');
    localStorage.removeItem('serviciosParaPagar');
    this.tokenService.removeToken();

    this.router.navigate(['/login']);
  }
}
