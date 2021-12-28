import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
})
export class ReceipeEditComponent {
  constructor(private route: ActivatedRoute) {}
  id: number;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }
}
