import { EventEmitter } from "@angular/core";
import { ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";


export class ShoppingListService {

    ingredientsChanged =new Subject<ingredient[]>()
    ingredientEmitEvent = new Subject<ingredient[]>()
    startedEditing = new Subject<number>()


    ingredients:ingredient[] = [
        new ingredient('Apples', 5),
        new ingredient('Oranges', 6)
    ];

    getIngredient(index:number) {
        return this.ingredients[index]
    }

    getIngredientsService() {
        return this.ingredients.slice()
    }

    addIngredientService(ingredientadd: ingredient) {
        this.ingredients.push(ingredientadd)
        this.ingredientEmitEvent.next(this.ingredients.slice())
    }

    addIngredients(ingredients:ingredient[]) {
       this.ingredients.push(...ingredients)
       this.ingredientsChanged.next(this.ingredients.slice())

    }

    updateIngredient(index: number, newIngredient: ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientEmitEvent.next(this.ingredients.slice())
    }

    deleteIngredient(index:number) {
        this.ingredients.splice(index, 1)
        this.ingredientEmitEvent.next(this.ingredients.slice())
    }

}