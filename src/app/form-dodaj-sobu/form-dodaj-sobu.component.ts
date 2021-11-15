import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Smestaj from '../smestaj-component/smestaj.model';
import Soba from '../smestaj-component/soba.model';

@Component({
  selector: 'form-dodaj-sobu',
  templateUrl: './form-dodaj-sobu.component.html',
  styleUrls: ['./form-dodaj-sobu.component.scss']
})
export class FormDodajSobuComponent implements OnInit {
  @Input() smestaji:Smestaj[]
  @Output('kreiranjeNoveSobe') emiterKreiranjaSobe:EventEmitter<Soba>
  constructor() { 
    this.emiterKreiranjaSobe = new EventEmitter<Soba>()
  }

  ngOnInit(): void {
  }
  
  addRoom(tip: HTMLInputElement, kvadratura: HTMLInputElement,smestaj:HTMLSelectElement): boolean {
    console.log(`Soba---> tip: ${tip.value} ,ima m2: ${kvadratura.value} ,za smestaj ${smestaj.value}`);
    this.emiterKreiranjaSobe.emit(new Soba(tip.value,Number(kvadratura.value),smestaj.value))
    return false;
  }
}
