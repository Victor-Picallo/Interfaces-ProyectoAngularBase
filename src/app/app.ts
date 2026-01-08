import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejemplo0 } from "./components/ejemplo0/ejemplo0";
import { Ejemplo1 } from "./components/ejemplo1/ejemplo1";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ejemplo0, Ejemplo1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('teoriaAngularBase2026');
}
