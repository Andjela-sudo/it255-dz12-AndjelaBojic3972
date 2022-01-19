import { Action } from "@ngrx/store";
import Smestaj from "./smestaj-component/smestaj.model";

export const DODAJ_SMESTAJ = 'DODAJ_SMESTAJ'

export class DodajSmestaj implements Action{
    readonly type = DODAJ_SMESTAJ

    constructor(public payload: Smestaj){}
}

export type All 
= DodajSmestaj;