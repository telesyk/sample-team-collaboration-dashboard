import { createContext, useContext } from 'react'

export const PageContext = createContext(null)

export const usePageContext = () => {
  const context = useContext(PageContext)

  if (!context) throw new Error('"usePageContext" used out of PageTemplate')

  return context
}

export const PageProvider = ({ children, options }) => {
  return (
    <PageContext.Provider value={{ ...options }}>
      {children}
    </PageContext.Provider>
  )
}
