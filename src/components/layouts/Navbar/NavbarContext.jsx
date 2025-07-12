import { useContext } from 'react'
import { createContext } from 'react'

export const NavbarContext = createContext(null)

export const useNavbarContext = () => {
  const context = useContext(NavbarContext)

  if (!context) {
    throw new Error('useNavbarContext must be used within a Navbar')
  }

  return context
}

export const NavbarProvider = ({ children, options }) => {
  return (
    <NavbarContext.Provider value={{ ...options }}>
      {children}
    </NavbarContext.Provider>
  )
}
