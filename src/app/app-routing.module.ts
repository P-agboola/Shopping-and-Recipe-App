import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-component/shopping-list/shopping-list.component';
import { RecipesComponent } from './recipe-components/recipes/recipes.component';
import { RecipeStarterComponent } from './recipe-components/recipes/recipe-starter/recipe-starter.component';
import { RecipeDetailsComponent } from './recipe-components/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-components/recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStarterComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailsComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
