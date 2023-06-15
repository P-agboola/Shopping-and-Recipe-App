import { Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Ingredients } from 'src/app/models/ingredient';
import { ShoppingService } from '../shopping/shopping.service';

@Injectable()
export class RecipesService {
  constructor(private shoppingService: ShoppingService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Test chiken Recipe',
      'sample of Test chiken Recipe',
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
}
