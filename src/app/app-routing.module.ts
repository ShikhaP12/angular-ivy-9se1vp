import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ReceipeDetailComponent } from './receipes/receipe-detail/receipe-detail.component';
import { ReceipeEditComponent } from './receipes/receipe-edit/receipe-edit.component';
import { ReceipeResolverService } from './receipes/receipe-resolver.service';
import { ReceipeStartComponent } from './receipes/receipe-start/receipe-start.component';
import { ReceipeComponent } from './receipes/receipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/receipes', pathMatch: 'full' },
  {
    path: 'receipes',
    component: ReceipeComponent,
    children: [
      { path: '', component: ReceipeStartComponent },
      { path: 'new', component: ReceipeEditComponent },
      {
        path: ':id',
        component: ReceipeDetailComponent,
        resolve: [ReceipeResolverService],
      },
      {
        path: ':id/edit',
        component: ReceipeEditComponent,
        resolve: [ReceipeResolverService],
      },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
