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
      //console.log('may refer tooooo')
      //this.scrapeUrlForSuggestion(subject, tag.textContent)
      return false
    }
   }


   //console.log(tags)
   if(tags.length > 0) {
    const goodWordsArray = []

        for(const tag of tags) {
          const text = tag.textContent

          const wordArray = text.split(" ")

          for(const word of wordArray) {
            if(word.length > 4 && word.length < 10 && /^[a-z]+$/i.test(word)) {
              goodWordsArray.push(word.toLowerCase())
            }
          }
          
        }
        //console.log(goodWordsArray)
        this.#listOfWords = goodWordsArray
        return true
   } else {
    return false
   }
   
}

/*async scrapeUrlForSuggestion(subject, words) {

  let ret = words.replace(/may refer to:/g,'')
  ret = ret.replace(/or/g,'')
  ret = ret.replace(/ /g,'');
  ret = ret.replace('\n','');
  const wordArray = ret.split(",")

  console.log(wordArray)

  const url = 'https://en.wikipedia.org/wiki/'

    const html = await this.#scraper.getHtmlFromUrl(url + subject) 
    const tags = await this.#scraper.scrapeHtmlForTagAttribute(html, 'a', 'title')
    //const tags = await this.#scraper.scrapeHtmlForTags(html, 'ul')
  
    //console.log(tags)

    const suggestions = []

    for(const tag of tags) {
      
      for(let i = 0; i < wordArray.length; i++) {
        if(tag !== undefined && tag.includes(wordArray[i]) && /^[a-z]/i.test(tag)) {
          suggestions.push(tag)
          i = wordArray.length
        }
      }

    }

    console.log(suggestions)

}*/ 

async scrapceUrlForForText(subject) {
  const url = 'https://en.wikipedia.org/wiki/'

  try {
    const html = await this.#scraper.getHtmlFromUrl(url + subject) 
    const tags = await this.#scraper.scrapeHtmlForTags(html, 'p')
    //console.log(tags)
    return tags
  } catch (error) {
    //console.log('There were no articals matching your subject')
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