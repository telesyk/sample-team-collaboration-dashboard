import { createContext, useContext } from 'react'

export type PageProviderProps = {
  children?: React.ReactNode
  options?: Record<string, any>
}

export const PageContext = createContext<PageProviderProps | null>(null)

export const usePageContext = () => {
  const context = useContext(PageContext)

  if (!context) throw new Error('"usePageContext" used out of PageTemplate')

  return context
}

export const PageProvider = ({ children, options }: PageProviderProps) => {
  return (
    <PageContext.Provider value={{ ...options }}>
      {children}
    </PageContext.Provider>
  )
}
