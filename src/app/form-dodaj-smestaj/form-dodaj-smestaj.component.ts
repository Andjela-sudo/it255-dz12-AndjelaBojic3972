import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Smestaj from '../smestaj-component/smestaj.model';

@Component({
  selector: 'form-dodaj-smestaj',
  templateUrl: './form-dodaj-smestaj.component.html',
  styleUrls: ['./form-dodaj-smestaj.component.scss']
})
export class FormDodajSmestajComponent implements OnInit {
  @Output('kreiranjeNovogSmestaja') kreiranjeNovogSmestaja:EventEmitter<Smestaj>
  @Output('izmenaSmestaja') izmenaSmestaja:EventEmitter<Smestaj>

  @Input() isNov: boolean
  constructor() {
    this.kreiranjeNovogSmestaja = new EventEmitter<Smestaj>()
    this.izmenaSmestaja = new EventEmitter<Smestaj>()
   }

  ngOnInit(): void {
  }

  addApartment(naziv: HTMLInputElement, adresa: HTMLInputElement,cena:HTMLInputElement,slika:HTMLInputElement): boolean {
    this.kreiranjeNovogSmestaja.emit(new Smestaj(naziv.value,adresa.value,[],Number(cena.value),slika.value?slika.value:'/assets/images/noImage.png'))  
    return false;
  }
  izmeniSmestaj(naziv: HTMLInputElement, adresa: HTMLInputElement,cena:HTMLInputElement,slika:HTMLInputElement): boolean {
    this.izmenaSmestaja.emit(new Smestaj(naziv.value,adresa.value,[],Number(cena.value),slika.value?slika.value:'/assets/images/noImage.png'))  
    return false;
  }
}
