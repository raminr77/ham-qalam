import { removeWord } from './words.js'
import { wordValidator } from './validator.js'

const wordOfText = (txt = '') => {
    let text = txt.value.replace(/(\r\n|\n|\r)/gm, ' ').split(' ')
    let obj = {}
    for(let word of text){
        if(wordValidator(word)) continue
        obj[word] = obj[word] ? obj[word] + 1 : 1
    }
    return obj
}


const findCommon = (text1 = {}, text2 = {}) => {
    let commons = []
    Object.entries(text1).map(a => {
        Object.entries(text2).map(b => {
            if(a[0] === b[0] && !removeWord(b[0])){
                // text math
                commons.push(b[0])
            }
        })
    })
    return commons
}

export { wordOfText , findCommon }