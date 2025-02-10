import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';  // Corrected import
import { IonicModule } from '@ionic/angular'; // Import IonicModule here
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [IonicModule, CommonModule], // Ensure IonicModule is imported
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipesService) { } // Corrected service name

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }
}
