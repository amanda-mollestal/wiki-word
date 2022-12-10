export class Game {
  #view
  #gameModel

  constructor (model, view) {
    this.#view = view
    this.#gameModel = model
  }

  async run () {
    this.#view.displayWelcome()
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
      this.#view.displayWordHints(this.#gameModel.getWordHints()) 
      const guess = await this.#view.getWordGuess(this.#gameModel.getNrOfGuesses(), this.#gameModel.getWordHints())
      //this.#view.displayNrOfGuesses(this.#gameModel.getNrOfGuesses())

      if(!this.#gameModel.isGuessRight(guess)) {
         this.#gameModel.compareGuessAndWord(guess)
        //console.log(guess)
      } else {
        console.log('HELT RÄTT')
        running = false 
        return await this.#view.playAgain()
      }
    } while (running)
    
    
  }



}