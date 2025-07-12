import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { PATHS } from '@/constants'

export default function AuthPrivateRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to={PATHS.auth} />
}
