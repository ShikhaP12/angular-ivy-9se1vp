import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ReceipeComponent } from './receipes/receipes.component';
import { ReceipeDetailComponent } from './receipes/receipe-detail/receipe-detail.component';
import { ReceipeListComponent } from './receipes/receipe-list/receipe-list.component';
import { ReceipeItemComponent } from './receipes/receipe-list/receipe-item/receipe-item.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    ReceipeComponent,
    ReceipeDetailComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
