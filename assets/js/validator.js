// Is there a better solution for all character removal ?

const wordValidator = (str = '') => {
    return  str === '' ||
            str === '~' ||
            str === '!' ||
            str === '@' ||
            str === '#' ||
            str === '$' ||
            str === '%' ||
            str === '^' ||
            str === '&' ||
            str === '*' ||
            str === '(' ||
            str === ')' ||
            str === '_' ||
            str === '-' ||
            str === '=' ||
            str === '+' ||
            str === ';' ||
            str === '/' ||
            str === '.' ||
            str === '|' ||
            str === '؟' ||
            str === '?' ||
            str === ',' ||
            str === '،' ||
            str === '\'' ||
            str === '\"' ||
            str === '\\'
}

export { wordValidator }