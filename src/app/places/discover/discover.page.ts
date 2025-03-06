import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-discover',
  standalone: true,
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterModule]
})
export class DiscoverPage {
  loadedPlaces: Place[] = [];

  constructor(private placesService: PlacesService) { }
  ngOnInit() {
    console.log(this.loadedPlaces = this.placesService.places);
  }
}


