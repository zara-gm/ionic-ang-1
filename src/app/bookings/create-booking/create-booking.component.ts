import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Place } from '../../places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace!: Place;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalCtrl.dismiss({ message: 'This is a dummy message!' }, 'confirm');
  }
}
