import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipesService } from 'src/app/services/recipe/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  selectedRecipe: Recipe;
  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipesService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
