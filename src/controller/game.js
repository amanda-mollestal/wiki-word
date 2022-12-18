/**
 * The Game controller that manages the game flow and interactions between the game model and view.
 */
export class Game {
  #view
  #gameModel

  /**
   * Creates an instance of game controller.
   * @param {Object} model - Game model object responsible for storing game data and logic.
   * @param {Object} view - View object responsible for rendering game information and receiving user input.
   */ 
  constructor (model, view) {
    this.#view = view
    this.#gameModel = model
  }

  /**
   * Initializes and runs the game.
   */
  async run () {
    this.#view.displayWelcome()
    this.#view.displayRules()
    let running = true

    while (running) {
      const play = await this.#view.displayMenu()
      if (play) {
        await this.playGame()
      } else {
        running = false
      }
    }

   this.#view.closeReadline()
  }

  /**
   * Plays a round of Wiki-Word until the player decides to quit the game.
   */
  async playGame () {
    await this.getAndSetGameSubject()
  
    while(await this.playRound()) {
    } 

  }

  /**
   * Gets and sets the subject for the game.
   */
  async getAndSetGameSubject() {
    let gotSubject = false

    do {
      const answer = await this.#view.getSubject()

      try {
        await this.#gameModel.setSubject(answer)

        if (this.#gameModel.getSubject() !== '') {
          gotSubject = true
        }

      } catch (error) {
        this.#view.displaySubjectMsg()
      }
    } while (gotSubject === false)
  }

  /**
   * Plays a full round of Wiki-Word.
   * 
   * @returns {boolean} - Returns true if the user wants another round, false if not.
   */
  async playRound () {
    await this.#gameModel.generateWord()

    let playing = true
    while (playing) {
      this.#view.displayWordHints() 
      const guess = await this.#view.getWordGuess()

      if (guess === 'i give up') {
        this.#view.displayGiveUp()
        playing = await this.#view.playAgain()
        return playing
      }

      if (this.#gameModel.isGuessRight(guess)) {
        this.#view.displayWin()
        playing = await this.#view.playAgain()
        return playing
      } else {
        this.#gameModel.compareGuessAndWord(guess)
      }
    }
  }
}