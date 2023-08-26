import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceipeListComponent } from './receipe/receipe-list/receipe-list.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { ReceipeDetailComponent } from './receipe/receipe-detail/receipe-detail.component';
import { ReceipeItemComponent } from './receipe/receipe-list/receipe-item/receipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ReceipeStartComponent } from './receipe-start/receipe-start.component';
import { ReceipeEditComponent } from './receipe/receipe-edit/receipe-edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ReceipeListService } from './receipe/receipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipeListComponent,
    ReceipeComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ReceipeStartComponent,
    ReceipeEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShoppingListService, ReceipeListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
