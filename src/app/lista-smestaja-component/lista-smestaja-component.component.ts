import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Smestaj from '../smestaj-component/smestaj.model';


@Component({
  selector: 'lista-smestaja-component',
  templateUrl: './lista-smestaja-component.component.html',
  styleUrls: ['./lista-smestaja-component.component.scss']
})
export class ListaSmestajaComponentComponent implements OnInit {
  @Input() smestaji:Smestaj[]
  @Output() emitSmestajZaBrisanje:EventEmitter<Smestaj>
  @Output() emitSmestajZaIzmenu:EventEmitter<any>

  searchText = ''

  constructor() { 
    this.emitSmestajZaBrisanje = new EventEmitter<Smestaj>()
    this.emitSmestajZaIzmenu = new EventEmitter<any>()
  }

  ngOnInit(): void {
  }

  shuffle(){
    this.smestaji.sort(() => Math.random() - 0.5);
  }
  onBrisiSmestaj(smestaj:Smestaj){
    this.emitSmestajZaBrisanje.emit(smestaj)
  }
  onIzmeniSmestaj(obj:any){
    this.emitSmestajZaIzmenu.emit(obj)
  }
}
