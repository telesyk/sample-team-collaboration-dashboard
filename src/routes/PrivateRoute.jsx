import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '@/context'
import { PATHS } from '@/constants'

export default function PrivateRoute({ children }) {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user === undefined) return // Wait for auth to resolve
    if (!user) navigate(PATHS.auth)
  }, [user, navigate])

  return children
}
