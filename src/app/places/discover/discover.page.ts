import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-discover',
  standalone: true,
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DiscoverPage { }


