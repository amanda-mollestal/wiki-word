export class Game {
  #view
  #gameModel

  constructor (model, view) {
    this.#view = view
    this.#gameModel = model
  }

  async run () {
    this.#view.displayWelcome()
    this.#view.displayRules()
    let running = true
    
    while(running) {
      const play = await this.#view.displayMenu()
      if(play) {
        await this.playGame()
      } else {
         running = false
      }
    }

   this.#view.closeReadline()
  }


  async playGame () {

    await this.getAndSetGameSubject()
   
     while(await this.playRound()) {
     } 
      
    
  }

 async getAndSetGameSubject() {

  let gotSubject = false
  do {
    const answer = await this.#view.getSubject()
    gotSubject = await this.#gameModel.setSubject(answer) 
    if(gotSubject === false) {
      this.#view.displaySubjectMsg()
    }

  } while (gotSubject === false);
    
  }

  async playRound() {
    
   await this.#gameModel.generateWord()
    let running = true
    
    do {
      this.#view.displayWordHints() 
      const guess = await this.#view.getWordGuess()

      if(guess === 'i give up') {
        this.#view.displayGiveUp()
        running = false 
        return await this.#view.playAgain()
      }

      if(!this.#gameModel.isGuessRight(guess)) {
         this.#gameModel.compareGuessAndWord(guess)

      } else {
        this.#view.displayWinMsg()
        running = false 
        return await this.#view.playAgain()
      }
    } while (running)
    
    
  }



}