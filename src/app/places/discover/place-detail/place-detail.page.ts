import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place!: Place;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      const placeId = paramMap.get('placeId') as string;
      if (!placeId) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      const fetchedPlace = this.placesService.getPlace(placeId);
      if (fetchedPlace) {
        this.place = fetchedPlace as Place;
      } else {
        this.navCtrl.navigateBack('/places/tabs/discover');
      }
    });
  }

  onBookPlace() {
    this.navCtrl.navigateBack('/places/tabs/discover');
  }
}
