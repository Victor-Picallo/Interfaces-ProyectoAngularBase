import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo3b',
  imports: [CommonModule],
  templateUrl: './ejemplo3b.html',
  styleUrl: './ejemplo3b.css',
})
export class Ejemplo3b {
  profesb = ['Ana', 'Luis', 'Carlos', 'Marta', 'Sofía'];
  productos = [
    { nombre: 'Manzanas', precio: 1.2 },
    { nombre: 'Naranjas', precio: 0.8 },
    { nombre: 'Plátanos', precio: 1.5 },
    { nombre: 'Peras', precio: 1.0 },
  ];
  usuario = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
  }

}
