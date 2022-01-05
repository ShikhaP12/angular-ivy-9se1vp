import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
  styleUrls: ['./receipe-edit.component.css'],
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
    let receipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.receipeService.getReceipe(this.id);
      receipeName = recipe.name;
      receipeImgPath = recipe.imagePath;
      receipeDescription = recipe.description;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          receipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(
                ingredient.amount,
                Validators.required,
                Validators.pattern['^[1-9]+[0-9]*$']
              ),
            })
          );
        }
      }
    }
    this.receipeForm = new FormGroup({
      name: new FormControl(receipeName, Validators.required),
      imagePath: new FormControl(receipeImgPath, Validators.required),
      description: new FormControl(receipeDescription, Validators.required),
      ingredients: receipeIngredients,
    });
  }

  get controls() {
    return (<FormArray>this.receipeForm.get('ingredients')).controls;
  }
  onSubmit() {
    console.log(this.receipeForm);
  }

  onAddIngredient() {
    (<FormArray>this.receipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(
          null,
          Validators.required,
          Validators.pattern['^[1-9]+[0-9]*$']
        ),
      })
    );
  }
}
