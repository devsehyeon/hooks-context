import React from 'react'
import styled from 'styled-components'
import { useSetLang, useT } from '../context/langContext'

const Main = () => {
  const setLang = useSetLang()
  const t = useT()
  console.log('[setLang]', setLang)
  console.log('[t]', t)
  return (
    <Container>
      <Text>{t('Hello!')}</Text>
      <Button onClick={() => setLang('es')}>{t('Translate')}</Button>
    </Container>
  )
}

const Container = styled.div``

const Text = styled.p``

const Button = styled.button``

export default Main
