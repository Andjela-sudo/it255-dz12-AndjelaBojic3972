import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSmestajaComponentComponent } from './lista-smestaja-component/lista-smestaja-component.component';
import { SmestajComponentComponent } from './smestaj-component/smestaj-component.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormDodajSmestajComponent } from './form-dodaj-smestaj/form-dodaj-smestaj.component';
import { FormDodajSobuComponent } from './form-dodaj-sobu/form-dodaj-sobu.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaSmestajaComponentComponent,
    SmestajComponentComponent,
    FilterPipePipe,
    FormDodajSmestajComponent,
    FormDodajSobuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
