import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true, 
  imports: [IonicModule]
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe!: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('recipeId');
      
      if (!recipeId) {
        // If recipeId is missing, you can redirect or handle this case
        console.error('Recipe ID not found!');
        return; // Add proper handling here (e.g., redirecting or showing an error message)
      }

      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }
}
