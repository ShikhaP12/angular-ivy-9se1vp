import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
})
export class ReceipeListComponent implements OnInit {
  //@Output() receipeWasSelected = new EventEmitter<Recipe>();

  receipes: Recipe[];

  //onReceipeSelected(receipe: Recipe) {
  //this.receipeWasSelected.emit(receipe);
  //}

  constructor(
    private receipeService: ReceipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.receipes = this.receipeService.getReceipes();
  }

  onNewReceipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
