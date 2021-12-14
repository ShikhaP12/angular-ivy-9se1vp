import { Component } from '@angular/core';
import { Recipe } from './receipe.model';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
})
export class ReceipeComponent {
  selectedReceipe: Recipe;

  

}
