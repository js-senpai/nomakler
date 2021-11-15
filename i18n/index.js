// @ts-ignore
const en = require('./index.en.json');
const ru = require('./index.ru.json')

const i18n = {
    translations: {
        en: en.i18n,
        ru: ru.i18n,
    },
    defaultLang: 'en',
}

module.exports = i18n;
