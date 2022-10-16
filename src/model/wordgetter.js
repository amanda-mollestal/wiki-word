import { Scraper } from "multi-scraper"

export class WordGetter {
  #scraper
  #listOfWords


  constructor() {
   this.#scraper = new Scraper()
   this.#listOfWords = []
  }


async scrapeWikiForWords (subject) {

  const url = 'https://en.wikipedia.org/wiki/'

  const html = await this.#scraper.getHtmlFromUrl(url + subject) 
    const tags = await this.#scraper.scrapeHtmlForTags(html, 'p')

    const goodWordsArray = []

    for(const tag of tags) {
      const text = tag.textContent

      const wordArray = text.split(" ")

      for(const word of wordArray) {
        if(word.length > 5 && /^[a-z]+$/i.test(word)) {
          goodWordsArray.push(word)
        }
      }
      
    }
  
    this.#listOfWords = goodWordsArray
   
}

getRandomWord () {
  const nr = Math.floor(Math.random() * this.#listOfWords.length);
  //console.log(this.#listOfWords)

  console.log(this.#listOfWords[nr])

}


}