import { wordOfText , findCommon } from './assets/js/functions.js'

let tx1 = document.querySelector('#tx1')
let tx2 = document.querySelector('#tx2')
let btn = document.querySelector('.check-btn')

btn.addEventListener('click' , async () => {
    cleanResults()
    let text1 = wordOfText(tx1)
    let text2 = wordOfText(tx2)

    if(tx1.value === '' && tx1.value === ''){
        alert('لطفا متن خود را وارد کنید.')
        throw new Error('Enter Your Texts ...')
    }

    let commons = findCommon( text1 , text2 )
    let commons_len = commons.length
    if(commons_len > 0){
        let mainTextLen = Object.entries( text1 ).length
        let percent = 100 * commons_len / mainTextLen
        showResult(commons , percent)
    } else {
        showError()
        throw new Error('Not Commons')
    }
})