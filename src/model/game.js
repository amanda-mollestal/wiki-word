import { WordGetter } from "./wordgetter.js";

/**
 * Game model class responsible for storing game data and logic.
 */
export class Game {
  #wordGetter
  #word
  #wordHints
  #subject
  #nrOfGuesses

  /**
   * Creates an instance of game model.
   */
  constructor () {
    /**
     * @type {Object} - WordGetter object responsible for scraping Wikipedia for words.
     */
    this.#wordGetter = new WordGetter()

    /**
     * @type {string} - The subject for the game.
     */
    this.#subject = ''

    /**
     * @type {string} - The word for the game.
     */
    this.#word = ''

    /**
     * @type {Object} - Object created to contain the hints for the word.
     */
    this.#wordHints = {}

    /**
     *  @type {Array} - Array containing the hints on the right place.
     */
    this.#wordHints.rightPlace = []

    /**
     * @type {Array} - Array containing the hints on the wrong place.
     */
    this.#wordHints.wrongPlace = []

    /**
     * @type {number} - The number of guesses made for the current word.
     */
    this.#nrOfGuesses = 0
  }

  /**
   * Scrapes Wikipedia for words related to the subject and sets the subject for the game.
   * @param {string} subject - The subject for the game e.g. "football", "computer_programming" or "c++".
   * @throws {Error} - If there is an error scraping Wikipedia for words.
   */
  async setSubject (subject) {
    try {
      await this.#wordGetter.scrapeWikiForWords(subject)

      this.#subject = subject
   
    } catch (error) {
      error.msg = 'Error scraping Wikipedia for words.'
      throw error
    }
  }

  /**
   * Gets the subject for the game.
   * @returns {string} - The subject for the game.
   */
  getSubject () {
    return this.#subject
  }

  /**
   * Generates a random word from the list of words scraped from Wikipedia.
   */
  generateWord () {
    this.#nrOfGuesses = 0
    this.#word = this.#wordGetter.getRandomWord()

    this.#wordHints.rightPlace = []
    this.#wordHints.wrongPlace = []

    for (let i = 0; i < this.#word.length; i++) {
      this.#wordHints.rightPlace[i] = '_'
    }
  }

  /**
   * Gets the secret word for the game.
   * @returns {string} - The secret word for the game.
   */
  getWord () {
    return this.#word
  }

  /**
   * Gets the current word hints.
   * @returns {Object} - The word current hints.
   */
  getWordHints () {
    return this.#wordHints
  }

  /**
   * Gets the number of guesses made for a current word.
   * @returns {number} - The number of guesses for the current word.
   */
  getNrOfGuesses () {
    return this.#nrOfGuesses
  }

  /**
   * Checks if the guess is correct.
   * @param {string} guess - The guess to check.
   * @returns {boolean} - True if the guess is correct, false otherwise.
   */
  isGuessRight (guess) {
    this.#nrOfGuesses = this.#nrOfGuesses + 1
    return (guess === this.#word)
  }

  /**
   * Compares the guess to the secret word and updates the word hints.
   * @param {string} guess - The guess to compare to the secret word.
   */
  compareGuessAndWord (guess) {
    for (let i = 0; i < guess.length; i++) {

      if (guess[i] === this.#word[i]) {

        this.#updateRightLetterRightPlace(i, guess)

      } else if (this.#word.includes(guess[i])) {

        this.#updateRightLetterWrongPlace(guess[i])

      }
    }
  }

  /**
   * Updates the word hints if the letter is in the right place.
   * @param {number} i - The index of the letter in the word.
   * @param {string} guess - The guess.
   */
  #updateRightLetterRightPlace (i, guess) {
    this.#wordHints.rightPlace[i] = this.#word[i]

    if (this.#wordHints.wrongPlace.includes(guess[i])) {

      const index = this.#wordHints.wrongPlace.indexOf(guess[i])
    
      this.#wordHints.wrongPlace.splice(index, 1)
    } 
  }

  /**
   * Updates the word hints if the letter is in the wrong place.
   * @param {string} letter - The letter.
   */
  #updateRightLetterWrongPlace (letter) {

    const occurrencesOfLetterInWrongPlaceArray = this.#wordHints.wrongPlace.reduce((total, index) => total + (index === letter), 0)
    const occurrencesOfLetterInRightPlaceArray = this.#wordHints.rightPlace.reduce((total, index) => total + (index === letter), 0)

    let occurrencesOfLetterInWord = 0
    for(let i = 0; i < this.#word.length; i++) { 
      if (this.#word[i] === letter) {
        occurrencesOfLetterInWord++
      }
    }

    if (occurrencesOfLetterInWrongPlaceArray < occurrencesOfLetterInWord && occurrencesOfLetterInWord > occurrencesOfLetterInRightPlaceArray) {
      this.#wordHints.wrongPlace.push(letter)
    }
  }
}