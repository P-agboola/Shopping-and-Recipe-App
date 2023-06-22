import { Component } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  constructor(private apiDataService: ApiDataService) {}

  onSaveRecipe() {
    this.apiDataService.storeRecipes();
  }

  onFetchRecipes() {
    this.apiDataService.fetchRecipes().subscribe();
  }
}
