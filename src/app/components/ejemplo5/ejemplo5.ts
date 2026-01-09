import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo5',
  imports: [FormsModule],
  templateUrl: './ejemplo5.html',
  styleUrl: './ejemplo5.css',
})
export class Ejemplo5 {
  number = 0;

/*   constructor() {
    setInterval(() => {this.number++;}, 2000);
  } */

}
