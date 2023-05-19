let imeKorisnika = 'Dalila'
let PrezimeKorisnka = 'Honic'
let sifraKorisnika = '123456'

let ime = prompt('Unesite Ime');
let prezime = prompt('Unesite Prezime');
let password = prompt('Unesite sifru') 

if(ime === imeKorisnika && prezime === PrezimeKorisnka && password === sifraKorisnika) {
    console.log("uspesno ste se ulogovali");
}
else {
    console.log('pogresan unos podataka');
}
//........

let test = "DWADAWDAWDAw"
test.toUpperCase();