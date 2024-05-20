import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropcarrito',
  templateUrl: './dropcarrito.component.html',
  styleUrls: ['./dropcarrito.component.css']
})
export class DropcarritoComponent {
  @Input() datosSeleccionados: any[] = [];
}
