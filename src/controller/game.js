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

    //await this.playRound()

    while(await this.playRound()) {
    } 
    
  
    
  }

  async playRound() {
    

   await this.#gameModel.generateWord()
    let running = true
    do {
      this.#view.printWordHints(this.#gameModel.getWordHints()) 
      const guess = await this.#view.getWordGuess()
      if(!this.#gameModel.isGuessRight(guess)) {
         this.#gameModel.compareGuessAndWord(guess)
        //console.log(guess)
      } else {
        console.log('HELT RÄTT')
        running = false 
        return await this.#view.playAgain()
      }
    } while (running);



    
    
  }

  async getAndSetGameSubject() {
    const answer = await this.#view.getSubject()
    await this.#gameModel.setSubject(answer)
  }


}