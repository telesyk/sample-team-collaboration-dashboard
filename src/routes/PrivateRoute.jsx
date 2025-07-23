import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '@/context'
import { PATHS } from '@/constants'
import { Spinner } from '@/components'

export default function PrivateRoute({ children }) {
  const { user, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoading) return
    if (!user) navigate(PATHS.auth)
  }, [user, isLoading])

  if (isLoading) return <Spinner />

  return children
}
