import { AppContextProvider } from './AppContext'
import { AppRoutes } from './AppRoutes'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  )
}

export default App
