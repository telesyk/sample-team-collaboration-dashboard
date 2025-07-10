import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function AuthPrivateRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" />
}
