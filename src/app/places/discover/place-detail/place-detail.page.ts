import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController, NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

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
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private placesService: PlacesService,
    private route: ActivatedRoute
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

  async onBookPlace() {
    const modal = await this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place },
    });

    await modal.present();

    const { data, role } = await modal.onDidDismiss();
    if (role === 'confirm') {
      console.log('BOOKED!', data);
    }
  }
}
