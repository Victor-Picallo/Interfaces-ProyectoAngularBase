import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuspares',
})
export class MayusparesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    //Angel -> AnGeL
    let letras = value.split('');
    let arrayLetras = letras.map((letra, index) => index%2===0? letra.toUpperCase(): letra.toLowerCase());
    return arrayLetras.join(''); 
  }

}
