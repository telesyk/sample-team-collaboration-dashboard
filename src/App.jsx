import { AppContextProvider } from './context/AppContext'
import { AppRoutes } from './routes/AppRoutes'
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
