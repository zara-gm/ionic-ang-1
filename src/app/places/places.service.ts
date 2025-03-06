import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1', 'Manhattan Mansion', 'In the heart of New York City.', 'https://tinyurl.com/36kp3c67', 149.99),
    new Place('p2', 'L\'Amour Toujours', 'A romantic place in Paris!', 'https://tinyurl.com/s4trnwka', 189.99),
    new Place('p3', 'The Foggy Palace', 'Not your average city trip!', 'https://tinyurl.com/3sjr955e', 99.99),
  ]

  get places() {
    return [...this._places]
  }

  constructor() { }
  getPlace(id: string) {
    return { ...this._places.find(p => p.id === id) }
  }
}
