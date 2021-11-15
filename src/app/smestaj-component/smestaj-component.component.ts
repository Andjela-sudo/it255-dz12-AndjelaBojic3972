import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Smestaj from './smestaj.model';


@Component({
  selector: 'smestaj-component',
  templateUrl: './smestaj-component.component.html',
  styleUrls: ['./smestaj-component.component.scss']
})
export class SmestajComponentComponent implements OnInit {
  @Input() smestaj:Smestaj
  @Output() emitSmestajZaBrisanje:EventEmitter<Smestaj>
  @Output() emitSmestajZaIzmenu:EventEmitter<Object>
 
  isVisible:boolean

  constructor() { 
    this.isVisible = false;
     this.emitSmestajZaBrisanje = new EventEmitter<Smestaj>()
     this.emitSmestajZaIzmenu = new EventEmitter<Object>()
  }

  ngOnInit(): void {
  }

  izmeniSmestaj(){
    this.isVisible = !this.isVisible
   
  }
  obrisiSmestaj(){
    this.emitSmestajZaBrisanje.emit(this.smestaj)
    /* Treba da emituje ovaj this.smestaj app komponenti da bi se tamo pronasao po (id) i izbrisao iz niza*/
  }
  onIzmenaSmestaja(novSmestaj:Smestaj){
    let nov = new Smestaj(novSmestaj.naziv,novSmestaj.lokacija,this.smestaj.sobe,novSmestaj.cena,novSmestaj.slika)
    this.emitSmestajZaIzmenu.emit({stariSmestaj: this.smestaj, noviSmestaj: nov})
  }

}
