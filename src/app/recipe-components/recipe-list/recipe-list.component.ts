import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipesService } from '../../services/recipe/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  recipes: Recipe[];
  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
