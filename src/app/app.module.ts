import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { TotalComponent } from './components/total/total.component';
import { AdditemComponent } from './components/additem/additem.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*  Archivo donde se maneja las integraciones o inyeciones de:
 *  - Servicion
 *  - Modulos (por el CMD se crean nuevos componentes y Angular los declara aca)
 *  - Otros componentes
 */

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ItemComponent,
    TotalComponent,
    AdditemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Especificamos que estamos trabajando con formularios para poder capturar la informacion del usuario
    FormsModule,
    //Especificamos que vamos a trabajar con Http
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
