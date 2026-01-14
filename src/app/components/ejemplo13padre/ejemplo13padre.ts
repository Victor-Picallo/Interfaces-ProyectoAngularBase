import { Component } from '@angular/core';
import { Ejemplo13hijo } from '../ejemplo13hijo/ejemplo13hijo';

@Component({
  selector: 'app-ejemplo13padre',
  imports: [Ejemplo13hijo],
  templateUrl: './ejemplo13padre.html',
  styleUrl: './ejemplo13padre.css',
})
export class Ejemplo13padre {
  mensaje = '';
  entregarDinero(cantidad: Number) {
    
    this.mensaje = 'Toma hijo. Te doy: ' + cantidad + ' euros.';
  }

}
