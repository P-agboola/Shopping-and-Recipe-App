import { Component } from '@angular/core';
import { Ingredients } from '../../models/ingredient';
import { ShoppingService } from '../../services/shopping/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  constructor(private shoppingService: ShoppingService) {}
  ingredients: Ingredients[];

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChangeed.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
