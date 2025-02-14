import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';  // Import the Recipe interface

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Schnitzel',
      imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: '2',
      title: 'Spaghetti',
      imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/5LdzPCHC5c4nfyva8fiVgA/l.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  getAllRecipes(): Recipe[] {
    console.log('Fetching all recipes:', this.recipes);
    return [...this.recipes]; // Return a copy to avoid mutations
  }
  

  getRecipe(recipeId: string): Recipe {
    const foundRecipe = this.recipes.find(recipe => recipe.id === recipeId);
    if (!foundRecipe) {
      // Optionally, return a default recipe or handle the error
      return { id: 'default', title: 'Default Recipe', imageUrl: '', ingredients: [] }; // Or throw an error
    }
    return foundRecipe;
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
  
}
