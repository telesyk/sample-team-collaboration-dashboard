import {
  createContext,
  useReducer,
  useEffect,
  useContext,
  ReactNode,
} from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from 'firebase/auth'
import { auth, googleProvider } from '@/utils'
import { ACTION } from '@/constants'
import reducer from './reducer.js'
import { AuthContextType } from '@/types.js'

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextType | null>(null)

const initialState = {
  user: null,
  error: null,
  isLoading: true,
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      dispatch({ type: ACTION.AUTH.SET_USER, payload: user })
    })
  }, [])

  const login = async (email: string, password: string): Promise<void> => {
    dispatch({ type: ACTION.AUTH.SET_LOADING, payload: true })

    try {
      await signInWithEmailAndPassword(auth, email, password)
      dispatch({ type: ACTION.AUTH.CLEAR_ERROR })
    } catch (error: unknown) {
      if (error instanceof Error && 'code' in error) {
        const authError = error as Error & { code: string }
        dispatch({
          type: ACTION.AUTH.SET_ERROR,
          payload: { message: authError.message, code: authError.code },
        })
        console.error(authError)
      } else {
        console.error('Unknown error during login', error)
      }
    } finally {
      dispatch({ type: ACTION.AUTH.SET_LOADING, payload: false })
    }
  }

  const loginWithGoogle = async (): Promise<any> => {
    dispatch({ type: ACTION.AUTH.SET_LOADING, payload: true })
    try {
      await signInWithPopup(auth, googleProvider)
      dispatch({ type: ACTION.AUTH.CLEAR_ERROR })
    } catch (error: unknown) {
      if (!(error instanceof Error)) {
        console.error('Unknown error during Google login', error)
        return
      }
      // Assuming error has a message and code property
      // Adjust this based on your error structure
      if (!('message' in error) || !('code' in error)) {
        console.error(
          'Error during Google login does not have expected structure',
          error
        )
        return
      }

      dispatch({
        type: ACTION.AUTH.SET_ERROR,
        payload: { message: error.message, code: error.code },
      })
    } finally {
      dispatch({ type: ACTION.AUTH.SET_LOADING, payload: false })
    }
  }

  const signup = async (email: string, password: string): Promise<any> => {
    dispatch({ type: ACTION.AUTH.SET_LOADING, payload: true })
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      dispatch({ type: ACTION.AUTH.CLEAR_ERROR })
    } catch (error: unknown) {
      if (!(error instanceof Error)) {
        console.error('Unknown error during signup', error)
        return
      }
      // Assuming error has a message and code property
      // Adjust this based on your error structure
      if (!('message' in error) || !('code' in error)) {
        console.error(
          'Error during signup does not have expected structure',
          error
        )
        return
      }

      dispatch({
        type: ACTION.AUTH.SET_ERROR,
        payload: { message: error.message, code: error.code },
      })
      console.error(error)
    } finally {
      dispatch({ type: ACTION.AUTH.SET_LOADING, payload: false })
    }
  }

  const logout = async (): Promise<any> => {
    dispatch({ type: ACTION.AUTH.SET_LOADING, payload: true })
    await signOut(auth)
    dispatch({ type: ACTION.AUTH.SET_USER, payload: null })
    dispatch({ type: ACTION.AUTH.SET_LOADING, payload: false })
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
