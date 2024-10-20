/* eslint-disable @typescript-eslint/no-require-imports */
import Axios, {AxiosResponse} from 'axios'
import * as cheerio from 'cheerio'

const elements: string = 'p, h1, h2'
export default async function getHTML(url: string) {
    const response = await Axios.get(url)
    const parsed = parseResponse(response)
    //TODO remove log statement
    return parsed
}

//Parses a web page retrieved with Axios using cheerio. 
function parseResponse(response: AxiosResponse) {
    const $ = cheerio.load(response.data);
    const paragraphElements = $(elements)
    const textElementArray = paragraphElements.map((index, element) => $(element).text()).get();
    let mergedString: string = ""
    textElementArray.forEach((text) => {
        mergedString += (text.charAt(text.length-1) === '.')? ". " : ' ' + text
    })
    return mergedString
}



