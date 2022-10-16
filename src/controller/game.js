export class Game {
  #view
  #gameModel

  constructor (model, view) {
    this.#view = view
    this.#gameModel = model
  }

  async run () {
    this.#view.printWelcome()
    let running = true
    while(running) {
      const play = await this.#view.printMenu()
      if(play) {
        await this.playRound()
      } else {
        running = false
      }
    }
   this.#view.closeReadline()
  }

  /*doMenu() {
    const play = this.#view.printMenu()
    if(play) {
      this.playRound()
    }
  }*/ 

  async playRound () {
    const answer = await this.#view.getSubject()
    console.log(answer)
  }


}