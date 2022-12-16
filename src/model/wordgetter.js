import { Scraper } from "multi-scraper"

export class WordGetter {
  #scraper
  #listOfWords


  constructor() {
   this.#scraper = new Scraper()
   this.#listOfWords = []
  }

async scrapeWikiForWords (subject) {
  
  const pTags = await this.scrapceUrlForForText(subject)

  this.validateTagsAreFromArticle(pTags)

  this.getWordsFromTags(pTags)

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

validateTagsAreFromArticle(tags) {
  if(tags.length === 0) {
    throw new Error()
  }
  
  for(const tag of tags) {
    if(tag.textContent.includes('may refer to')) {
      throw new Error()
    }
   }
}

getWordsFromTags(tags) {
  const words = []

  for(const tag of tags) {
    const text = tag.textContent

    const wordArray = text.split(" ")

    for(const word of wordArray) {
      if(word.length === 5 && /^[a-z]+$/i.test(word)) {
        words.push(word.toLowerCase())
      }
    }
    
  }

  this.#listOfWords = words
}

getRandomWord () {
  const nr = Math.floor(Math.random() * this.#listOfWords.length)

  return this.#listOfWords[nr]

}


}