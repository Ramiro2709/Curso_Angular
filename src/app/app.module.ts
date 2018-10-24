import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; //Router
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NewitemComponent } from './newitem/newitem.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MockItemsService} from "./_services/mock-items.service";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    MockItemsService, /////////
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
