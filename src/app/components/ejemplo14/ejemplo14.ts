import { Component } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejemplo14',
  imports: [CommonModule],
  templateUrl: './ejemplo14.html',
  styleUrl: './ejemplo14.css',
})
export class Ejemplo14 {

  personajes: Character[] = [];

  //Forma antigua
  constructor(private rickandmortyService: RickandmortyService) {
    //Acceder a la API de Rick & Morty para leer todos los personajes
    console.log(rickandmortyService.getAll().subscribe(personajes => {
      console.log(personajes)
      this.personajes = personajes.results as Character[];
    })
  )
  }

}
