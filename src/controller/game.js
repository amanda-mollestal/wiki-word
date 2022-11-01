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
        await this.playGame()
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

  async playGame () {

    await this.getAndSetGameSubject()
    //const sub = this.#gameModel.getSubject() 
    //console.log(sub)

    await this.playRound()


   /* while(true) {
      await this.playRound()
    } */ 
    
  
    
    
  }

  async playRound() {
    await this.#gameModel.generateWord()
    this.#view.printWordHints(this.#gameModel.getWordHints()) 
    const guess = await this.#view.getWordGuess()
    console.log(guess)
    
  }

  async getAndSetGameSubject() {
    const answer = await this.#view.getSubject()
    await this.#gameModel.setSubject(answer)
  }


}