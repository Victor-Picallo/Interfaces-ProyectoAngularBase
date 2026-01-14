import { Component } from '@angular/core';
import { Ejemplo12Hijo } from "../ejemplo12hijo/ejemplo12hijo";

@Component({
  selector: 'app-ejemplo12-padre',
  imports: [Ejemplo12Hijo],
  templateUrl: './ejemplo12padre.html',
  styleUrl: './ejemplo12padre.css',
})
export class Ejemplo12Padre {

}
