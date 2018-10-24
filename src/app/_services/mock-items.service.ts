import { Injectable } from '@angular/core';
import {AbstractItemsService} from "./abstract-items.service" //extends AbstractItemsService;
import { Observable } from 'rxjs';
import { Item } from 'src/_modelo/item';

@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService {

  items:Item[];

  constructor() {
    super();
    this.items = [
      new Item("Item1"),
      new Item("Item2"),
      new Item("Item3"),
    ];
   }

  //Para ejecutar cosas asincronas
  getItems():Observable<Item[]>{
    return new Observable((observable) => {
      observable.next(this.items);
      observable.complete();
      
    });
  }

  //Recibe item para remover, cuando termine envia respuesta
  remove(item:Item):Observable<Item[]>{ 
    return new Observable((observable) => {
      this.items = this.items.filter(it => it !== item ); //Muestra los items excepto el recibido
      observable.next(this.items);
      observable.complete();
    }); 
  }

  addItem(item:Item):Observable<Item[]>{ 
    return new Observable((observable) => {
      this.items.push(item); //push item
      observable.next(this.items);
      observable.complete();
    });
  }
}
