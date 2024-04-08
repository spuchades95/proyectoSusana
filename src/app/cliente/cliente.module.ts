import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MetodosPagoComponent } from './metodos-pago/metodos-pago.component';
import { DatosComponent } from './datos/datos.component';
import { MisembarcacionesComponent } from './misembarcaciones/misembarcaciones.component';
import { TarjetasComponent } from './metodos-pago/tarjetas/tarjetas.component';
import { AddtarjetasComponent } from './metodos-pago/addtarjetas/addtarjetas.component';




@NgModule({
  declarations: [
    TopbarComponent,
    InicioComponent,
 
    MetodosPagoComponent,
    DatosComponent,
    MisembarcacionesComponent,
    TarjetasComponent,
    AddtarjetasComponent,
   
  ],
  imports: [
    CommonModule
  ],
  exports: [TopbarComponent, InicioComponent, DatosComponent, MetodosPagoComponent ]
})
export class ClienteModule { }
