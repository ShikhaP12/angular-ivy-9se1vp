import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
})
export class ReceipeEditComponent {
  constructor(
    private route: ActivatedRoute,
    private receipeService: ReceipeService
  ) {}

  id: number;
  editMode = false;
  receipeForm: FormGroup;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let receipeName = '';
    let receipeImgPath = '';
    let receipeDescription = '';

    if (this.editMode) {
      const recipe = this.receipeService.getReceipe(this.id);
      receipeName = recipe.name;
      receipeImgPath = recipe.imagePath;
      receipeDescription = recipe.description;
    }
    this.receipeForm = new FormGroup({
      name: new FormControl(receipeName),
      imagePath: new FormControl(receipeImgPath),
      description: new FormControl(receipeDescription),
    });
  }
}
