import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-place-detail',
  standalone: true,
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PlaceDetailPage { }
