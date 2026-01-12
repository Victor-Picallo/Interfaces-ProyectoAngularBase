import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MayusparesPipe } from '../../pipes/mayuspares-pipe';

@Component({
  selector: 'app-ejemplo10',
  imports: [DatePipe, UpperCasePipe, MayusparesPipe],
  templateUrl: './ejemplo10.html',
  styleUrl: './ejemplo10.css',
})
export class Ejemplo10 {
  hoy = new Date();
  nombre = 'Victor';
}
