import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { PATHS } from '@/constants'
import AuthPrivateRoute from '@/features/auth/AuthPrivateRoute'
import Home from '@/pages/Home'
import Settings from '@/pages/Settings'
import AuthPage from '@/pages/AuthPage'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={PATHS.home} element={<Home />} />
        <Route path={PATHS.auth} element={<AuthPage />} />
        <Route
          path={PATHS.settings}
          element={
            <AuthPrivateRoute>
              <Settings />
            </AuthPrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}
