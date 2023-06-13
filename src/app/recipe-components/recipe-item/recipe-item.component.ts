import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipesService } from 'src/app/services/recipe/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  constructor(private recipesService: RecipesService) {}
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  onSelected() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }
}
