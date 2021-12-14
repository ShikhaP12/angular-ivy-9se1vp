import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
})
export class ReceipeItemComponent implements OnInit {
  @Input() receipe: Recipe;

  constructor() {}
  ngOnInit() {}
}
