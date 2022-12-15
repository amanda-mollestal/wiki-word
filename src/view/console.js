import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export class Console {
  #rl
  #model

  constructor (model) {
    this.#model = model
    this.#rl = readline.createInterface({ input, output })
  }

  closeReadline () {
    this.#rl.close()
  }

  displayWelcome () {
    console.log(' === WELCOME TO WIKI-WORD === ')
  }

  displayRules () {
    console.log(' ')
    console.log('  You choose a Wikipedia article and the\n  game will pick a random word from that article.\n  Can you guess the secret word?\n  If not, just write "i give up".')
    console.log(' ')

  }

  async getInput (question) {
    const answer = await this.#rl.question(`${question} `)
    return answer
  }

  async displayMenu () {

    let gettingInput = true
    while(gettingInput) {
      const answer = await this.getInput(' Press P to play a new game \n Press Q to quit \n = ')

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
      console.log(' ')
      let answer = await this.getInput('Enter a wiki article subject:')

      answer = answer.trim().toLowerCase()

      const answerArray = answer.split(" ")
      
     
      // ändra så model har en subject ok metod? eller bara bryta ut
      let subject
      for(const word of answerArray) {

        if(subject === undefined && word.length > 0) {
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

  displaySubjectMsg () {
    console.log('There was no specific wiki article for the given subject...')
    console.log('Could you try to be more specific, add a word or maybe rephrase?')
  }

  displayWordHints () {
    const wordHints = this.#model.getWordHints()
    console.log(' ')
    let str = ''
    for(const x of wordHints.rightPlace) {
      str = str + x + ' '
    }

    
    if(wordHints.wrongPlace.length > 0) {
      console.log(str + ' [' + wordHints.wrongPlace + ']')
    } else {
      console.log(str)
    }

    console.log(' ')

  }

  async getWordGuess() {

    const guessNr = this.#model.getNrOfGuesses()

    while (true) {
      const guess = await this.getInput(`Guess nr ${guessNr + 1}:`)

      if(guess === 'i give up') {
        return guess
      }

      if(guess === 'amanda är bäst') {
        console.log(this.#model.getWord())
      }

      if(!(/^[a-z]+$/i.test(guess))) {
        console.log('Please guess a word with only letters')
      }

      const word = this.#model.getWord()
      
      if(guess.length === word.length) {
        return guess
      } else {
        console.log('Please guess a word with ' + word.length + ' letters')
      }
     
    }

  
  }

  displayWin() {
    const word = this.#model.getWord()
    console.log(' ')
    console.log('CONGRATULATIONS!')
    console.log('You guessed the right word "' + word + '" in ' + this.#model.getNrOfGuesses() + ' guesses!')
    console.log('You are the best!!!')
    console.log(' ')


  }

  displayGiveUp() {
    const word = this.#model.getWord()
    console.log(' ')
    console.log('Oh, too difficult? Here is the secret word: ' + word)
    console.log(' ')

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