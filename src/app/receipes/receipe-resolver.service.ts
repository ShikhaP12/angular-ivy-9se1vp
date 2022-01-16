import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './receipe.model';
import { ReceipeService } from './receipe.service';

@Injectable({ providedIn: 'root' })
export class ReceipeResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private receipeService: ReceipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const receipes = this.receipeService.getReceipes();

    if (receipes.length === 0) {
      return this.dataStorageService.fetchReceipes();
    } else {
      return receipes;
    }
  }
}
