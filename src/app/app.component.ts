import { Component } from '@angular/core';
import { SmestajService } from './services/smestaj.service';
import Smestaj from './smestaj-component/smestaj.model';
import Soba from './smestaj-component/soba.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public smestaji: Smestaj[]
 
  constructor(private smestajService: SmestajService){
    this.smestaji = this.smestajService.getSmestaji()
  }

  onKreiranjeNovogSmestaja(novSmestaj:Smestaj){
    this.smestaji.push(novSmestaj)
  }
  onKreiranjeNoveSobe(novaSoba:Soba){
    let smestajZaIzmenu = this.smestaji.find(s => s.naziv == novaSoba.apartman)
    smestajZaIzmenu?.sobe.push(novaSoba)
  }
  onObrisiSmestaj(smestaj:Smestaj){
    this.smestaji.splice(this.smestaji.indexOf(smestaj),1)
  }
  onZameniSmestaj(obj:any){
    this.smestaji.splice(this.smestaji.indexOf(obj.stariSmestaj),1,obj.noviSmestaj)
  }
}
