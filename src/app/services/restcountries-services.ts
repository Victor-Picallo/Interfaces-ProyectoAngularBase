import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root',
})
export class RestcountriesServices {
  httpClient = inject(HttpClient);
  getAll(name:String){
    const URL = `https://restcountries.com/v3.1/name/${name}`;
    //ESTO ES UN OBSERVABLE
    return this.httpClient.get<Country[]>(URL);
  }
}
