import {
  Component,
  ElementRef,
  EventEmitter,
  ViewChild,
  Output,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent implements OnDestroy {
  //@ViewChild('nameInput') nameInputRef: ElementRef;
  //@ViewChild('amountInput') nameAmountRef: ElementRef;

  //@Output() ingredientAdded = new EventEmitter<Ingredient>();
  subscription: Subscription;
  constructor(private slService: ShoppingListService) {}

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe();
  }
  onAddItem(form: NgForm) {
    //const ingName = this.nameInputRef.nativeElement.value;
    //const ingAmount = this.nameAmountRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    //this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }
}
