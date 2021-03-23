import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  id:number = 0;
  title:string = '';
  price:number = 0;
  quantity:number = 0;

  //Inyectamos la variable de tipo ItemService y la variable de tipo Router
  constructor(private itemService:ItemService, private router:Router) { }

  ngOnInit(): void {
  }

  //Creamos un nuevo elemento basado en nuestro objeto item con los datos que recojimos del formulario
  onSubmit(){
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    //this.itemService.addItem(item);
    //Esto si no lo entendi muy bien entonces estudiarlo mejor
    this.itemService.addItem(item).subscribe(i =>{
      //le decimos al ruteador que nos regrese a la pagina inicial
      this.router.navigate(['/']);
    });
  }
}
