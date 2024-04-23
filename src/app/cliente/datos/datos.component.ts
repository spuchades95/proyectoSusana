import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
  fullname= localStorage.getItem('fullname') || null;
}
