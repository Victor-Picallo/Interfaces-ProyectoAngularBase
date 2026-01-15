import { Component, output} from '@angular/core';

@Component({
  selector: 'app-ejemplo13hijo',
  imports: [],
  templateUrl: './ejemplo13hijo.html',
  styleUrl: './ejemplo13hijo.css',
})
export class Ejemplo13hijo {
  //Forma antigua
  /* @Output() pedirDinero = new EventEmitter(); */
  //Forma nueva con signals
  pedirDinero = output<Number>();

  solicitudDineroPapa(cantidad: Number) {
    this.pedirDinero.emit(cantidad);
  }


}
