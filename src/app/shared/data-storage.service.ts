import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
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
    return this.http
      .get<Recipe[]>(
        'https://ng-complete-guide-a57f0-default-rtdb.firebaseio.com/receipe.json'
      )
      .pipe(
        map((receipes) => {
          return receipes.map((receipe) => {
            return {
              ...receipe,
              ingredients: receipe.ingredients ? receipe.ingredients : [],
            };
          });
        }),
        tap((receipes) => {
          this.receipeService.setReceipes(receipes);
        })
      );
  }
}
