class Zivotinja {
    constructor(ime, tezina, starost){
        this.ime = ime;
        this.tezina = tezina;
        this.starost =  starost;
    }

    infoZivotinje() {
        console.log(`Ime ove zivotinje jeste ${this.ime}, tezina: ${this.tezina} i ima ${this.starost} godina`);
    }
}

class Macka extends Zivotinja {
    constructor(ime, tezina, starost, zivoti) {
        super(ime, tezina, starost) 
        this.zivoti = zivoti
    }

    prezi() {
        console.log('Grr Grr');
    }
}

const zivotinja1 = new Zivotinja('Beni', 24, 3);
zivotinja1.infoZivotinje()

const macka1 = new Macka('Garfild', 23, 1, 9);
macka1.prezi();

class Pas extends Zivotinja {
    constructor(ime,tezina, starost, lutalica) {
        super(ime,tezina, starost )
        this.lutalica = lutalica
    }

    jelPasLutalica() {
        if(this.lutalica) console.log('pas je lutalica');
        else console.log('pas nije lutalica');
    }

    laj() {
        console.log('pas kaze aw aw aw');
    }
}

const pas1 = new Pas('Reks', 30, 2, false)

pas1.jelPasLutalica();

//...................

class Osoba {
    constructor(ime, prezime, godine) {
        this.ime = ime;
        this.prezime = prezime;
        this.godine = godine;
    }
}

let unos = prompt('Da li zelite musku ili zensku osobu');

class Musko extends Osoba {
    constructor(nesto) {
        super(ime, prezime, godine);
        this.nesto = nesto;
    }
}

class Zensko extends Osoba {
    constructor(zensko) {
        super(ime, prezime, godine);
        this.zensko = zensko;
    }
}

