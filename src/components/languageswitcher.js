import React from "react"
import { navigate } from "gatsby"

import { linkResolver } from "../utils/linkResolver"

const LanguageSwitcher = ({ lang, altLang }) => {
  const currentLangOption = (
    //render the current language
    <option value={lang}>{lang.slice(0, 2).toUpperCase()}</option>
  )

  const alternateLangOptions = altLang.map((altLang, index) => (
    <option value={linkResolver(altLang)} key={`alt-lang-${index}`}>
      {altLang.lang.slice(0, altLang.lang.indexOf("-")).toUpperCase()}
    </option>
  ))

  const handleLangChange = e => {
    navigate(e.target.value)
  }

  return (
    <i className="language-switcher  ">
      <select
        value={lang}
        onChange={handleLangChange}
        className="dark:bg-black bg-[#322C7A] sm:bg-stext"
      >
        {currentLangOption}
        {alternateLangOptions}
      </select>
    </i>
  )
}

export default LanguageSwitcher
