import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListData {

  heros:any[]=["A","B","C","D"]

  getData()
  {
    return this.heros
  }
}