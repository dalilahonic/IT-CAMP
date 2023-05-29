let broj1 = Number(prompt('unesite prvi broj'));
let broj2 = Number(prompt('unesite drugi broj'));
let operacija = prompt('unesite operaciju');

if (!isNaN(broj1) && !isNaN(broj2)) {

    if (operacija === '+') {

        let rezultat = broj1 + broj2;
        console.log(rezultat);

    } else if (operacija === '-') {
        let rezultat = broj1 - broj2;
        console.log(rezultat);
        let odgovor = prompt('da li zelite da izvrsite jos neku operaciju');
        if (odgovor === 'Da' || odgovor === 'Zelim' || odgovor === 'Moze' || odgovor === 'Hocu') {
            let noviBroj = Number(prompt('unesi broj'));
            let novaOperacija = prompt('unesi operaciju');
            if (!isNaN(noviBroj) && novaOperacija === '+') {
                console.log(rezultat + noviBroj);
            } else if(!isNaN(noviBroj) && novaOperacija === '-') {
                console.log(rezultat - noviBroj)
            } else if(!isNaN(noviBroj) && novaOperacija === '*') {
                console.log(rezultat * noviBroj)
        } else if(!isNaN(noviBroj) && novaOperacija === '/') {
            console.log(rezultat / noviBroj)
        }
        }

    } else if (operacija === '*') {
        let rezultat = broj1 * broj2;
        console.log(rezultat);;
        let odgovor = prompt('da li zelite da izvrsite jos neku operaciju');

        if (odgovor === 'Da' || odgovor === 'Zelim' || odgovor === 'Moze' || odgovor === 'Hocu') {
            let noviBroj = Number(prompt('unesi broj'));
            let novaOperacija = prompt('unesi operaciju');
            if (!isNaN(noviBroj) && novaOperacija === '+') {
                console.log(rezultat + noviBroj);
            } else if(!isNaN(noviBroj) && novaOperacija === '-') {
                console.log(rezultat - noviBroj)
            } else if(!isNaN(noviBroj) && novaOperacija === '*') {
                console.log(rezultat * noviBroj)
        } else if(!isNaN(noviBroj) && novaOperacija === '/') {
            console.log(rezultat / noviBroj)
        }
    }

    } else if (operacija === '/') {
        let rezultat = broj1 / broj2;
        console.log(rezultat);;
        let odgovor = prompt('da li zelite da izvrsite jos neku operaciju');
        if (odgovor === 'Da' || odgovor === 'Zelim' || odgovor === 'Moze' || odgovor === 'Hocu') {
            let noviBroj = Number(prompt('unesi broj'));
            let novaOperacija = prompt('unesi operaciju');
            if (!isNaN(noviBroj) && novaOperacija === '+') {
                console.log(rezultat + noviBroj);
            } else if(!isNaN(noviBroj) && novaOperacija === '-') {
                console.log(rezultat - noviBroj)
            } else if(!isNaN(noviBroj) && novaOperacija === '*') {
                console.log(rezultat * noviBroj)
        } else if(!isNaN(noviBroj) && novaOperacija === '/') {
            console.log(rezultat / noviBroj)
        }
    }
    } 
    else {
        console.log('nesto nije dobro');
    }
}
