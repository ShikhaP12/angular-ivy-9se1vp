import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
})
export class ReceipeListComponent implements OnInit, OnDestroy {
  receipes: Recipe[];
  subscription: Subscription;

  constructor(
    private receipeService: ReceipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.subscription = this.receipeService.receipeChanged.subscribe(
      (receipes: Recipe[]) => {
        this.receipes = receipes;
      }
    );
    this.receipes = this.receipeService.getReceipes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onNewReceipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
