import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Settings from '@/pages/Settings'
import AuthPrivateRoute from '@/features/auth/AuthPrivateRoute'
import { PATHS } from '@/constants'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path={PATHS.home}
          element={
            <AuthPrivateRoute>
              <Home />
            </AuthPrivateRoute>
          }
        />
        <Route path={PATHS.settings} element={<Settings />} />
      </Routes>
    </Router>
  )
}
