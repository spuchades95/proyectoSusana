import { Injectable } from '@angular/core'; // Decorador que permite inyectar dependencias al servicio
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importación de módulos necesarios para petición HTTP
import { Observable, tap } from 'rxjs'; // Importación de módulos necesarios para manejo de observables
import { SharedDataService } from '../shared-data/shared-data.service';
import { catchError } from 'rxjs/operators';

// En este servicio se definen los métodos que se utilizarán para realizar peticiones a la API.
//Se importa el módulo HttpClient para realizar peticiones HTTP y el módulo Observable para manejar las respuestas de las peticiones.
//También se importa el módulo tap para realizar operaciones con la respuesta de la petición.
//En todas estas peticionas son manejadas en el backend. en este caso emdiante el framework de Laravel.
@Injectable({
  providedIn: 'root',
}) // Decorador que permite inyectar dependencias al servicio
export class ApiService {
  //private apiUrl = 'http://alum1.iesfsl.org/api/v1/';
  //private apiUrl = 'http://127.0.0.1:8000/api/v1/'; // URL de la API a la que se realizarán las peticiones
 // private serverUrl = 'http://localhost:8000';
private apiUrl = 'https://www.proyectosusana.com.es/api/v1/'; 
private serverUrl ='https://www.proyectosusana.com.es';
  transitoId: any;

  constructor(
    private http: HttpClient,
    private sharedDataService: SharedDataService
  ) {}

  getServicios(): Observable<any> {
    const urls = `${this.apiUrl}${'servicios'}`;
    return this.http.get(urls);
  }

  getImageUrl(imagePath: string): string {
    return `${this.serverUrl}${imagePath}`;
  }

  putTelefono(userId: number, data: any): Observable<any> {
    const url = `${this.apiUrl}cliente/${userId}/telefono`;
    return this.http.put(url, data);
  }
  putPassword(userId: number, data: any): Observable<any> {
    const url = `${this.apiUrl}cliente/${userId}/password`;
    return this.http.put(url, data);
  }
  putEmail(userId: number, data: any): Observable<any> {
    const url = `${this.apiUrl}cliente/${userId}/email`;
    return this.http.put(url, data);
  }
  putDatos(userId: number, data: any): Observable<any> {
    const url = `${this.apiUrl}cliente/${userId}/datos`;
    return this.http.put(url, data);
  }

  putEstadoCancelado(id: number, data?: any): Observable<any> {
    const url = `${this.apiUrl}servicios/${id}/cancel`;
    return this.http.put(url, data);
  }

  postHire(data: any): Observable<any> {
    const url = `${this.apiUrl}pedidos`;
    return this.http.post(url, data);
  }

  postSolicita(data: any): Observable<any> {
    const url = `${this.apiUrl}solicita`;
    return this.http.post(url, data);
  }

  postTicket(data: any): Observable<any> {
    const url = `${this.apiUrl}ticket`;
    return this.http.post(url, data);
  }

  deleteTarjetaPorId(id: number): Observable<any> {
    const url = `${this.apiUrl}tarjetas/${id}`;
    return this.http.delete(url);
  }

  postTarjetaCliente(data: any): Observable<any> {
    const url = `${this.apiUrl}tarjetas`;
    return this.http.post(url, data);
  }

  getCardsByIdUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}tarjetas/${userId}/all`;
    return this.http.get(url);
  }

  getRandomServices(): Observable<any> {
    const url = `${this.apiUrl}servicios/random`;
    return this.http.get(url);
  }

  getServiceOfClient(userId: number): Observable<any> {
    const url = `${this.apiUrl}servicios/${userId}/all`;
    return this.http.get(url);
  }

  getServiceOfClientCanel(userId: number): Observable<any> {
    const url = `${this.apiUrl}servicios/${userId}/allcancel`;
    return this.http.get(url);
  }

  getClientes(): Observable<any> {
    const url = `${this.apiUrl}cliente`;
    return this.http.get(url);
  }
  getInfoBarcos(userId: number): Observable<any> {
    const url = `${this.apiUrl}cliente/${userId}/barcos`;
    return this.http.get(url);
  }

  getClienteInfo(userId: number): Observable<any> {
    const url = `${this.apiUrl}cliente/${userId}/byUserID`;
    return this.http.get(url);
  }

  //de la api cogemos la cantidad de plazas base hay
  getCantidadPB(): Observable<any> {
    const urls = `${this.apiUrl}${'plazaBase/cantidad'}`;
    return this.http.get(urls);
  }
  //de la api cogemos la cantidad de transito hay
  getCantidadTR(): Observable<any> {
    const urls = `${this.apiUrl}${'transito/cantidad'}`;
    return this.http.get(urls);
  }

  //de la api calculamos el porcentaje de ocupacion que hay
  getPorcentajeOcupacion(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/porcentaje'}`;
    return this.http.get(urls);
  }

  //de la api cogemos la cantidad de plazas base hay disponibles
  getPBdisponibles(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/pbdisponibles'}`;
    return this.http.get(urls);
  }

  //de la api cogemos la cantidad de plazas base hay en mantenimiento
  getPBmantenimiento(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/pbmantenimiento'}`;
    return this.http.get(urls);
  }

  //de la api cogemos la cantidad de transito hay disponibles
  getTRdisponibles(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/trdisponibles'}`;
    return this.http.get(urls);
  }

  //de la api cogemos la cantidad transito hay en mantenimiento
  getTRmantenimiento(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/trmantenimiento'}`;
    return this.http.get(urls);
  }

  //de la api cogemos la cantidad de embarcaciones hay
  getCantidadEmb(): Observable<any> {
    const urls = `${this.apiUrl}${'embarcacion/cantidad'}`;
    return this.http.get(urls);
  }

  //de la api cogemos el pais con mas embarcaciones
  getPaisConMas(): Observable<any> {
    const urls = `${this.apiUrl}${'embarcacion/pais'}`;
    return this.http.get(urls);
  }

  //de la api cogemos el tipo comun de embarcaciones
  getEmbcomun(): Observable<any> {
    const urls = `${this.apiUrl}${'embarcacion/tipocomun'}`;
    return this.http.get(urls);
  }

  //de la api cogemos la estancia media de plazas base
  getEstancia(): Observable<any> {
    const urls = `${this.apiUrl}${'plazaBase/estancia'}`;
    return this.http.get(urls);
  }

  //de la api cogemos la estancia media de transitos
  getEstancia2(): Observable<any> {
    const urls = `${this.apiUrl}${'transito/estancia'}`;
    return this.http.get(urls);
  }

  //de la api cogemos la ocupacion de los amarres
  getDatosOcu(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/datosOcu'}`;
    return this.http.get(urls);
  }

  //de la api cogemos los tipos de embarcaciones
  getTiposEmbarcaciones(): Observable<any> {
    const urls = `${this.apiUrl}${'embarcacion/tipos'}`;
    return this.http.get(urls);
  }

  //obtiene los transitos para mostrar en guardia civil
  getGuardiaCivil(): Observable<any> {
    const urls = `${this.apiUrl}${'transito/guardia'}`;
    return this.http.get(urls);
  }

  //de la api cogemos los tipos de embarcaciones
  getTablaPB(): Observable<any> {
    const urls = `${this.apiUrl}${'plazaBase/paratabla'}`;
    return this.http.get(urls);
  }
  getTablaTransito(): Observable<any> {
    const urls = `${this.apiUrl}${'transito/paratabla'}`;
    return this.http.get(urls);
  }
  getTablaTransitoGuardia(): Observable<any> {
    const urls = `${this.apiUrl}${'transito/paratablaGuardia'}`;
    return this.http.get(urls);
  }

  getEmbarcaciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}embarcacion`);
  }

  getTitularEmbarcacion(embarcacionId: number): Observable<any[]> {
    const url = `${this.apiUrl}embarcacion/${embarcacionId}/titular`;

    return this.http.get<any>(url);
  }

  postAdministrativoAmarre(id: any, data: any): Observable<any> {
    const url = `${this.apiUrl}plazaBase/${id}/administrativoyAmarre`;
 
    return this.http.post(url, data);
  }

  postAlquiler(id: any, data: any): Observable<any> {
    const url = `${this.apiUrl}plazaBase/alquiler/${id}`;

    return this.http.post(url, data);
  }

  putDisponibleOcupado(id: any, data?: any): Observable<any> {
    const url = `${this.apiUrl}plaza/${id}/actualizaEstadoOcupado`;

    return this.http.put(url, data);
  }

  putEli(id: any, data?: any): Observable<any> {
    const url = `${this.apiUrl}plazaBase/${id}/eli`;
      return this.http.put(url, data);
  }

  putOcupadoDisponible(id: any, data?: any): Observable<any> {
    const url = `${this.apiUrl}plaza/${id}/actualizaEstadoDisponible`;

    return this.http.put(url, data);
  }

  putActuaFin(id: any, data: any): Observable<any> {
    const url = `${this.apiUrl}plazaBase/${id}/actuFin`;

    return this.http.put(url, data);
  }

  getInstalaciones(): Observable<any[]> {
    const url = `${this.apiUrl}instalacion`;

    return this.http.get<any[]>(url);
  }

  getPantalanes(instalacionId: number): Observable<any> {
    const url = `${this.apiUrl}instalacion/${instalacionId}/pantalanes`;

    return this.http.get<any>(url);
  }

  getAmarres(pantalanId: number): Observable<any> {
    const url = `${this.apiUrl}pantalan/${pantalanId}/amarres`;
   
    return this.http.get<any>(url);
  }

  getAmarresTransito(pantalanId: number): Observable<any> {
    const url = `${this.apiUrl}pantalan/${pantalanId}/amarrestr`;

    return this.http.get<any>(url);
  }

  getPlazas(): Observable<any> {
    const url = `${this.apiUrl}${'plaza/disponibles'}`;
    return this.http.get(url);
  }

  leidoCreate(data: any): Observable<any> {
    const url = `${this.apiUrl}${'guardiaCivil/leido'}`;
    return this.http
      .get(url, data)
      .pipe(
        tap((response) => console.log('Respuesta del servicio:', response))
      );
  }

  getAll(entity: string): Observable<any> {
    const url = `${this.apiUrl}${entity}`;
    return this.http.get(url);
  }

  // Método que realiza una petición GET a la API para obtener un recurso específico.
  // Recibe como parámetro el nombre de la entidad ("entity") y los datos a enviar en la petición.
  add(entity: string, data: any): Observable<any> {
    // URL a la API a la que se realizará la petición cone el nombre de la entidad.
    const url = `${this.apiUrl}${entity}`;
    console.log(url, data);
    // Se realiza la petición POST a la API con la URL y los datos a enviar.
    return this.http
      .post(url, data)
      .pipe(
        tap((response) => console.log('Respuesta del servicio:', response))
      ); // Se utiliza el operador pipe para encadenar operadores. En este caso, se utiliza el operador tap para imprimir en consola la respuesta del servicio.
  }

  addPhoto(entity: string, data: FormData): Observable<any> {
    const url = `${this.apiUrl}${entity}`;
    console.log(url, data);
    return this.http
      .post(url, data)
      .pipe(
        tap((response) => console.log('Respuesta del servicio:', response))
      );
  }

  updatePhoto(embarcacionId: number, formData: FormData): Observable<any> {
    const url = `${this.apiUrl}embarcacion/${embarcacionId}/update-photo`;
    return this.http.put(url, formData).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        throw error;
      })
    );
  }

  //coge los tripulantes en base a la id
  getAllTripulante(): Observable<any> {
    this.sharedDataService.getData('transitoSeleccionada').subscribe((data) => {
      this.transitoId = data.id;
    });

    const url = `${this.apiUrl}tripulante/transito/${this.transitoId}>`;
    console.log(url);
    return this.http.get(url);
  }

  addTripulante(data: any, idTransito: any): Observable<any> {
    // URL a la API a la que se realizará la petición cone el nombre de la entidad.
    const url = `${this.apiUrl}tripulante/añadir`;
    const requestData = { ...data, idTransito };
    console.log(url, data);
    // Se realiza la petición POST a la API con la URL y los datos a enviar.
    return this.http
      .post(url, requestData)
      .pipe(
        tap((response) => console.log('Respuesta del servicio:', response))
      ); // Se utiliza el operador pipe para encadenar operadores. En este caso, se utiliza el operador tap para imprimir en consola la respuesta del servicio.
  }

  // postAlquiler(id: any, data: any): Observable<any> {
  //   const url = `${this.apiUrl}/plazaBase/alquiler/${id}`;
  //   console.log(url);
  //   return this.http.post(url, data);
  // }

  //con los datos que se envia se crea un nuevo transito
  crearTransito(data: any): Observable<any> {
    const url = `${this.apiUrl}transito/crear`;

    console.log(url, data);
    return this.http.post(url, data);
  }

  //me consigue la id en funcion del amarre
  idTransito(id: any): Observable<any> {
    const url = `${this.apiUrl}transito/traer/${id}`;

    return this.http.get(url);
  }

  cambiarEstado(id: any, data: any): Observable<any> {
    // URL a la API a la que se realizará la petición
    const url = `${this.apiUrl}transito/${id}/cambiar-estado`;

    // Realiza la petición PUT a la API con la URL y los datos a enviar
    return this.http.put(url, data);
  }

  // update(id: any, entity: string, data: any): Observable<any> {
  //   // if (!data.Imagen) {
  //   //   data.Imagen = []; // Establecer como un array vacío si no hay imagen seleccionada
  //   // }

  //   const url = `${this.apiUrl}${entity}/${id}`;
  //   console.log('URL:', url);
  //   console.log('Datos de la embarcación a enviar desde service:', data);
  //   console.log('Img:', data.Imagen);

  //   console.log('Img type:', typeof data.Imagen);

  // Método que realiza una petición PUT a la API para actualizar un recurso específico.
  // Recibe como parámetro el ID del recurso a actualizar, el nombre de la entidad ("entity") y los datos a enviar en la petición.
  // Por coherencía, debería estar ordenado así: entity, id, data. A tener en cuenta al refactorizar.
  update(id: any, entity: string, data: any): Observable<any> {
    // Se define el boundary que se utilizará en el encabezado de la petición. Lo fuerzo
    // ya que la actualización de imagenes da problemas con el boundary por defecto.
    const boundary = '----WebKitFormBoundaryCPvD7XF6kal2o4y9'; // Usar el mismo boundary que en el segundo encabezado
    // Se definen los encabezados de la petición
    const headers = new HttpHeaders({
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
      enctype: 'multipart/form-data',
    });
    // URL a la API a la que se realizará la petición con el nombre de la entidad y el ID del recurso.
    const url = `${this.apiUrl}${entity}/${id}`;
    console.log(url + data);

    // Se realiza la petición PUT a la API con la URL y los datos a enviar.
    return this.http.put(url, data);
  }

  updateTransito(id: any, data: any): Observable<any> {
    // URL a la API a la que se realizará la petición con el nombre de la entidad y el ID del recurso.
    const url = `${this.apiUrl}transito/update/${id}`;
    console.log(url);
    // Se realiza la petición PUT a la API con la URL y los datos a enviar.
    return this.http.put(url, data);
  }

  delete(id: any, entity: string): Observable<any> {
    // URL a la API a la que se realizará la petición con el nombre de la entidad y el ID del recurso.
    const url = `${this.apiUrl}${entity}/${id}`;
    // Se realiza la petición DELETE a la API con la URL.
    return this.http.delete(url);
  }
  deleteEntityWithCause(
    id: any,
    entity: string,
    causa?: string
  ): Observable<any> {
    // URL a la API para eliminar el recurso específico
    const url = `${this.apiUrl}${entity}/${id}`;

    // Opciones de la solicitud HTTP
    let options = {};
    // Si se proporciona una causa, se agrega como un parámetro en el cuerpo de la solicitud
    if (causa) {
      options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: { causa: causa }, // Agregar la causa al cuerpo de la solicitud
      };
    }

    // Se realiza la petición DELETE a la API con la URL y las opciones
    return this.http.delete(url, options);
  }

  deleteCrew(id: any) {
    const url = `${this.apiUrl}borrar/tripulante/${id}`;
    return this.http.delete(url);
  }
}
