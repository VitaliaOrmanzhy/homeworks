class Building {
    flats = [];
    constructor(maxAmountOfFlats) {
        this.maxAmountOfFlats = maxAmountOfFlats;
    }

    addFlat(flats) {
        if (this.maxAmountOfFlats > this.flats.length) {
            this.flats.push(...flats);
        }
    }
}