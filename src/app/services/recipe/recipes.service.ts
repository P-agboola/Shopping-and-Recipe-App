import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Injectable()
export class RecipesService {
  constructor() {}
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'sample of Test Recipe',
      'https://panlasangpinoy.com/wp-content/uploads/2023/03/Butter-garlic-fried-chicken-recipe.jpg'
    ),
    new Recipe(
      'Test chicken Recipe',
      'sample of Test chicken Recipe',
      'https://panlasangpinoy.com/wp-content/uploads/2023/03/Butter-garlic-fried-chicken-recipe.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
