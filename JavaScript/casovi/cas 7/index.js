
function funkcija(broj1, broj2, operacija) {

    switch(operacija) {
        case '+': 
        console.log(broj1 + broj2);
        break;
        case '-':
            console.log(broj1 - broj2);
            break;
            case '*': 
            console.log(broj1 * broj2);
            break;
            case '/': 
            console.log(broj1 / broj2);
            break;
    }
   
}

funkcija(2, 3, '+');
funkcija(50, 5, '/');

let ime = 'Dalila';
let prezime = 'Honic';

let unesi = prompt('unesi ime ili prezime');

if(unesi === ime) {
    console.log('Uneli ste ime');
} else if(unesi === prezime) {
    console.log('uneli ste prezime')
}

// function funkcija1(ime, prezime) {
//     let ime = prompt('unesite ime');
//     let prezime = prompt('unesite perzime');

//     console.log(ime + prezime);

//     if(ime === 'Dalila') {
//         console.log('uneli ste ime')
//     } else if(prezime === 'Honic') {
//         console.log('uneli ste prezime')
//     }
// }

