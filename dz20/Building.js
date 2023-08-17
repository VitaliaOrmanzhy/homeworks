class Building {
    flats = [];
    constructor(maxAmountOfFlats) {
        this.maxAmountOfFlats = maxAmountOfFlats;
    }

    addFlat(flat) {
        if (this.maxAmountOfFlats > this.flats.length) {
            this.flats.push(flat);
        }
    }
}
