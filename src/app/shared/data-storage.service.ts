import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../receipes/receipe.model';
import { ReceipeService } from '../receipes/receipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private receipeService: ReceipeService
  ) {}

  storeReceipes() {
    const receipe = this.receipeService.getReceipes();
    this.http
      .put(
        'https://ng-complete-guide-a57f0-default-rtdb.firebaseio.com/receipe.json',
        receipe
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchReceipes() {
    this.http
      .get<Recipe[]>(
        'https://ng-complete-guide-a57f0-default-rtdb.firebaseio.com/receipe.json'
      )
      .subscribe((receipes) => {
        this.receipeService.setReceipes(receipes);
      });
  }
}
