import { createContext, useState, useEffect, useContext } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from 'firebase/auth'
import { auth, googleProvider } from '@/utils'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [errorMessage, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, user => setUser(user))
    setLoading(!!user)
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

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
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
      value={{
        user,
        login,
        loginWithGoogle,
        logout,
        signup,
        error: errorMessage,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
