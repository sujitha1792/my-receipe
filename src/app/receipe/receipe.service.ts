import { ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Receipe } from "./receipe.model";
import { EventEmitter, Injectable}  from '@angular/core'

@Injectable()
export class ReceipeListService {

    constructor(private slService: ShoppingListService) {

    }

    receipeEvent = new EventEmitter<Receipe>()

    private  receipes :Receipe[] = [
        new Receipe('Test receipe', 'receipe for test','https://ca-times.brightspotcdn.com/dims4/default/504d1b4/2147483647/strip/false/crop/5050x2841+0+152/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F83%2Fd3%2F17bd75ae42098a52bd325d155135%2Fla-photos-freelance-contract-801620-la-fo-week-of-meals-campbell-pasta-002.JPG', [
            new ingredient('Apples', 5),
            new ingredient('Oranges', 6)
        ]),
        new Receipe('Sample receipe', 'receipe for Sample','https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_1920,c_limit/04102023-ratatouille-lede.jpg',[
            new ingredient('Apples', 5),
            new ingredient('Oranges', 6)
        ])
    
      ]

    getReceipes() {
        // slice functionality will give a copy of the receipe
        return this.receipes.slice()
    }

    setReceipes(receipes: Receipe[]) {
        this.receipes = receipes;
        return this.receipes.slice()
    }

    getReceipe(index: number) {
        return this.receipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients: ingredient[]) {
        this.slService.addIngredients(ingredients)

    }
}