import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ReceipeComponent } from './receipes/receipes.component';
import { ReceipeDetailComponent } from './receipes/receipe-detail/receipe-detail.component';
import { ReceipeListComponent } from './receipes/receipe-list/receipe-list.component';
import { ReceipeItemComponent } from './receipes/receipe-list/receipe-item/receipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CommonModule } from '@angular/common';
import { DropDownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    ReceipeComponent,
    ReceipeDetailComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective,
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
