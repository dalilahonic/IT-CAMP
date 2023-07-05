class Covek {
  constructor(ime, prezime, email, godine) {
    this.ime = ime;
    this.prezime = prezime;
    this.email = email;
    this.godine = godine;
  }

  infoOsobe() {
    console.log(this.ime, this.prezime, this.godine);
  }

  godisteOsobe() {
    let data = new Date().getFullYear();
    return data - this.godine;
  }

  jelOsobaPunoletna() {
    return this.godine >= 18
      ? console.log('punoletna')
      : console.log('nije punoletna');
  }
}

const covek1 = new Covek(
  'Dalila',
  'Honic',
  'dalilahonic1@gmail.com',
  18
);
const covek2 = new Covek(
  'Dalila2',
  'Honic2',
  'dalilahonic1@gmail.com',
  18
);

console.log(covek1.godisteOsobe());
console.log(covek1.jelOsobaPunoletna());

//...........................

class Kuca {
  constructor(boja, kvadratura, dvoriste, adresa, vlasnik) {
    this.boja = boja;
    this.kvadratura = kvadratura;
    this.dvoriste = dvoriste;
    this.adresa = adresa;
    this.vlasnik = vlasnik;
  }

  cenaKuce(cenaPoKvadratu) {
    return this.kvadratura * cenaPoKvadratu;
  }
}

const kuca1 = new Kuca('crna', 20, true, 'Novi Pazar', {
  ime: 'Dalila',
  prezime: 'Honic',
});

console.log(kuca1);
console.log(kuca1.cenaKuce(50));
