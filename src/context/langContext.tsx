import React, { useState, useContext, createContext } from 'react'

interface LangProps {
  defaultLang: string
  children: any
  translations: any
}

const LangContext = createContext<any>(null)

const LangContextProvider: React.FunctionComponent<LangProps> = ({
  defaultLang,
  children,
  translations,
}) => {
  const [lang, setLang] = useState(defaultLang)

  const hyperTranslate = (text: string) => {
    if (lang === defaultLang) {
      return text
    } else {
      return translations[lang][text]
    }
  }

  return (
    <LangContext.Provider value={{ setLang, t: hyperTranslate }}>
      {children}
    </LangContext.Provider>
  )
}

export const useSetLang = () => {
  const { setLang } = useContext(LangContext)!

  return setLang
}

export const useT = () => {
  const { t } = useContext(LangContext)!

  return t
}

export default LangContextProvider
