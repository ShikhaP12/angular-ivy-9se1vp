import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Recipe } from '../../receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
})
export class ReceipeItemComponent {
  @Input() receipe : Recipe;
  @Output() receipeSelected = new EventEmitter<void>();
  onSelected(){
    this.receipeSelected.emit();
  }
}
