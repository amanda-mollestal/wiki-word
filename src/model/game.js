import { WordGetter } from "./wordgetter.js";

export class Game {
  #wordGetter
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


  // hmmm.. method ska bara göra en sak inte göra en sak och returnera
  // kasta error istället som fångas i controller?
  // set subject till inget och kolla det i controller?
  async setSubject (subject) {

    
      const gotWords = await this.#wordGetter.scrapeWikiForWords(subject)

      if(gotWords) {
       
        this.#subject = subject
        return true
      } else {
        return false
      }
    
    

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
  }

  getWord() {
    return this.#word
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


}