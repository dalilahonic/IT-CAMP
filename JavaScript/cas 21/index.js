const hotel = {
    ime: 'Ime Hotela',
    lokacija: 'Novi Pazar',
    brojSlobodnihSoba: 20,
    zaradaHotela: 100,
    bukirajSobu() {
        this.brojSlobodnihSoba--;
        this.zaradaHotela += 20
    }
}

hotel.bukirajSobu();
console.log(hotel.zaradaHotela, hotel.brojSlobodnihSoba);