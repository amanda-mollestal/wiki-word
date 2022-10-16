import { WordGetter } from "./wordgetter.js";

export class Game {
  #wordGetter
  #player
  #word

  constructor () {
    this.#wordGetter = new WordGetter()
    
  }


  async setSubject (subject) {

    await this.#wordGetter.scrapeWikiForWords(subject)
  }

  setPlayerGuess(guess) {

  }





}