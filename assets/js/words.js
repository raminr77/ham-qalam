// TODO: I need found a short solution for removing all verbs and some of the words.

const removeWord = (str = '') => {
    return str === 'یک' ||
    str === 'دو' ||
    str === 'سه' ||
    str === 'چهار' ||
    str === 'پنج' ||
    str === 'شش' ||
    str === 'هفت' ||
    str === 'هشت' ||
    str === 'نه' ||
    str === 'ده' ||
    str === 'بله' ||
    str === 'خیر' ||
    str === 'اره' ||
    str === 'من' ||
    str === 'تو' ||
    str === 'او' ||
    str === 'ما' ||
    str === 'شما' ||
    str === 'آنها' ||
    str === 'اون' ||
    str === 'می' ||
    str === 'این' ||
    str === 'آن' ||
    str === 'که' ||
    str === 'از' ||
    str === 'به' ||
    str === 'با' ||
    str === 'برای' ||
    str === 'تا' ||
    str === 'اگر' ||
    str === 'شد' ||
    str === 'نشد' ||
    str === 'کرد' ||
    str === 'نکرد' ||
    str === 'است' ||
    str === 'هست' ||
    str === 'نیست' ||
    str === 'اومد' ||
    str === 'نیومد' ||
    str === 'هس' ||
    str === 'نیس' ||
    str === 'برو' ||
    str === 'نرو' ||
    str === 'اومد' ||
    str === 'رفت' ||
    str === 'خود' ||
    str === 'خورد' ||
    str === 'در' ||
    str === 'و' ||
    str === 'هم' ||
    str === 'را' ||
    str === 'ها' ||
    str === 'بر' ||
    str === 'اش' ||
    str === 'ات' ||
    str === 'ای' ||
    str === '1' ||
    str === '2' ||
    str === '3' ||
    str === '4' ||
    str === '5' ||
    str === '6' ||
    str === '7' ||
    str === '8' ||
    str === '9' ||
    str === '0' ||
    str.match('تید') !== null ||
    str.match('تند') !== null ||
    str.match('اند') !== null ||
    str.match('\'') !== null ||
    str.match('"') !== null ||
    str.match('،') !== null ||
    str === 'ات'
   
}

export { removeWord }