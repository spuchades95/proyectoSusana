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
import { DropuserComponent } from './topbar/perfil-user/dropuser/dropuser.component';
import { DropcarritoComponent } from './topbar/carrito/dropcarrito/dropcarrito.component';
import { CestaComponent } from './cesta/cesta.component';
import { ResumenpedidoComponent } from './cesta/resumenpedido/resumenpedido.component';
import { RecomendacionesComponent } from './cesta/recomendaciones/recomendaciones.component';
import { TarjetaComponent } from './cesta/tarjeta/tarjeta.component';
import { BarcoComponent } from './cesta/barco/barco.component';
import { PagosComponent } from './cesta/pagos/pagos.component';
import { ServicestaComponent } from './cesta/servicesta/servicesta.component';
import { AppRoutingModule } from '../app-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { ExistetarjetaComponent } from './metodos-pago/existetarjeta/existetarjeta.component';
import { ServicioscanceladosComponent } from './servicioscancelados/servicioscancelados.component';
import { CestitaComponent } from './topbar/carrito/dropcarrito/cestita/cestita.component';
import { ResumenPedidoPagoComponent } from './cesta/resumen-pedido-pago/resumen-pedido-pago.component';
import { ServiciosSeleccionadosComponent } from './cesta/servicios-seleccionados/servicios-seleccionados.component';


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
    DropuserComponent,
    DropcarritoComponent,
    CestaComponent,
    ResumenpedidoComponent,
    RecomendacionesComponent,
    TarjetaComponent,
    BarcoComponent,
    PagosComponent,
    ServicestaComponent,
    ExistetarjetaComponent,
    ServicioscanceladosComponent,
    CestitaComponent,
    ResumenPedidoPagoComponent,
    ServiciosSeleccionadosComponent,
  
  
   
  ],
  imports: [
    CommonModule,  SlickCarouselModule,FormsModule,
    AppRoutingModule,
  ],
  exports: [ FichaservicioComponent, MetodosPagoComponent, MisembarcacionesComponent, MisserviciosComponent,DatosComponent,CestaComponent,PagosComponent,InicioComponent]
})
export class ClienteModule { }
