import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredients } from '../../models/ingredient';
import { ShoppingService } from '../../services/shopping/shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  constructor(private shoppingService: ShoppingService) {}
  ingredients: Ingredients[];
  private ingChangeSub: Subscription;

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.ingChangeSub = this.shoppingService.ingredientsChangeed.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(id: number) {
    this.shoppingService.startEditing.next(id);
  }

  ngOnDestroy(): void {
    this.ingChangeSub.unsubscribe();
  }
}
