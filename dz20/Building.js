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

    addFlats(flats) {
        if (this.maxAmountOfFlats > this.flats.length) {
            for (let i = 0; i < flats.length; i++) {
                this.flats.push(flats[i]);
                if (this.flats.length === this.maxAmountOfFlats) break;
            }
        }
    }
}
