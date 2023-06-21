import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeListComponent } from './recipe-components/recipe-list/recipe-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { RecipeItemComponent } from './recipe-components/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-component/shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './recipe-components/recipe-details/recipe-details.component';
import { RecipesComponent } from './recipe-components/recipes/recipes.component';
import { ShoppingListEditComponent } from './shopping-component/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirective } from './shared/dropdown-directives/dropdown.directive';
import { RecipesService } from './services/recipe/recipes.service';
import { ShoppingService } from './services/shopping/shopping.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStarterComponent } from './recipe-components/recipes/recipe-starter/recipe-starter.component';
import { RecipeEditComponent } from './recipe-components/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    HeaderComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    RecipeDetailsComponent,
    RecipesComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    RecipeStarterComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [RecipesService, ShoppingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
