import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
})
export class ReceipeDetailComponent {
  receipe: Recipe;
  id: number;

  constructor(
    private receipeService: ReceipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //const id= this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.receipe = this.receipeService.getReceipe(this.id);
    });
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
