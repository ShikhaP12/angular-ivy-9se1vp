import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  private isChangeSub: Subscription;

  constructor(private slService: ShoppingListService) {}
  ngOnInit() {
    this.ingredients = this.slService.getIngreditent();
    this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
  
  //onIngredientAdded(ingredient: Ingredient) {
  //this.ingredients.push(ingredient);
  //}
}
