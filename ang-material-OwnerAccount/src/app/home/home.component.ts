import { Component, OnInit } from '@angular/core';
export interface Tile {
  text: string;
  border: string;
 }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tiles: Tile[] = [
    {text: 'Foam',border: '3px double purple'},
    {text: 'Adhesives' ,border: '3px double purple'},
    {text: 'Film' ,border: '3px double purple'},
    {text: 'Rubber Sheet',border: '3px double purple'},
    ];
  public executeSelectedChange = (event) => {
    console.log(event);
  }
}
