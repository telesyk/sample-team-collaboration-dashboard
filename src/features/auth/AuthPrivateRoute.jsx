import { Navigate } from 'react-router'
import { useAuth } from '@/context'
import { PATHS } from '@/constants'

export default function AuthPrivateRoute({ children }) {
  const { user } = useAuth()

  return !!user ? children : <Navigate to={PATHS.auth} />
}
