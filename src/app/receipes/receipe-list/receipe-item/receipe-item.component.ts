import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
})
export class ReceipeItemComponent implements OnInit {
  @Input() receipe: Recipe;
  @Output() receipeSelected = new EventEmitter<void>();
  constructor() {}
  ngOnInit() {}

  onSelected() {
    this.receipeSelected.emit();
  }
}
