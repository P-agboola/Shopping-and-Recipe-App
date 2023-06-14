import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  constructor() {}
  @Input() recipe: Recipe;
  @Input() id: number;
}
