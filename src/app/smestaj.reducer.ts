import * as SmestajActions from './smestaj.actions';
import Smestaj from "./smestaj-component/smestaj.model";

export type Action = SmestajActions.All;

const newState = (state:any,newSmestaj:any)=>{
    console.log(state);
    
    return [...state].push(newSmestaj);
}

export function smestajReducer(state: any = [],action: any){
    console.log(action.type);
    console.log(state);
    
    switch(action.type){
        case SmestajActions.DODAJ_SMESTAJ:
            return newState(state, action.payload)

        default:
            return state;

    }
    
}