import React, { useContext, useState } from 'react'

interface User {
  name: string
  isLogin: boolean
}

interface UserState {
  user: User
  fns: any
}

export const UserContext = React.createContext<UserState | null>(null)

const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>({
    name: 'blackbull',
    isLogin: false,
  })

  const logIn = () => setUser({ ...user, isLogin: true })

  const logOut = () => setUser({ ...user, isLogin: false })

  return (
    <UserContext.Provider value={{ user, fns: { logIn, logOut } }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider

export const useUser = () => {
  const { user } = useContext(UserContext)!

  return user
}

export const useFns = () => {
  const { fns } = useContext(UserContext)!

  return fns
}
