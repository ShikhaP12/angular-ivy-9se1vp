import { Component } from '@angular/core';
import { Recipe } from './receipe.model';
import { ReceipeService } from './receipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  //providers: [ReceipeService],
})
export class ReceipeComponent {
  selectedReceipe: Recipe;

  constructor(private receipeService: ReceipeService) {}

  ngOnInit() {
    this.receipeService.receipeSelected.subscribe((receipe: Recipe) => {
      this.selectedReceipe = receipe;
    });
  }
}
