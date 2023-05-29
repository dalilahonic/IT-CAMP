function funkcija(ime, prezime) {
    console.log(ime + prezime);
}

funkcija("Dalila", " Honic");

//...

function myFunction(broj1) {
    if(broj1.substring(0, broj1.length / 2) === broj1.substring(broj1.length / 2)) {
        console.log(`Broj ${broj1} jeste`) 
    } else {
        console.log(`Broj ${broj1} nije`)
    }
}

myFunction('235235');


