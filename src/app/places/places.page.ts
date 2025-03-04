import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-places',
  standalone: true,
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PlacesPage { }
