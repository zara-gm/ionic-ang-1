import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 
import { Recipe } from './recipes.model';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']},
    {
      id: 'r2',
      title: 'Spaghetti', 
      imageUrl: 'https://www.thespruceeats.com/thmb/8Z9g5L6b4j5j0wv4B7UJZQr9I8s=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/spaghetti-with-meat-sauce-3057819-10_preview-5b02a7f9ba61770036e1f8d0.jpeg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']}
  ];

  constructor() { }

  ngOnInit() {
  }

}
