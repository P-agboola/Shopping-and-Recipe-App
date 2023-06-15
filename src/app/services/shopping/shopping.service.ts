import {  Injectable } from '@angular/core';
import { Ingredients } from '../../models/ingredient';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingService {
  constructor() {}
  ingredientsChangeed = new Subject<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('curry', 1),
    new Ingredients('tomatos', 7),
    new Ingredients('pepper', 3)
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChangeed.next(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredients[]){
    this.ingredients.push(...ingredient);
    this.ingredientsChangeed.next(this.ingredients.slice());
  }
}
