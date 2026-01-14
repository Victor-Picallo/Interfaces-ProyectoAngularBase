import { Routes } from '@angular/router';
import { Ejemplo0 } from "./components/ejemplo0/ejemplo0";
import { Ejemplo1 } from "./components/ejemplo01/ejemplo1";
import { Ejemplo2 } from './components/ejemplo02/ejemplo2';
import { Ejemplo3 } from './components/ejemplo03/ejemplo3';
import { Ejemplo3b } from './components/ejemplo03b/ejemplo3b';
import { Ejemplo4b } from './components/ejemplo04b/ejemplo4b';
import { Ejemplo4 } from './components/ejemplo04/ejemplo4';
import { Ejemplo5 } from './components/ejemplo05/ejemplo5';
import { Ejemplo6 } from './components/ejemplo06/ejemplo6';
import { Ejemplo7 } from './components/ejemplo07/ejemplo7';
import { Ejemplo8 } from './components/ejemplo08/ejemplo8';
import { Ejemplo9 } from './components/ejemplo09/ejemplo9';
import { Ejemplo10 } from './components/ejemplo10/ejemplo10';
import { Ejercicio1 } from './components/ejercicio01/ejercicio1';
import { Ejemplo11 } from './components/ejemplo11/ejemplo11';
import { Ejemplo12Padre } from './components/ejemplo12padre/ejemplo12padre';
import { Ejemplo13padre } from './components/ejemplo13padre/ejemplo13padre';
import { Ejemplo12Hijo } from './components/ejemplo12hijo/ejemplo12hijo';
import { Ejemplo13hijo } from './components/ejemplo13hijo/ejemplo13hijo';
import { Ejemplo14 } from './components/ejemplo14/ejemplo14';

export const routes: Routes = [
    {path: 'ej0', component: Ejemplo0},
    {path: 'ej1', component: Ejemplo1},
    {path: 'ej2', component: Ejemplo2},
    {path: 'ej3', component: Ejemplo3},
    {path: 'ej3b', component: Ejemplo3b},
    {path: 'ej4', component: Ejemplo4},
    {path: 'ej4b', component: Ejemplo4b},
    {path: 'ej5', component: Ejemplo5},
    {path: 'ej6', component: Ejemplo6},
    {path: 'ej7', component: Ejemplo7},
    {path: 'ej8', component: Ejemplo8},
    {path: 'ej9', component: Ejemplo9},
    {path: 'ej10', component: Ejemplo10},
    {path: 'ej11', component: Ejemplo11},
    {path: 'ej12hijo', component: Ejemplo12Hijo},
    {path: 'ej12padre', component: Ejemplo12Padre},
    {path: 'ej13hijo', component: Ejemplo13hijo},
    {path: 'ej13padre', component: Ejemplo13padre},
    {path: 'ej14', component: Ejemplo14},
    {path: 'ejer1', component: Ejercicio1},
];