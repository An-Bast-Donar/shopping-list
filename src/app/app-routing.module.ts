import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { AdditemComponent } from './components/additem/additem.component';

/*  Archivo para definir ruta.
 *  Osea al darle click a un hipervinculo nos lleve a otra ruta y que cargue la vista de esa ruta.
 */

// Aca especificamos las rutas, ¿a donde me redirecciona cada click del header.component.html?
const routes: Routes = [
  {
    path:'',
    component: ItemsComponent
  },
  {
    path:'add',
    component: AdditemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
