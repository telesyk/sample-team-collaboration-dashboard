import { createContext, useState, useEffect, useContext } from 'react'
import {
  login as userLogin,
  logout as userLogout,
  getCurrentUser,
} from '../../utils'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = getCurrentUser()
    if (user) setUser(user)
  }, [])

  const login = async (email, password) => {
    try {
      const loggedUser = await userLogin(email, password)
      setUser(loggedUser)
    } catch (error) {
      throw error
    }
  }

  const logout = async () => {
    userLogout()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
