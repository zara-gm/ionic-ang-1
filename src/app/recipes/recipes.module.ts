import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesPageRoutingModule } from './recipes-routing.module';
import { RecipesService } from './recipes.service';  // Make sure this service is provided here

@NgModule({
  imports: [
    CommonModule,
    RecipesPageRoutingModule,
  ],
  providers: [RecipesService],  // Add RecipesService to providers
})
export class RecipesPageModule {}
