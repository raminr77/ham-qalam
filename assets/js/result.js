// result
let result = document.querySelector('.results')
// bad result
let badResult = document.querySelector('.bad-result')
// nice result
let words = document.querySelector('.words')
let percent = document.querySelector('.percent')
let goodResult = document.querySelector('.good-result')

const showError = () => {
    result.classList.add('show')
    badResult.style.display = 'block'
}

const showResult = (arr = [] , per = 0) => {
    result.classList.add('show')
    goodResult.style.display = 'block'
    percent.innerHTML = per.toFixed(2)
    arr.forEach(item => {
        let node = document.createElement('li')
        node.innerHTML = item
        words.appendChild(node)
    })
}

const cleanResults = () => {
    words.innerHTML = ''
    percent.innerHTML = 0
    result.classList.remove('show')
    badResult.style.display = 'none'
    goodResult.style.display = 'none'
}