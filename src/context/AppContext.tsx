import { useState, createContext, ReactNode } from 'react'
import type { AppContextType } from '@/types'

type AppProviderType = {
  children: ReactNode
}

export const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: AppProviderType) {
  const [state, setState] = useState<any>(null)
  const handleAppState = setState

  return (
    <AppContext.Provider value={{ state, handleAppState }}>
      {children}
    </AppContext.Provider>
  )
}
