import React, { useState } from 'react';

interface User {
  name: string;
  isLogin: boolean;
}

interface UserState {
  user: User;
  logIn: () => void;
}

const useUser = () => {
  const [user, setUser] = useState<User>({
    name: 'blackbull',
    isLogin: false,
  });

  const logIn = () => setUser({ ...user, isLogin: true });

  return { user, logIn };
};

export const UserContext = React.createContext<UserState | null>(null);

const UserContextProvider = ({ children }: any) => {
  const { user, logIn } = useUser();
  return (
    <UserContext.Provider value={{ user, logIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
