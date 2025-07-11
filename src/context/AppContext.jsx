import { useState, createContext } from 'react'

export const AppContext = createContext()

export function AppContextProvider({ children }) {
  const [state, setState] = useState()

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  )
}
