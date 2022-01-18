import { Injectable } from '@angular/core';
import Smestaj from '../smestaj-component/smestaj.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  public smestaj: Smestaj;
  constructor() { }
  getPrice(numberOfNights: number){
    return numberOfNights * this.smestaj.cena;
  }
}
