import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoTransitoComponent } from './transito/contenido-transito/contenido-transito.component';
import { TablaTransitoComponent } from './transito/tabla-transito/tabla-transito.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EmbarcacionesComponent } from './embarcacion/embarcaciones/embarcaciones.component';
import { CardIncidenciaComponent } from './movil/card-incidencia/card-incidencia.component';
import { CardConfirmacionTransitoComponent } from './movil/card-confirmacion-transito/card-confirmacion-transito.component';
import { NotificacionesComponent } from './notificaciones/notificaciones/notificaciones.component';
import { TablaGuardiaComponent } from './guardia-civil/tabla-guardia/tabla-guardia.component';
import { ContenidoPbComponent } from './plaza-base/contenido-pb/contenido-pb.component';
import { TablaTripulanteComponent } from './transito/tabla-tripulante/tabla-tripulante.component';
import { FormularioPbComponent } from './plaza-base/formulario-pb/formulario-pb.component';
import { TablaPbComponent } from './plaza-base/tabla-pb/tabla-pb.component';
import { LoginComponent } from './login/login/login.component';
import { ContenidoComponent } from './plantilla/contenido/contenido.component';
import { TablaComponent } from './embarcacion/tabla/tabla.component';
import { FormularioEmbarcacionComponent } from './embarcacion/formulario-embarcacion/formulario-embarcacion.component';
import { FormularioTransitoComponent } from './transito/formulario-transito/formulario-transito.component';
import { PlantillaGuardamuellesComponent } from './movil/plantilla-guardamuelles/plantilla-guardamuelles.component';
import { roleGuard } from './role.guard';
import { ListaCardsComponent } from './movil/lista-cards/lista-cards.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { DatosComponent } from './cliente/datos/datos.component';
import { MetodosPagoComponent } from './cliente/metodos-pago/metodos-pago.component';
import { MisembarcacionesComponent } from './cliente/misembarcaciones/misembarcaciones.component';
import { MisserviciosComponent } from './cliente/misservicios/misservicios.component';
import { InicioComponent } from './cliente/inicio/inicio.component';
import { CestaComponent } from './cliente/cesta/cesta.component';
import { FichaservicioComponent } from './cliente/fichaservicio/fichaservicio.component';
import { TopbarComponent } from './cliente/topbar/topbar.component';
import { AddtarjetasComponent } from './cliente/metodos-pago/addtarjetas/addtarjetas.component';
import { PagosComponent } from './cliente/cesta/pagos/pagos.component';
import { ServicioscanceladosComponent } from './cliente/servicioscancelados/servicioscancelados.component';

// Se importan los componentes que se van a utilizar en las rutas
// Se definen las rutas de la aplicación
// Se exporta la clase AppRoutingModule
// CanActivate es un guard que se utiliza para verificar si el usuario tiene el rol necesario para acceder a la ruta
// Se importa el guard roleGuard
// De esta manera las rutas se protegen con el guard roleGuard y rediriigen al componente correspondiente/*

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: ContenidoComponent,
    children: [
      {
        path: '',
        canActivate: [roleGuard], // Se utiliza el guard para verificar el rol del usuario

        component: DashboardComponent,
        data: { role: '2' }
      }
    ]
  },
  {
    path: 'embarcaciones',
    canActivate: [roleGuard],
    data: { role: '2' },
    component: ContenidoComponent,
    children: [
      {
        path: 'tabla',
        component: TablaComponent,
      },
      {
        path: 'formulario',
        component: FormularioEmbarcacionComponent,
      },
      {
        path: '',
        redirectTo: 'tabla',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'cliente',
    canActivate: [roleGuard],
    data: { role: '6' },
    //component: TopbarComponent,
       children: [
        {
          path: '',
          redirectTo: 'inicio',
          pathMatch: 'full',
        },
        {
          path: 'misdatos',
          component: DatosComponent,
        },
        {
          path: 'pagos',
          component: MetodosPagoComponent,
        },
        {
          path: 'addtarjeta',
          component: AddtarjetasComponent,
        },

        {
          path: 'misembarcaciones',
          component: MisembarcacionesComponent,
        },
        {
          path: 'misservicios',
          component: MisserviciosComponent,
        },
        {
          path: 'misservicioscancelados',
          component: ServicioscanceladosComponent,
        },
        {
          path: 'servicio/:id',
          component: FichaservicioComponent,
        },
        {
          path: 'cesta',
          component: CestaComponent,
        },
        {
          path: 'cestapagos',
          component: PagosComponent,
        },
        {
          path: 'inicio',
          component: InicioComponent,
        },
    ],
  },

  {
    path: 'plazabase',
    canActivate: [roleGuard],
    data: { role: '2' },
    component: ContenidoComponent,
    children: [
      {
        path: 'tabla',
        component: TablaPbComponent,
      },
      {
        path: 'formulario',
        component: FormularioPbComponent,
      },
      {
        path: '',
        redirectTo: 'tabla',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'transito',
    canActivate: [roleGuard],
    data: { role: '2' },
    component: ContenidoComponent,
    children: [
      {
        path: 'tabla',
        component: TablaTransitoComponent,
      },
      {
        path: 'formulario',
        component: FormularioTransitoComponent,
      },
      {
        path: '',
        redirectTo: 'tabla',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'guardiacivil',
    canActivate: [roleGuard],
    data: { role: '4' },
    component: ContenidoComponent, // O el componente que corresponda

    children: [
      {

        path: '',

        component: TablaGuardiaComponent
      }
    ]
  },
  {
    path: 'notificaciones',
    canActivate: [roleGuard],
    data: { role: '2' },
    component: ContenidoComponent, // O el componente que corresponda
    children: [
      {
        path: '',
        component: NotificacionesComponent,
      },
    ],
  },
  {
    path: 'movil',
    canActivate: [roleGuard],
    data: { role: '3' },
    component: PlantillaGuardamuellesComponent, 
    children: [
      { path: '', component: ListaCardsComponent },
    { path: 'card-incidencia', component: CardIncidenciaComponent },
      { path: 'card-confirmacion-transito', component: CardConfirmacionTransitoComponent },
    ]
  },
  {
    path: '**',
    component: ErrorHandlerComponent,
   //  redirectTo: '/login' //Por eso redirigia al login. Doble asterisco es para cualquier ruta que no exista.
  }
];
@NgModule({
  imports: [
     RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
