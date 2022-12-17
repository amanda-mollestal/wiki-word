import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

/**
 * Console view class responsible for rendering game information and receiving user input.
 */
export class Console {
  #rl
  #model

  /**
   * Creates an instance of console view.
   * @param {Object} model - Game model object responsible for storing game data and logic.
   */
  constructor (model) {
    this.#model = model

    /**
     * @type {Object} - Readline object responsible for reading user input.
     */
    this.#rl = readline.createInterface({ input, output })
  }

  displayWelcome () {
    console.log(' === WELCOME TO WIKI-WORD === ')
  }

  displayRules () {
    console.log(' ')
    console.log('  You choose a Wikipedia article and the')
    console.log('  game will pick a random word from that article.')
    console.log('  If you guess a word that contains the same letter in the same position as')
    console.log('  the secret word, it will shown in the right place for your next guess.')
    console.log('  If you guess a word that contains the right letter but on the wrong place,')
    console.log('  it will be placed next to the secret word for your next guess.')
    console.log(' ')
    console.log('  Can you guess the secret word?')
    console.log('  If not, just write "i give up".')
    console.log(' ')
  }

  /**
   * Gets user input.
   * @param {string} question - Question to be displayed to the user.
   * @returns {string} - User input.
   */
  async #getInput (question) {
    const answer = await this.#rl.question(`${question} `)
    return answer
  }

  /**
   * Displays the menu and gets user input.
   * @returns {boolean} - True if user wants to play a new game, false if user wants to quit.
   */
  async displayMenu () {

    let displayingMenu = true
    while (displayingMenu) {
      const answer = await this.#getInput(' Press P to play a new game \n Press Q to quit \n = ')

      if (answer.toLowerCase() === 'p') {
        return displayingMenu
      } else if (answer.toLowerCase() === 'q') {
        displayingMenu = false 
        return displayingMenu
      } else {
        console.log(' ')
        console.log('Please enter P or Q')
        console.log(' ')
      }
    }
    
  }

  /**
   * Asks the user for a subject and returns it.
   * @returns {string} - The subject for the game in the right format.
   */
  async getSubject () {
    console.log(' ')
    
    let answer = await this.#getInput('Enter a wiki article subject:')

    answer = answer.trim().toLowerCase()

    const subject = answer.replace(/ /g, '_')

    return subject
  }

  displaySubjectMsg () {
    console.log('There was no specific wiki article for the given subject...')
    console.log('Could you try to be more specific, add a word or maybe rephrase?')
  }

  /**
   * Displays the secret word-hints and the number of guesses.
   */
  displayWordHints () {
    const wordHints = this.#model.getWordHints()
    console.log(' ')
    let str = ''
    for (const x of wordHints.rightPlace) {
      str = str + x + ' '
    }

    if (wordHints.wrongPlace.length > 0) {
      console.log(str + ' [' + wordHints.wrongPlace + ']')
    } else {
      console.log(str)
    }
    console.log(' ')
  }

  /**
   * Asks the user for a guess and returns it.
   * @returns {string} - The word guess from the user.
   */
  async getWordGuess () {
    const guessNr = this.#model.getNrOfGuesses()
    let guessing = true

    while (guessing) {
      let guess = await this.#getInput(`Guess nr ${guessNr + 1}:`)

      guess = guess.trim().toLowerCase()

      if (guess === 'i give up') {
        guessing = false
        return guess
      }

      if (!(/^[a-z]+$/i.test(guess))) {
        console.log('Please guess a word with only letters')
      }

      const word = this.#model.getWord()
      
      if (guess.length === word.length) {
        guessing = false
        return guess
      } else {
        console.log('Please guess a word with ' + word.length + ' letters')
      }
    }
  }

  displayWin () {
    console.log(' ')
    console.log('CONGRATULATIONS!')
    console.log('You guessed the right word "' + this.#model.getWord() + '" in ' + this.#model.getNrOfGuesses() + ' guesses!')
    console.log('You are the best!!!')
    console.log(' ')
  }

  displayGiveUp () {
    console.log(' ')
    console.log('Oh, too difficult? Here is the secret word: ' + this.#model.getWord())
    console.log(' ')
  }
 

  /**
   * Asks the user if he wants to play again with the same subject.
   * @returns {boolean} - True if user wants to play again, false if user wants to go back to the menu.
   */
  async playAgain () {
    const answer = await this.#getInput('Press P to play again with this subject or Q to go back:')
    if (answer == 'p') {
      return true
    } else if (answer == 'q') {
      return false
    } else {
      return false
    }
  }

  /**
   * Closes the readline interface.
   */
  closeReadline () {
    this.#rl.close()
  }
}