import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {NewitemComponent} from "./newitem/newitem.component";

const routes: Routes = [
  {path: "", redirectTo: "/items", pathMatch:"full"},
  {path: "items", component: ListComponent },
  {path: "newitem", component: NewitemComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
