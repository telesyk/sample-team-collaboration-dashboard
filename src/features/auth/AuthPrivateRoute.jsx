import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from './AuthContext'
import { PATHS } from '@/constants'

export default function AuthPrivateRoute({ children }) {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate(PATHS.auth)
  }, [])

  return children
}
