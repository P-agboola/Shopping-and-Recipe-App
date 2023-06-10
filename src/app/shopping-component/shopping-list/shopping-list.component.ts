import { Component } from '@angular/core';
import { Ingredients } from '../../models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('tomatos', 7),
  ];

  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }
}
