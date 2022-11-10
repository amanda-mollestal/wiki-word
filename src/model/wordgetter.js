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
      console.log('may refer tooooo')
    }
   }


   console.log(tags)
   if(tags.length > 0) {
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
        console.log(goodWordsArray)
        this.#listOfWords = goodWordsArray
   }

    
   
}

async scrapceUrlForForText(subject) {
  const url = 'https://en.wikipedia.org/wiki/'

  try {
    const html = await this.#scraper.getHtmlFromUrl(url + subject) 
    const tags = await this.#scraper.scrapeHtmlForTags(html, 'p')
    //console.log(tags)
    return tags
  } catch (error) {
    console.log('There were no articals matching your subject')
    return []
  }
}

getRandomWord () {
  const nr = Math.floor(Math.random() * this.#listOfWords.length);
  //console.log(this.#listOfWords)

  return this.#listOfWords[nr]
  console.log(this.#listOfWords[nr])

}


}