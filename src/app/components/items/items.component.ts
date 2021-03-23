import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  //Creamos un arreglo vacio llamado items de tipo Item
  items:Item[] = [];
  
  total:number = 0;

  //Inyectamos la variable de itemService que contiene la funcion para optener los items
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    //this.items = this.itemService.getItems();

    //Nos suscribimos al objeto observado que nos regresa la funcion y los datos los recibimos como se espesifica en los corchetes
    this.itemService.getItems().subscribe(data => {
      this.items = data;
      this.getTotal();
    })
    //Despues de crear los elementos llamo al getTotal
  }

  /*  Recibe el objeto desde el HTML y regresa a traves de la funcion filter
   *  todos los items que tengan un id diferente al id del item que recibe por parametro
   */
  deleteItem(item:Item){
    this.items = this.items.filter(x => x.id != item.id);
    this.itemService.deleteItem(item).subscribe();
    this.getTotal();
  }

  toggleItem(item:Item){
    this.itemService.toggleItem(item).subscribe(i => {});
    this.getTotal();
  }

  /*  Funcion que me regresa el valor del total
   *
   */
  getTotal(){
    // regresa todos los items que sean falsos, osea que no esten chequeados
    this.total = this.items.filter(x => !x.completed)
    // regresa una lista con la multiplicacion de cada item
                           .map(x => x.quantity * x.price)
    // regresa la sumatoria de toda la lista anterior
                           .reduce((acc, x) => acc += x,0);                     
  }
}
