import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './receipe.model';

export class ReceipeService {
  receipeSelected = new EventEmitter<Recipe>();

  private receipes: Recipe[] = [
    new Recipe(
      'One Large Pizza',
      'Awesome Pizza',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJs324suRqRoj8-V4Q850HemlkThtRjYd8w&usqp=CAU',
      [new Ingredient('cheese', 5), new Ingredient('toppings', 10)]
    ),
    new Recipe(
      'Big Fat Burger',
      'Awesome Burger',
      'https://static.toiimg.com/photo/79811787.cms',
      [new Ingredient('Buns', 2), new Ingredient('Cheese Slice', 4)]
    ),
  ];

  getReceipes() {
    return this.receipes.slice();
  }

  getReceipe(index: number) {
    return this.receipes[index];
  }

  addReceipe(receipe: Recipe) {
    this.receipes.push(receipe);
  }
  updateReceipe(index: number, newReceipe: Recipe) {
    this.receipes[index] = newReceipe;
  }
}
