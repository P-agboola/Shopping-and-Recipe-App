import {
  ActivatedRouteSnapshot,
  Resolve,
  ResolveData,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from '../models/recipe';
import { Injectable } from '@angular/core';
import { ApiDataService } from './api-data.service';
import { RecipesService } from './recipe/recipes.service';

@Injectable({ providedIn: 'root' })
export class RecipeResovlerService implements Resolve<Recipe[]> {
  constructor(
    private apiDataService: ApiDataService,
    private recipesService: RecipesService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getRecipes();
    if (recipes.length === 0) {
      return this.apiDataService.fetchRecipes();
    }
    return recipes
  }
}
