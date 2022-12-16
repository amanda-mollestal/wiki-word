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
    this.#subject = ''
    this.#wordHints = {}
    this.#wordHints.rightPlace = []
    this.#wordHints.wrongPlace = []
    this.#nrOfGuesses = 0
  }

  async setSubject (subject) {

    try {
      await this.#wordGetter.scrapeWikiForWords(subject)
      this.#subject = subject
   
    } catch (error) {
      throw new Error()
     
    }

  }

  getSubject() {
    return this.#subject
  }

  generateWord() {
    this.#nrOfGuesses = 0
    this.#word = this.#wordGetter.getRandomWord()

    console.log(this.#word)

    this.#wordHints.rightPlace = []
    this.#wordHints.wrongPlace = []

    for(let i = 0; i < this.#word.length; i++) {
        this.#wordHints.rightPlace[i] = '_'
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

    for(let i = 0; i < guess.length; i++) {

      if(guess[i] === this.#word[i]) {
        this.#wordHints.rightPlace[i] = this.#word[i]

        if (this.#wordHints.wrongPlace.includes(guess[i])) {

          const index = this.#wordHints.wrongPlace.indexOf(guess[i])
        
          this.#wordHints.wrongPlace.splice(index, 1)
        
        } 

      } else if (this.#word.includes(guess[i])) {
        
        const letterMatches = this.#word.split(guess[i]).length - 1

        const countInWrong = this.#wordHints.wrongPlace.reduce((total, letter) => total + (letter === guess[i]), 0)
        const countInRight = this.#wordHints.rightPlace.reduce((total, letter) => total + (letter === guess[i]), 0)
  
        if (countInWrong < letterMatches && letterMatches > countInRight) {
          this.#wordHints.wrongPlace.push(guess[i])
        }
    
    }
  }


}
}