import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [];
  loadedRecipe!: Recipe; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService 
  ) { } 

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        console.warn('No recipe ID found in URL.');
        return;
      }
      const recipeId = paramMap.get('recipeId');
      console.log('Recipe ID from URL:', recipeId);
  
      // ✅ Use correct service property name
      this.loadedRecipe = this.recipeService.getRecipe(recipeId!);
      console.log('Loaded Recipe:', this.loadedRecipe);
    });
  
    // ✅ Fetch all recipes correctly
    this.recipes = this.recipeService.getAllRecipes();
    console.log('All Recipes:', this.recipes);
  }
}
