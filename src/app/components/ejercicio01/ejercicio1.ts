import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  imports: [],
  templateUrl: './ejercicio1.html',
  styleUrl: './ejercicio1.css',
})
export class Ejercicio1 {
  numeros = [23, 150, 67, 89, 200, 45, 102, 33, 76, 111];
  isOdd(numero:number) {
    return numero %2 !== 0
  }
}
