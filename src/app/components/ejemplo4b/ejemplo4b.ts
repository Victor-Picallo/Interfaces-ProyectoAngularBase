import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo4b',
  imports: [],
  templateUrl: './ejemplo4b.html',
  styleUrl: './ejemplo4b.css',
})
export class Ejemplo4b {
  numero = 0;
  Incrementar() {
    this.numero++;
  }
  Decrementar() {
    this.numero--;
  }
  isOdd() {
    return this.numero%2 !== 0;
  }
  isEven() {
    return this.numero%2 === 0;
  }
}
