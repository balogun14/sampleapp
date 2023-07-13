import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs:['isFavorite']
})
export class FavoriteComponent implements OnInit{
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(){}
isFavorite: boolean = false;
  

  onClick(){
    this.isFavorite = !this.isFavorite;
  }
}
  