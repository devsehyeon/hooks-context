import React from 'react'
import Main from './screens/Main'
import LangContextProvider from './context/langContext'
import translations from './data/translations'

function App() {
  return (
    <LangContextProvider defaultLang="en" translations={translations}>
      <Main />
    </LangContextProvider>
  )
}

export default App
