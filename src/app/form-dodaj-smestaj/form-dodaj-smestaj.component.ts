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
    console.log(data);
    
    console.log('forma submit');
    console.log(this.naziv,this.adresa,this.cena,this.slika);
    console.log(this.naziv?.errors);
    console.log(this.adresa?.errors);
    console.log(this.cena?.errors);
    console.log(this.slika?.errors);
    console.log(this.smestajForm.valid);
    
    
    
    
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
