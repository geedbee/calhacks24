/* eslint-disable @typescript-eslint/no-require-imports */
import Axios from 'axios'
import * as cheerio from 'cheerio'

const elements: string = 'p, h1, h2'
export default async function getHTML(url: string) {
    const response = await Axios.get(url)
    const $ = cheerio.load(response.data);
    const paragraphElements = $(elements)
    const textElementArray = paragraphElements.map((index, element) => $(element).text()).get();
    let parsedString: string = ""
    textElementArray.forEach((text) => {
        parsedString += (text.charAt(text.length-1) === '.')? ". " : ' ' + text
    })
    return parsedString
}



