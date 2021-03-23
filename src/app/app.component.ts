import { Component } from '@angular/core';

/* DECORADOR: Meta datos que usa Angular en TypeScript para interpretar mas informacion.
 * (Comnetarios inteligentes, los ve Angular pero no el navegador)
 */
@Component({
  selector: 'app-root', //Ejemplo: Hace referencia a la etiqueta <app-root></app-root> del index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion de Compras';
}
