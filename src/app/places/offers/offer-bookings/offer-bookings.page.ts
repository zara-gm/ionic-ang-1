import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  standalone: true,
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class OfferBookingsPage implements OnInit {
  place!: Place;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      const placeId = paramMap.get('placeId');

      if (!placeId) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }

      const fetchedPlace = this.placesService.getPlace(placeId);
      if (fetchedPlace) {
        this.place = fetchedPlace as Place;
      } else {
        this.navCtrl.navigateBack('/places/tabs/offers');
      }
    });
  }
}
