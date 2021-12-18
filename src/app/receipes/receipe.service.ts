import { EventEmitter } from "@angular/core";
import { Recipe } from "./receipe.model";

export class ReceipeService{

  receipeSelected = new EventEmitter<Recipe>();
  
  private receipes: Recipe[] = [
    new Recipe(
      'A Test Receipe',
      'Test Description',
      'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_08/1678882/steak-recipe-jc-210223.jpg'
    ),
    new Recipe(
      'Another Test Receipe',
      'Test Description',
      'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_08/1678882/steak-recipe-jc-210223.jpg'
    ),
  ];

  getReceipes(){
    return this.receipes.slice();
  }
}