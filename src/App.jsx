import { AppContextProvider } from './AppContext'
import { AppRoutes } from './AppRoutes'
import { AuthProvider } from './features/auth/AuthContext'

function App() {
  return (
    <AppContextProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </AppContextProvider>
  )
}

export default App
