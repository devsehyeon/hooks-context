import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { useFns } from '../context'

const Main = () => {
  const { logIn, logOut } = useFns()
  return (
    <Container>
      <Header />
      <Text>Main Screen</Text>
      <Button onClick={logIn}>Login</Button>
      <Button onClick={logOut}>Logout</Button>
    </Container>
  )
}

const Container = styled.div``

const Text = styled.p``

const Button = styled.button``

export default Main
