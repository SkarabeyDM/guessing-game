class GuessingGame {

    #min; #max; #guess

    constructor() {
        this.#min = null
        this.#max = null
        this.#guess = null
    }

    setRange(min, max) {
        this.#min = min
        this.#max = max
        this.#guess = max - ~~((max - min) / 2)
    }

    guess = () => this.#guess

    lower = () => this.setRange(this.#min, this.#guess)

    greater = () => this.setRange(this.#guess, this.#max)
}

module.exports = GuessingGame;
