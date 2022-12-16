import { Scraper } from "multi-scraper"

export class WordGetter {
  #scraper
  #listOfWords


  constructor() {
   this.#scraper = new Scraper()
   this.#listOfWords = []
  }

async scrapeWikiForWords (subject) {

   const tags = await this.scrapceUrlForForText(subject)

   for(const tag of tags) {
    if(tag.textContent.includes('may refer to')) {
      throw new Error()
    }
   }

   if(tags.length > 0) {
    const goodWordsArray = []

        for(const tag of tags) {
          const text = tag.textContent

          const wordArray = text.split(" ")

          for(const word of wordArray) {
            if(word.length === 5 && /^[a-z]+$/i.test(word)) {
              goodWordsArray.push(word.toLowerCase())
            }
          }
          
        }
 
        this.#listOfWords = goodWordsArray
        
   } else {
    throw new Error()
   }
   
}

async scrapceUrlForForText(subject) {
  const url = 'https://en.wikipedia.org/wiki/'

  try {
    const html = await this.#scraper.getHtmlFromUrl(url + subject) 
    const tags = await this.#scraper.scrapeHtmlForTags(html, 'p')

    return tags
  } catch (error) {
    return []
  }
}

getRandomWord () {
  const nr = Math.floor(Math.random() * this.#listOfWords.length)

  return this.#listOfWords[nr]

}


}