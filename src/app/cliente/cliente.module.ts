import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MetodosPagoComponent } from './perfil/metodos-pago/metodos-pago.component';
import { DatosComponent } from './perfil/datos/datos.component';
import { MisembarcacionesComponent } from './perfil/misembarcaciones/misembarcaciones.component';



@NgModule({
  declarations: [
    TopbarComponent,
    InicioComponent,
    PerfilComponent,
    MetodosPagoComponent,
    DatosComponent,
    MisembarcacionesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TopbarComponent, InicioComponent, DatosComponent ]
})
export class ClienteModule { }
