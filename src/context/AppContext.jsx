import { useState, createContext } from 'react'

export const AppContext = createContext(null)

export function AppContextProvider({ children }) {
  const [state, setState] = useState(null)

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  )
}
