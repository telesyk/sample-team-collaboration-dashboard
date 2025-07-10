import { createContext, useState, useEffect, useContext } from 'react'
import {
  login as fakeLogin,
  logout as fakeLogout,
  getCurrentUser,
} from '../../utils'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = getCurrentUser()
    if (user) setUser(user)
  }, [])

  const login = async (email, password) => {
    try {
      const loggedUser = await fakeLogin(email, password)
      setUser(loggedUser)
    } catch (error) {
      throw error
    }
  }

  const logout = async () => {
    fakeLogout()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
