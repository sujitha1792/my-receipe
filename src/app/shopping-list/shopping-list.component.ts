import { Component } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
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

}
