import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';  // Import the Recipe interface

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.thespruceeats.com/thmb/8Z9g5L6b4j5j0wv4B7UJZQr9I8s=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/spaghetti-with-meat-sauce-3057819-10_preview-5b02a7f9ba61770036e1f8d0.jpeg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string): Recipe {
    const foundRecipe = this.recipes.find(recipe => recipe.id === recipeId);
    if (!foundRecipe) {
      // Optionally, return a default recipe or handle the error
      return { id: 'default', title: 'Default Recipe', imageUrl: '', ingredients: [] }; // Or throw an error
    }
    return foundRecipe;
  }
  
}
