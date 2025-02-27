import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesPageRoutingModule } from './recipes-routing.module';
import { RecipesService } from './recipes.service';  // Make sure this service is provided here
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RecipesPage } from './recipes.page';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesPageRoutingModule,
    RecipesPage, // ✅ Import standalone component
    RecipeItemComponent // ✅ Import standalone component
  ]
})
export class RecipesPageModule {}

