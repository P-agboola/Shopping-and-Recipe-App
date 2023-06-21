import { Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Ingredients } from '../../models/ingredient';
import { ShoppingService } from '../shopping/shopping.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipesService {
  constructor(private shoppingService: ShoppingService) {}
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Chicken Recipe',
      'sample of Test Chicken Recipe',
      'https://panlasangpinoy.com/wp-content/uploads/2023/03/Butter-garlic-fried-chicken-recipe.jpg',
      [new Ingredients('chiken', 5), new Ingredients('curry', 2)]
    ),
    new Recipe(
      'Test Meat-pie Recipe',
      'sample of Test Meat-pie Recipe',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/06/03/0/FNK_Nigerian-Meat-Pies_H1_s4x3.jpg.rend.hgtvcom.441.331.suffix/1654270369271.jpeg',
      [new Ingredients('Pie', 5), new Ingredients('flour', 2)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredient: Ingredients[]) {
    this.shoppingService.addIngredients(ingredient);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(id: number, newRecipe: Recipe) {
    this.recipes[id] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
