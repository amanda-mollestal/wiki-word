export class Player {
  #guess
  #nrOfGuesses

  constructor() {
    this.#nrOfGuesses = 0

  }

  setGuess(guess) {
    this.#guess = guess
  }

  get guess () {
    return this.#guess
  }

  addNrOfGuesses() {
    this.#nrOfGuesses = this.#nrOfGuesses + 1
  }

}