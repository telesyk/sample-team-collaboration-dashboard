import { NavLink } from 'react-router'
import { useAuth } from './AuthContext'
import { PATHS } from '@/constants'

export default function AuthPrivateRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <NavLink to={PATHS.auth} />
}
