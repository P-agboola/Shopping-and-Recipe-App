import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
