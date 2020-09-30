import React from 'react'
import styled from 'styled-components'
import { useUser } from '../context'

const Header = () => {
  const { name, isLogin } = useUser()

  return (
    <Container>
      <Link href="#">Home</Link> Hello, {isLogin ? name : 'Anonymous'}
    </Container>
  )
}

const Container = styled.div``

const Link = styled.a``

export default Header
