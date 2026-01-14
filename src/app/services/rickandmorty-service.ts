import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


interface Character {
  name: string;
  status: string;
  species: string;
  image: string;
  // Otros campos relevantes pueden ser añadidos aquí
}

interface Characters {
  results: Character[];
  // Otros campos relevantes pueden ser añadidos aquí
}

@Injectable({
  providedIn: 'root',
})
export class RickandmortyService {
  /* Forma antigua
  constructor(private httpClient: HttpClient) {
  } */
  //Forma moderna
  httpClient = inject(HttpClient);
  getAll(){
    const URL = 'https://rickandmortyapi.com/api/character';
    //ESTO ES UN OBSERVABLE
    return this.httpClient.get<Characters>(URL);
  }
  //...
}
