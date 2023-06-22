import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipesService } from './recipe/recipes.service';
import { Recipe } from '../models/recipe';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiDataService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipesService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://shopping-recipes-cce59-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://shopping-recipes-cce59-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
