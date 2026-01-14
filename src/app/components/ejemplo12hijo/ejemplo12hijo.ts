import { Component, input} from '@angular/core';

@Component({
  selector: 'app-ejemplo12-hijo',
  imports: [],
  templateUrl: './ejemplo12hijo.html',
  styleUrl: './ejemplo12hijo.css',
})
export class Ejemplo12Hijo {
  //Forma antigua
  //@Input() nombre = ''
  //Forma moderna -> signal
  nombre = input.required();
  color = input('red');
}
