import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { IonicModule } from '@ionic/angular';  // ✅ Import IonicModule
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule

@Component({
  selector: 'app-recipe-item',
  standalone: true, // ✅ Ensure it's a standalone component
  imports: [IonicModule, RouterModule], // ✅ Import necessary modules
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipeItem!: Recipe; // ✅ Add definite assignment assertion (!)
  constructor() { }

  ngOnInit() {}
}
