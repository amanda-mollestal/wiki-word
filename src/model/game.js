import { WordGetter } from "./wordgetter.js";

export class Game {
  #wordGetter
  #player
  #word
  #wordHints
  #subject
  #nrOfGuesses

  constructor () {
    this.#wordGetter = new WordGetter()
    this.#word = ''
    this.#wordHints = []
    this.#nrOfGuesses = 0
  }


  async setSubject (subject) {
    
    await this.#wordGetter.scrapeWikiForWords(subject)
    this.#subject = subject
  }

  getSubject() {
    return this.#subject
  }

  generateWord() {
    this.#nrOfGuesses = 0
    this.#wordHints = []
    this.#word = this.#wordGetter.getRandomWord()
   for(let i = 0; i < this.#word.length; i++) {
      this.#wordHints.push('_')
    }
    console.log(this.#word)
  }

  getWordHints() {
    return this.#wordHints
  }

  getNrOfGuesses() {
    return this.#nrOfGuesses
  }

  isGuessRight(guess) {
    this.#nrOfGuesses = this.#nrOfGuesses + 1
    return (guess === this.#word)
  }

  compareGuessAndWord(guess) {
    for(let i = 0; i < this.#word.length; i++) {
      if(guess[i] === this.#word[i]) {
        this.#wordHints[i] = this.#word[i]
      }
    }
  }

  setPlayerGuess(guess) {

  }





}