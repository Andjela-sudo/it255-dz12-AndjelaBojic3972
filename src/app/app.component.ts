import { Component } from '@angular/core';
import { SmestajService } from './services/smestaj.service';
import Smestaj from './smestaj-component/smestaj.model';
import Soba from './smestaj-component/soba.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as SmestajActions from './smestaj.actions';

interface AppState{
  smestaji: Smestaj[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public smestaji: Observable<Smestaj[]>
 
  constructor(private smestajService: SmestajService, private store: Store<AppState>){
   //this.smestaji = this.smestajService.getSmestaji()
   this.smestaji = this.store.select('smestaji');
   console.log(this.smestaji);

   
  }

  onKreiranjeNovogSmestaja(novSmestaj:Smestaj){
    //this.smestaji.push(novSmestaj)
    this.store.dispatch(new SmestajActions.DodajSmestaj(novSmestaj))
    console.log(this.smestaji);
    this.smestaji.subscribe(data=>{
      console.log(data.values);
      
    })
    
  }
  onKreiranjeNoveSobe(novaSoba:Soba){
    // let smestajZaIzmenu = this.smestaji.find(s => s.naziv == novaSoba.apartman)
    // smestajZaIzmenu?.sobe.push(novaSoba)
  }
  onObrisiSmestaj(smestaj:Smestaj){
    //this.smestaji.splice(this.smestaji.indexOf(smestaj),1)
  }
  onZameniSmestaj(obj:any){
    //this.smestaji.splice(this.smestaji.indexOf(obj.stariSmestaj),1,obj.noviSmestaj)
  }
}
