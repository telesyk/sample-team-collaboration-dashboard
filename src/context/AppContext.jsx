import { useState, createContext } from 'react'

export const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [state, setState] = useState(null)
  const handleAppState = setState

  return (
    <AppContext.Provider value={{ state, handleAppState }}>
      {children}
    </AppContext.Provider>
  )
}
