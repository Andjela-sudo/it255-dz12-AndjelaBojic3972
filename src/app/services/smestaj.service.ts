import { Injectable } from '@angular/core';
import Smestaj from '../smestaj-component/smestaj.model';
import Soba from '../smestaj-component/soba.model';

@Injectable({
  providedIn: 'root'
})
export class SmestajService {
  private smestaji: Smestaj[]
  constructor() {
    this.smestaji = [
      new Smestaj('Apartman 1 porodicni', 'Tadeuša Košćuška 1 Beograd', [new Soba('kuhinja + dnevna', 30, 'Apartman 1 porodicni')], 4000, 'https://image.archify.com/blog/02-Black-and-White-Monochrome-Interior-Design.jpg'),
      new Smestaj('Apartman 2 lux', 'Tadeuša Košćuška 2 Beograd', [new Soba('dnevna', 30, 'Apartman 2 lux'), new Soba('spavaca', 25, 'Apartman 2 lux')], 6000, 'https://design-milk.com/images/2017/03/L-Residence-Taichung-Z-AXIS-DESIGN-1.jpg'),
      new Smestaj('Apartman 3', 'Tadeuša Košćuška 3 Beograd', [new Soba('dnevna', 25, 'Apartman 3')], 2600, 'https://homeworlddesign.com/wp-content/uploads/2017/08/Industrial-Modern-Apartment-1.jpg'),
    ];
  }
  public getSmestaji(){
    return this.smestaji
  }
}
