import React from 'react';
import Main from './screens/Main';
import UserContextProvider from './context';

function App() {
  return (
    <UserContextProvider>
      <Main />
    </UserContextProvider>
  );
}

export default App;
