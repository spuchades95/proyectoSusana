import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MetodosPagoComponent } from './metodos-pago/metodos-pago.component';
import { DatosComponent } from './datos/datos.component';
import { MisembarcacionesComponent } from './misembarcaciones/misembarcaciones.component';
import { TarjetasComponent } from './metodos-pago/tarjetas/tarjetas.component';
import { AddtarjetasComponent } from './metodos-pago/addtarjetas/addtarjetas.component';
import { MisserviciosComponent } from './misservicios/misservicios.component';
import { LateralComponent } from './lateral/lateral.component';
import { ServicioComponent } from './misservicios/servicio/servicio.component';
import { CarritoComponent } from './topbar/carrito/carrito.component';
import { DropdownComponent } from './topbar/dropdown/dropdown.component';
import { PerfilUserComponent } from './topbar/perfil-user/perfil-user.component';
import { FichaservicioComponent } from './fichaservicio/fichaservicio.component';
import { BoatsComponent } from './misembarcaciones/boats/boats.component';
import { ModalboatsComponent } from './misembarcaciones/boats/modalboats/modalboats.component';




@NgModule({
  declarations: [
    TopbarComponent,
    InicioComponent,
 
    MetodosPagoComponent,
    DatosComponent,
    MisembarcacionesComponent,
    TarjetasComponent,
    AddtarjetasComponent,
    MisserviciosComponent,
    LateralComponent,
    ServicioComponent,
    CarritoComponent,
    DropdownComponent,
    PerfilUserComponent,
    FichaservicioComponent,
    BoatsComponent,
    ModalboatsComponent,
   
  ],
  imports: [
    CommonModule
  ],
  exports: [MisembarcacionesComponent]
})
export class ClienteModule { }
