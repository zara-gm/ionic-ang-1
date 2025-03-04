import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  standalone: true,
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EditOfferPage { }