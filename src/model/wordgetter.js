import { Scraper } from "multi-scraper"

export class WordScraper {
  #scraper
  #word
  #listOfWords


  constructor() {
   this.#scraper = new Scraper()
   this.#listOfWords = []
  }

}