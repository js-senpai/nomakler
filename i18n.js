module.exports = {
  browserLanguageDetection: true,
  serverLanguageDetection:true,
  defaultLocale: "ru",
  locales: ["en", "ru"],
  pages: {
    '*': ['common','button'],
    '/': ['home','apartment'],
  },
}
