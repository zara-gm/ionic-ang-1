import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  standalone: true,
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class NewOfferPage { }
