import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListData {

  heros:any[]=["Iron Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
  "Hawkeye",
  "Spider-Man"]

  getData()
  {
    return this.heros
  }
}