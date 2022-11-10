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

  displayWelcome () {
    console.log(' == WELCOME TO WIKI-WORD == ')
  }

  async getInput (question) {
    const answer = await this.#rl.question(`${question} `)
    return answer
  }

  async displayMenu () {

    let gettingInput = true
    while(gettingInput) {
      const answer = await this.getInput('Press P to play a new game or Q to quit:')

      if(answer.toLowerCase() === 'p') {
        return true
      } else if (answer.toLowerCase() === 'q') {
        return false
      } else {
        console.log('Please enter P or Q')
      }
    }
    
  }

  async getSubject () {

    let gettingSubject = true
    while(gettingSubject) {
      const answer = await this.getInput('Enter a wiki article subject:')

      const answerArray = answer.split(" ")
      
     
      // ändra så model har en subject ok metod? eller bara bryta ut
      let subject
      for(const word of answerArray) {
        if(subject === undefined) {
          subject = word
        } else {
          subject = subject + '_' + word
        }
      }
       
      let subjectOk = true
      for(let i = 0; i < answerArray.length; i++) {
        if(!(/^[a-z]+$/i.test(answerArray[i]))) {
          console.log('Please enter a subject with only letters!')
          i = answerArray.length
          subjectOk = false
        } 
      }

      if(subjectOk) {
        return subject
      }

    }
    

    
  }

  displayWordHints (arrayOfHints) {
    let str = ''
    for(const x of arrayOfHints) {
      str = str + x + ' '
    }
    console.log(str)
  }

  async getWordGuess(nr) {
    const guess = await this.getInput(`Guess nr ${nr + 1}:`)
    return guess
  }

 

  async playAgain() {
    const answer = await this.getInput('Press P to play again with this subject or Q to go back:')
    if(answer == 'p') {
      return true
    } else if (answer == 'q') {
      return false
    } else {
      return false
    }
  }

  closeReadline () {
    this.#rl.close()
  }


}