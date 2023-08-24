const { defaultLanguage } = require("../../prismic/prismic-config")

exports.linkResolver = doc => {
  if (doc.type === "blog") {
    return doc.lang === defaultLanguage
      ? `/blog/${doc.uid}`
      : `/${doc.lang.slice(0, doc.lang.indexOf("-"))}/blog/${doc.uid}`
  }

  if (doc.type === "blogmain") {
    return doc.lang === defaultLanguage
      ? `/blog`
      : `/${doc.lang.slice(0, doc.lang.indexOf("-"))}/blog`
  }

  if (doc.type === "contact") {
    return doc.lang === defaultLanguage
      ? `/contact`
      : `/${doc.lang.slice(0, doc.lang.indexOf("-"))}/contact`
  }

  if (doc.type === "homepage") {
    return doc.lang === defaultLanguage
      ? "/"
      : `${doc.lang.slice(0, doc.lang.indexOf("-"))}`
  }

  return "/"
}
