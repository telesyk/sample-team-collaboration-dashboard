import { createContext, useState, useEffect, useContext } from 'react'
import {
  login as userLogin,
  logout as userLogout,
  getCurrentUser,
} from '../../utils'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [data, setData] = useState(null) /* data = {user, errorMessage} */

  useEffect(() => {
    const user = getCurrentUser()
    if (user) setData(prev => ({ ...prev, user: user }))
  }, [])

  const login = async (email, password) => {
    try {
      const loginResponse = await userLogin(email, password)

      !loginResponse?.errorMessage
        ? setData({
            user: loginResponse,
            errorMessage: null,
          })
        : setData({
            ...loginResponse,
            user: null,
          })
    } catch (error) {
      throw error
    }
  }

  const logout = async () => {
    userLogout()
    setData(null)
  }

  return (
    <AuthContext.Provider value={{ ...data, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
