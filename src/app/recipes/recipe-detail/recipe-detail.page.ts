import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class RecipeDetailPage implements OnInit {
  [x: string]: any;
  loadedRecipe!: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('recipeId');
      console.log('Recipe ID from URL:', recipeId);

      if (!recipeId) {
        // If recipeId is missing, show an alert and handle the error
        this.showErrorAlert('Recipe not found', 'The requested recipe is missing or invalid.');
        return;
      }

      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
      console.log('Loaded Recipe:', this.loadedRecipe);
      console.log('Image URL:', this.loadedRecipe?.imageUrl);
    });
  }

  private async showErrorAlert(header: string, message: string) {
    const alert = await this['alertController'].create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      header: 'Are you sure?', message: 'Do you really want to delete this recipe?', buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }
}