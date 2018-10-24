import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import { Item } from 'src/_modelo/item';
import {MockItemsService} from "../_services/mock-items.service"; //////////////
import {Router} from "@angular/router";

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.css']
})
export class NewitemComponent implements OnInit {

  newItemForm : FormGroup;
  constructor(private builder: FormBuilder, 
              private service: MockItemsService,
              private router: Router,) {
    this.newItemForm = this.builder.group(new Item("")); 
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.newItemForm.value);
    this.service.addItem(this.newItemForm.value).subscribe(items => {
      this.router.navigateByUrl("/items");
    });
    this.router.navigateByUrl("/");
  }
}