import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeStarterComponent } from './recipe-starter.component';

describe('RecipeStarterComponent', () => {
  let component: RecipeStarterComponent;
  let fixture: ComponentFixture<RecipeStarterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeStarterComponent]
    });
    fixture = TestBed.createComponent(RecipeStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
