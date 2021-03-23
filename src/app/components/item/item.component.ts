import { Component, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  /*  propìedad de entrada. hacerle saber al componente que recibira un objeto.
   *  objeto item de tipo Item, inicializado.
   */
  @Input() item: Item = new Item();

  /*  propìedad de salida. hacerle saber al componente que envia un objeto.
   *  la propieda por la que se envia el objeto se llama deteleItem.
   *  es una propiedad de tipo de dato EventEmiter 
   *  (que es el tipo de dato para propiedades personalisadas, no nativas del componente)
   *  y el tipo de dato que encapsula esta propiedad es de tipo Item especificada entre los corchetes <...>
   *  y lo inicializamos.
   */
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item:Item){
    //La propiedad empieza a emitir el objeto item
    this.deleteItem.emit(item);
  }
  onToggle(item:Item){
    item.completed = !item.completed;
    this.toggleItem.emit(item);
  }

}
