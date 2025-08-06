import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '@/context'
import { PATHS } from '@/constants'
import { PageLoader } from '@/components/layouts'

export default function PrivateRoute({ children }) {
  const { user, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && !user) {
      navigate(PATHS.auth)
    }
  }, [user, isLoading, navigate])

  if (isLoading) return <PageLoader />
  if (!user) return null // Or a fallback, but this will be rare

  return children
}
