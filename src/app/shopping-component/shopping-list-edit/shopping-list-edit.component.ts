import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from '../../models/ingredient';
import { ShoppingService } from 'src/app/services/shopping/shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  constructor(private shoppingService: ShoppingService) {}
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemId: number;
  editedItem: Ingredients;

  ngOnInit() {
    this.subscription = this.shoppingService.startEditing.subscribe(
      (id: number) => {
        this.editedItemId = id;
        this.editMode = true;
        this.editedItem = this.shoppingService.getIngredient(id);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemId, newIngredient);
    } else {
      this.shoppingService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
  onClear(){
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingService.deleteIngredient(this.editedItemId);
    this.onClear()

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
