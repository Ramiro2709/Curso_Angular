import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/_modelo/item';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractItemsService {

  constructor() { }

  abstract getItems():Observable<Item[]>;
}
