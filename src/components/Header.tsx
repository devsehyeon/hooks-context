import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../context';

const Header = () => {
  const {
    user: { name, isLogin },
  } = useContext(UserContext)!;

  return (
    <Container>
      <Link href="#">Home</Link> Hello, {isLogin ? name : 'Anonymous'}
    </Container>
  );
};

const Container = styled.div``;

const Link = styled.a``;

export default Header;
