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
    this.#wordHints = {}
    this.#wordHints.rightPlace = []
    this.#wordHints.wrongPlace = []
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
    this.#word = this.#wordGetter.getRandomWord()

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

    // bugg -> vid gissning på aaaaaa så blir det fel

    for(let i = 0; i < guess.length; i++) {

      if(guess[i] === this.#word[i]) {
        this.#wordHints.rightPlace[i] = this.#word[i]

        if (this.#wordHints.wrongPlace.includes(guess[i])) {

         
            const index = this.#wordHints.wrongPlace.indexOf(guess[i])

          
            this.#wordHints.wrongPlace.splice(index, 1);

          /*this.#wordHints.wrongPlace = this.#wordHints.wrongPlace.filter(element => !this.#wordHints.wrongPlace.includes(guess[i]))*/ 
        } 

      } else if (this.#word.includes(guess[i])) {
        
        const matches = this.#word.split("a").length - 1

        if (!this.#wordHints.wrongPlace.includes(guess[i])) {
          this.#wordHints.wrongPlace.push(guess[i])
        } else {
        const count = this.#wordHints.wrongPlace.reduce((total, letter) => total + (letter === guess[i]), 0);

          if (count < matches) {
            this.#wordHints.wrongPlace.push(guess[i])
          }
      }

    }
  }


}
}