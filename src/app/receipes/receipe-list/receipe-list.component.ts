import { Component, OnInit } from '@angular/core';
import { Recipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
})
export class ReceipeListComponent implements OnInit {
  receipes: Recipe[] = [
    new Recipe(
      'A Test Receipe',
      'Test Description',
      'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_08/1678882/steak-recipe-jc-210223.jpg'
    ),
  ];

  constructor() {}
  ngOnInit() {}
}
