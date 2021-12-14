import { Component, Input } from '@angular/core';
import { Recipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
})
export class ReceipeDetailComponent {
  @Input() receipe: Recipe;
}
