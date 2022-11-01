import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export class Console {
  #rl

  constructor () {
    this.#rl = readline.createInterface({ input, output })
  }

  closeReadline () {
    this.#rl.close()
  }

  printWelcome () {
    console.log(' == WELCOME TO WIKI-WORD == ')
  }

  async getInput (question) {
    const answer = await this.#rl.question(`${question} `)
    return answer
  }

  async printMenu () {
    const answer = await this.getInput('Press P to play a new game or Q to quit:')

    if(answer == 'p') {
      return true
    } else if (answer == 'q') {
      return false
    } else {
      return false
    }

  }

  async getSubject () {
     const answer = await this.getInput('Enter a wiki article subject:')
     return answer
  }

  printWordHints (arrayOfHints) {
    let str = ''
    for(const x of arrayOfHints) {
      str = str + x + ' '
    }
    console.log(str)
  }

  async getWordGuess() {
    const guess = await this.getInput('Make a guess: ')
    return guess
  }

  closeReadline () {
    this.#rl.close()
  }


}