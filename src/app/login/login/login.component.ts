import { Component } from '@angular/core'; // Importación de módulo necesario para la definición de componentes
import { AuthService } from 'src/app/shared/auth.service'; // Importación de servicio AuthService
import { FormBuilder, FormGroup } from '@angular/forms'; // Importación de módulos necesarios para el manejo de formularios reactivos
import { Router } from '@angular/router'; // Importación de módulo necesario para el manejo de rutas
import { TokenService } from 'src/app/shared/token.service'; // Importación de servicio TokenService
import { AuthStateService } from 'src/app/shared/auth-state.service'; // Importación de servicio AuthStateService
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
}) // Decorador que define el nombre del selector de la etiqueta del componente y la ruta del archivo HTML y CSS que lo define
export class LoginComponent {
  // Declaración de variables

  loginForm: FormGroup; // Variable para almacenar el formulario de inicio de sesión
  errors: any = null; // Variable para almacenar errores

  // Método constructor para crear un objeto del componente
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private apiService: ApiService,
    private token: TokenService,
    private authState: AuthStateService
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    }); // Inicialización del formulario de inicio de sesión
  }

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('name', result.user.NombreUsuario);
        localStorage.setItem('role', result.user.Rol_id);
        localStorage.setItem('fullname', result.user.NombreCompleto);
        localStorage.setItem('id', result.user.id);
        this.apiService.getClienteInfo(result.user.id).subscribe((cliente) => {
          this.apiService
            .getClienteInfo(result.user.id)
            .subscribe((response: any) => {
              const cliente = response.data;
              localStorage.setItem('clienteInfo', JSON.stringify(cliente));
              localStorage.setItem('clienteId', cliente.id.toString());
            });
        });
        this.responseHandler(result);

        const token = this.token.getToken();
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['dashboard']);
      }
    );
  }
  responseHandler(data: any) {
    this.token.handleData(data.access_token);
  }
}
