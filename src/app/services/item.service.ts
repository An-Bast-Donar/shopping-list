import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';

/*  Servicio que en Angular sirve para aceder a la informacion de forma general
 */
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  //Apunta al puerto establecido en el server.js y aparentemente a la variable ¿items?
  url:string = 'http://localhost:3000/items';
  //nuevo objeto
  httpOptions = {
    headers:{
      'Content-Type':'application/json'
    }
  };
  items:Item[] = [
    {
      id: 0,
      title:'manzana',
      price: 10.5,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title:'galletas',
      price: 28,
      quantity: 2,
      completed: false
    },
    {
      id: 2,
      title:'carpeta',
      price: 30,
      quantity: 1,
      completed: true
    },
    {
      id: 3,
      title:'camiseta',
      price: 123,
      quantity: 1,
      completed: true
    }
    ];

  constructor(private http:HttpClient) { }

  /*  Funcion que va a regresar nuestro arreglo inicial
      (FUNCIONAL EN UNA PARTE DEL TUTORIAL, PUESTO QUE REGRESABAMOS EL ITEMS DE ESTA MISMA CLASE)
  getItems(){
    return this.items;
  }
  */

  /*  En ves de definir los datos, como se hacia con la funcion pasada, vamos a mandar a llamarlos
   *  Para esto se transforma la funcion a una funcion Observable
   *  Y el dato que obsevamos es un arreglo de tipo Item
   */
  getItems():Observable<Item[]>{
    //Hacemos una solicitud get con tipo de dato Item[] de la variable http para obtener todos los elementos
    return this.http.get<Item[]>(this.url);
  }

  addItem(item:Item):Observable<Item>{
    //Funcion que agrega elemento al inicio del arreglo de items
    //this.items.unshift(item);

    //enviamos un item al servidor. url a donde enviar, objeto a enviar, header
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }

  toggleItem(item:Item):Observable<Item>{
    //modificamos un objeto
    return this.http.put<Item>(this.url +'/'+item.id, item, this.httpOptions);
  }

  deleteItem(item:Item):Observable<Item>{
    //eliminamos un objeto
    return this.http.delete<Item>(this.url +'/'+ item.id);
  }
}
