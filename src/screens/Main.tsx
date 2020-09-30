import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { UserContext } from '../context';

const Main = () => {
  const { logIn } = useContext(UserContext)!;
  return (
    <Container>
      <Header />
      <Text>Main Screen</Text>
      <Button onClick={logIn}>Login</Button>
    </Container>
  );
};

const Container = styled.div``;

const Text = styled.p``;

const Button = styled.button``;

export default Main;
