import { Component, OnInit } from '@angular/core';
import {Item} from '../../_modelo/item';
import { MockItemsService } from '../_services/mock-items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items:Item[];
  //service: MockItemsService;

  constructor(private service:MockItemsService) { 
    //this.service = new MockItemsService();
    this.service.getItems().subscribe(serviceitems => { //LLama funcion getimes en mock
      console.log(serviceitems);
      this.items = serviceitems;
    });
    
  }

  ngOnInit() {
  }

  
  onRemove(item: Item) {
    this.service.remove(item).subscribe( //LLama funcion remove en mock, subscribe espera la respuesta y despues actualiza
      serviceitems => {
        console.log(" Borrar desde Servicio "+serviceitems);
        this.items = serviceitems;
      });
  }
}
