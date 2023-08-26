import { Component, OnDestroy, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: ingredient[]=[
    new ingredient('Apples', 5),
    new ingredient('Oranges', 6)
  ];

  ingredientAction(data:any) {
    console.log('data', data)
    switch(data.action) {
      case 'Add': this.ingredients.push(new ingredient(data.name, data.amount));
    }

  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredientsService()
    this.igChanged = this.shoppingListService.ingredientEmitEvent.subscribe((ingredient:ingredient[])=>{
      this.ingredients= ingredient
    })
  }

  ngOnDestroy(): void {
    this.igChanged.unsubscribe()
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index)
  }

  ingredients:ingredient[] = [];

  // getIngredient() {
    
  // }

  // ingredientAction(data:any) {

  //   switch(data.action) {
  //     case 'Add': this.ingredients.push(new ingredient(data.name, data.amount));
  //   }

  // }

}
