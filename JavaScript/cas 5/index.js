prvaOcena = prompt('unesite prvu ocenu');
drugaOcena = prompt('Unesite drugu ocenu');
trecaOcena = prompt('Unesite trecu ocenu');

parsePrvi = parseInt(prvaOcena);
parseDrugi = parseInt(drugaOcena);
parseTreci = parseInt(trecaOcena);

if(prvaOcena, drugaOcena, trecaOcena) {
    console.log(funkcija());
} 

function funkcija() {
    return (parsePrvi + parseDrugi + parseTreci) / 3
}

if(funkcija() > 4.5) {
    console.log('ucenika je odlican')
} else if(funkcija() > 3.5 && funkcija() < 4.5) {
    console.log('ucenika je vrlo dobar')
}
else if(funkcija() > 2.5 && funkcija() < 3.5) {
    console.log('ucenika je dobar')
}
else if(funkcija() > 1.5 && funkcija() < 2.5) {
    console.log('ucenik je dovoljan')
}
else if(funkcija() > 1.5) {
    console.log('ucenik je nedovoljan')
}

let punoIme = 'DalilaHonic';
console.log(punoIme.substring(6));
console.log(punoIme.substring(0, 6));
