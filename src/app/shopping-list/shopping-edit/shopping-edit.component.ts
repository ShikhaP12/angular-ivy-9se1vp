import {
  Component,
  ElementRef,
  EventEmitter,
  ViewChild,
  Output,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') nameAmountRef: ElementRef;

  //@Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private slService: ShoppingListService) {}
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.nameAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    //this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }
}
