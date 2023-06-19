import { Injectable } from '@angular/core';
import { Ingredients } from '../../models/ingredient';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingService {
  constructor() {}
  ingredientsChangeed = new Subject<Ingredients[]>();
  startEditing = new Subject<number>();
  private ingredients: Ingredients[] = [
    new Ingredients('curry', 1),
    new Ingredients('tomatos', 7),
    new Ingredients('pepper', 3),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(id: number) {
    return this.ingredients[id];
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChangeed.next(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredients[]) {
    this.ingredients.push(...ingredient);
    this.ingredientsChangeed.next(this.ingredients.slice());
  }

  updateIngredient(id: number, newIngredient: Ingredients) {
    this.ingredients[id] = newIngredient;
    this.ingredientsChangeed.next(this.ingredients.slice());
  }

  deleteIngredient(id: number) {
    this.ingredients.splice(id, 1);
    this.ingredientsChangeed.next(this.ingredients.slice());
  }
}
