import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://img.taste.com.au/vdX2cNgW/w733-h489-cfill-q80/taste/2019/01/mini-leek-fittatas-146677-1.jpg'),
    // tslint:disable-next-line: max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxz7JB3Jn1vepIhH0xufnLlcOqztGDKM0z3_FsKmx6SZesvcQ'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
