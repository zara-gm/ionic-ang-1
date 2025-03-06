import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-edit-offer',
  standalone: true,
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class EditOfferPage implements OnInit {
  place!: Place;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      const placeId = paramMap.get('placeId');
      if (!placeId) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }

      const fetchedPlace = this.placesService.getPlace(placeId);
      if (fetchedPlace && fetchedPlace.id) {
        this.place = fetchedPlace as Place;
      }
    });
  }
}
