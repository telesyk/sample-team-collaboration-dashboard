import { AppProvider, AuthProvider } from '@/context'
import { AppRoutes } from '@/routes/AppRoutes'

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </AppProvider>
  )
}

export default App
