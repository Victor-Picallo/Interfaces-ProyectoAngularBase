import { CommonModule } from '@angular/common';
import { RestcountriesServices } from '../../services/restcountries-services';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ejercicio03',
  imports: [CommonModule, FormsModule,MatButtonModule ],
  templateUrl: './ejercicio03.html',
  styleUrl: './ejercicio03.css',
})
export class Ejercicio03 {

  readonly restcountriesService = inject(RestcountriesServices);

  //OBSERVABLE
  paises$ = this.restcountriesService.getAll('spain')
  buscar = ''

  buscarPaises() {
    if (!this.buscar.trim()) {
      this.paises$ = this.restcountriesService.getAll('spain');
      return;
    }
    this.paises$ = this.restcountriesService.getAll(this.buscar.trim());
  }
}
