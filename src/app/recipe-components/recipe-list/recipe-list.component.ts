import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'sample of Test Recipe',
      'https://panlasangpinoy.com/wp-content/uploads/2023/03/Butter-garlic-fried-chicken-recipe.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'sample of Test Recipe',
      'https://panlasangpinoy.com/wp-content/uploads/2023/03/Butter-garlic-fried-chicken-recipe.jpg'
    ),
  ];
}
