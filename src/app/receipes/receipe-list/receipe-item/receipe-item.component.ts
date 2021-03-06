import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../receipe.model';
//import { ReceipeService } from '../../receipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
})
export class ReceipeItemComponent {
  @Input() receipe: Recipe;
  //@Output() receipeSelected = new EventEmitter<void>();

  //constructor(private receipeService: ReceipeService) {}

  //onSelected() {
  //this.receipeSelected.emit();
  //this.receipeService.receipeSelected.emit(this.receipe);
  //}

  @Input() index : number;
}
