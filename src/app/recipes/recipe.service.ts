import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  constructor(private slService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://img.taste.com.au/vdX2cNgW/w733-h489-cfill-q80/taste/2019/01/mini-leek-fittatas-146677-1.jpg',
      [
        new Ingredient('test', 1),
        new Ingredient('test', 2)
      ]),
    // tslint:disable-next-line: max-line-length
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxz7JB3Jn1vepIhH0xufnLlcOqztGDKM0z3_FsKmx6SZesvcQ',
      [
        new Ingredient('test', 10),
        new Ingredient('test', 20)
      ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipeToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
