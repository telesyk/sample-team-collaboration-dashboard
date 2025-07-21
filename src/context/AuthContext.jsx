import { createContext, useState, useEffect, useContext } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '@/features/auth/firebase'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [errorMessage, setError] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, user => setUser(user))
  }, [])

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      setError(prev => ({
        ...prev,
        message: error.message,
        code: error.code,
      }))
      console.error(error)
    }
  }

  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.error(error)
      setError(prev => ({
        ...prev,
        message: error.message,
        code: error.code,
      }))
    }
  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, signup, error: errorMessage }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
