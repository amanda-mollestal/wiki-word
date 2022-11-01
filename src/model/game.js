import { WordGetter } from "./wordgetter.js";

export class Game {
  #wordGetter
  #player
  #word
  #wordHints
  #subject

  constructor () {
    this.#wordGetter = new WordGetter()
    this.#word = ''
    this.#wordHints = []
  }


  async setSubject (subject) {
    await this.#wordGetter.scrapeWikiForWords(subject)
    this.#subject = subject

  }

  getSubject() {
    return this.#subject
  }

  generateWord() {
    this.#word = this.#wordGetter.getRandomWord()
   for(let i = 0; i < this.#word.length; i++) {
      this.#wordHints.push('_')
    }
    console.log(this.#word)
  }

  getWordHints() {
    return this.#wordHints
  }

  setPlayerGuess(guess) {

  }





}