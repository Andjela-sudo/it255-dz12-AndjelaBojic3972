import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Smestaj from '../smestaj-component/smestaj.model';
import { slikaValidator } from './slika.validator';

@Component({
  selector: 'form-dodaj-smestaj',
  templateUrl: './form-dodaj-smestaj.component.html',
  styleUrls: ['./form-dodaj-smestaj.component.scss']
})
export class FormDodajSmestajComponent implements OnInit {
  @Output('kreiranjeNovogSmestaja') kreiranjeNovogSmestaja:EventEmitter<Smestaj>
  @Output('izmenaSmestaja') izmenaSmestaja:EventEmitter<Smestaj>

  @Input() isNov: boolean

  public smestajForm:FormGroup //da bi smo kreirali grupu moramo da koristimo formBuilder (ubacivanjem zavisnosti)

  constructor(private formBuilder:FormBuilder) {
    this.kreiranjeNovogSmestaja = new EventEmitter<Smestaj>()
    this.izmenaSmestaja = new EventEmitter<Smestaj>()
    //servis formBuilder koji ima metodu group , parametar {kontrole}
    this.smestajForm = formBuilder.group({
      naziv:['',[Validators.required]], //vezujemo za formControl iz sablona
      adresa:['', [Validators.required]], // [pocetna vrednost, [specijalni zahtevi (fje validacije)]]
      cena:['',[Validators.required,Validators.pattern('^[1-9]+[0-9]*$')]],
      slika:['',[slikaValidator()]]
    })
   }
   

  ngOnInit(): void {
  }

  public get naziv(){
    return this.smestajForm.get('naziv') //dohvata jednu kontrolu //AbstractControl
  }
  public get adresa(){
    return this.smestajForm.get('adresa')
  }
  public get cena(){
    return this.smestajForm.get('cena')
  }
  public get slika(){
    return this.smestajForm.get('slika')
  }

  submitForm(data:any){
    console.log('forma submit');
    console.log(data);

    this.addApartment(data.naziv,data.adresa,data.cena,data.slika);
  }

  addApartment(naziv: string, adresa: string,cena:number,slika:string): boolean {
    this.kreiranjeNovogSmestaja.emit(new Smestaj(naziv,adresa,[],Number(cena),slika?slika:'/assets/images/noImage.png'))  
    return true;
  }

  izmeniSmestaj(data:any): boolean {//moraju se promeniti sve vrednosti osim slike
    this.izmenaSmestaja.emit(new Smestaj(data.naziv,data.adresa,[],Number(data.cena),data.slika?data.slika:'/assets/images/noImage.png'))  
    return false;
  }

}
