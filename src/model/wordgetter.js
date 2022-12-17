import { Scraper } from "multi-scraper"

/**
 * Class responsibale for scraping and storing words from wikipedia articles related to a subject.
 */
export class WordGetter {
  
  /**
   * @type {Object} - Scraper object used for scraping Wikipedia for words.
   */
  #scraper
  #listOfWords

  /**
   * Creates an instance of word getter.
   */
  constructor () {
    this.#scraper = new Scraper()
    this.#listOfWords = []
  }

  /**
   * Scrapes Wikipedia articale for words.
   * @param {string} subject - The subject of the Wikipedia article.
   */
  async scrapeWikiForWords (subject) {
  
    const pTags = await this.scrapceUrlForForText(subject)

    this.validateTagsAreFromArticle(pTags)

    this.getWordsFromTags(pTags)
  }

/**
 * Scrapes a Wikipedia article for p tags.
 * @param {string} subject - The subject of the Wikipedia article.
 * @returns {Array} - An array of p tags or an empty array if there is an error.
 */
  async scrapceUrlForForText (subject) {
    const url = 'https://en.wikipedia.org/wiki/'

    try {
      const html = await this.#scraper.getHtmlFromUrl(url + subject) 
      const tags = await this.#scraper.scrapeHtmlForTags(html, 'p')

      return tags
    } catch (error) {
      return []
    }
  }

  /**
   * Validates that the p tags are from an article.
   * @param {Array} tags - An array of p tags.
   * @throws {Error} - If the p tags are from the "may refer to"-page or if array is empty.
   */
  validateTagsAreFromArticle (tags) {
    if (tags.length === 0) {
      throw new Error()
    }
    
    for (const tag of tags) {
      if (tag.textContent.includes('may refer to')) {
        throw new Error()
      }
    }
  }

  /**
   * Gets words from p tags and stores them in an listOfWords.
   * @param {Array} tags - An array of p tags.
   */
  getWordsFromTags (tags) {
    const words = []

    for (const tag of tags) {
      const text = tag.textContent

      const wordArray = text.split(" ")

      for (const word of wordArray) {
        if (word.length === 5 && /^[a-z]+$/i.test(word)) {
          words.push(word.toLowerCase())
        }
      } 
    }
    this.#listOfWords = words
  }

  /**
   * Gets a random word from the list of words.
   * @returns {string} - A random word from the list of words.
   */
  getRandomWord () {
    const nr = Math.floor(Math.random() * this.#listOfWords.length)
    return this.#listOfWords[nr]
  }
}