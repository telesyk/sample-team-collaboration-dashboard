import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { lazy, Suspense } from 'react'
import { PATHS } from '@/constants'
import { PageLoader } from '@/components/layouts'
import Home from '@/pages/Home'
import AuthPage from '@/pages/AuthPage'
import PrivateRoute from './PrivateRoute'

const Settings = lazy(() => import('@/pages/Settings'))
const Profile = lazy(() => import('@/pages/Profile'))

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={PATHS.auth}
          element={
            <Suspense fallback={<PageLoader />}>
              <AuthPage />
            </Suspense>
          }
        />
        <Route
          path={PATHS.settings}
          element={
            <Suspense fallback={<PageLoader />}>
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path={PATHS.profile}
          element={
            <Suspense fallback={<PageLoader />}>
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            </Suspense>
          }
        />
      </Routes>
    </Router>
  )
}
