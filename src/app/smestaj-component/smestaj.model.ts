import Soba from "./soba.model"

class Smestaj{
    naziv:string
    lokacija:string
    sobe:Array<Soba>
    cena:number
    slika:string
    constructor(naziv:string,lokacija:string,sobe:Array<Soba>,cena:number,slika:string){
        this.naziv = naziv
        this.lokacija = lokacija
        this.sobe = sobe
        this.cena = cena
        this.slika = slika?slika:"./assets/images/noImage.png"
    }
}

export default Smestaj