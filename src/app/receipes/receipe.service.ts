import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './receipe.model';

@Injectable()
export class ReceipeService {
  receipeSelected = new EventEmitter<Recipe>();

  receipeChanged = new Subject<Recipe[]>();

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

  constructor(private slService: ShoppingListService) {}

  setReceipes(receipe: Recipe[]) {
    this.receipes = receipe;
    this.receipeChanged.next(this.receipes.slice());
  }

  getReceipes() {
    return this.receipes.slice();
  }

  getReceipe(index: number) {
    return this.receipes[index];
  }

  addReceipe(receipe: Recipe) {
    this.receipes.push(receipe);
    this.receipeChanged.next(this.receipes.slice());
  }
  updateReceipe(index: number, newReceipe: Recipe) {
    this.receipes[index] = newReceipe;
    this.receipeChanged.next(this.receipes.slice());
  }
  deleteReceipe(index: number) {
    this.receipes.splice(index, 1);
    this.receipeChanged.next(this.receipes.slice());
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
