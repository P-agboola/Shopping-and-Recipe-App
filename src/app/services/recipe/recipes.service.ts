import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Ingredients } from 'src/app/models/ingredient';
import { ShoppingService } from '../shopping/shopping.service';

@Injectable()
export class RecipesService {
  constructor(private shoppingService: ShoppingService) {}
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'sample of Test Recipe',
      'https://panlasangpinoy.com/wp-content/uploads/2023/03/Butter-garlic-fried-chicken-recipe.jpg',
      [new Ingredients('chiken', 5), new Ingredients('onions', 2)]
    ),
    new Recipe(
      'Test chicken Recipe',
      'sample of Test chicken Recipe',
      'https://panlasangpinoy.com/wp-content/uploads/2023/03/Butter-garlic-fried-chicken-recipe.jpg',
      [new Ingredients('chiken', 2), new Ingredients('onions', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredient: Ingredients[]) {
    this.shoppingService.addIngredients(ingredient);
  }
}
