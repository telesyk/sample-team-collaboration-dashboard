import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Settings from './pages/Settings'
import AuthPage from './features/auth/AuthPage'
import AuthPrivateRoute from './features/auth/AuthPrivateRoute'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthPrivateRoute>
              <Home />
            </AuthPrivateRoute>
          }
        />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}
