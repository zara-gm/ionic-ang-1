import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class NewOfferPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
