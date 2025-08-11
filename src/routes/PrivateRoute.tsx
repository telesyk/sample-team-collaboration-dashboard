import { ReactElement, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '@/context'
import { PATHS } from '@/constants'
import { PageLoader } from '@/components/layouts'
import { AuthContextProps } from '@/types'

export default function PrivateRoute({ children }: { children: ReactElement }) {
  const { user, isLoading } = useAuth() as AuthContextProps
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
