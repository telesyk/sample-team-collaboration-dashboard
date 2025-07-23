import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { PATHS } from '@/constants'
import PrivateRoute from './PrivateRoute'
import Home from '@/pages/Home'
import Settings from '@/pages/Settings'
import AuthPage from '@/pages/AuthPage'
import Profile from '@/pages/Profile'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path={PATHS.auth} element={<AuthPage />} />
        <Route
          path={PATHS.settings}
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route
          path={PATHS.profile}
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}
