import { createContext, useReducer, useEffect, useContext } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from 'firebase/auth'
import { auth, googleProvider } from '@/utils'
import { ACTION } from '@/constants'
import authReducer from './authReducer.js'

export const AuthContext = createContext(null)

const initialState = {
  user: null,
  error: null,
  isLoading: true,
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      dispatch({ type: ACTION.SET_USER, payload: user })
    })
  }, [])

  const login = async (email, password) => {
    dispatch({ type: ACTION.SET_LOADING, payload: true })
    try {
      await signInWithEmailAndPassword(auth, email, password)
      dispatch({ type: ACTION.CLEAR_ERROR })
    } catch (error) {
      dispatch({
        type: ACTION.SET_ERROR,
        payload: { message: error.message, code: error.code },
      })
      console.error(error)
    } finally {
      dispatch({ type: ACTION.SET_LOADING, payload: false })
    }
  }

  const loginWithGoogle = async () => {
    dispatch({ type: ACTION.SET_LOADING, payload: true })
    try {
      await signInWithPopup(auth, googleProvider)
      dispatch({ type: ACTION.CLEAR_ERROR })
    } catch (error) {
      dispatch({
        type: ACTION.SET_ERROR,
        payload: { message: error.message, code: error.code },
      })
      console.error(error)
    } finally {
      dispatch({ type: ACTION.SET_LOADING, payload: false })
    }
  }

  const signup = async (email, password) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      dispatch({ type: 'CLEAR_ERROR' })
    } catch (error) {
      dispatch({
        type: 'SET_ERROR',
        payload: { message: error.message, code: error.code },
      })
      console.error(error)
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  const logout = async () => {
    dispatch({ type: 'SET_LOADING', payload: true })
    await signOut(auth)
    dispatch({ type: 'SET_USER', payload: null })
    dispatch({ type: 'SET_LOADING', payload: false })
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        login,
        loginWithGoogle,
        logout,
        signup,
        error: state.error,
        isLoading: state.isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
