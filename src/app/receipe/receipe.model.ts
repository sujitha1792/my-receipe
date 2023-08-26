import { ingredient } from "../shared/ingredient.model";

export class Receipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: ingredient[];

    constructor(name: string, description: string, imagePath: string, ingredients:ingredient[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}