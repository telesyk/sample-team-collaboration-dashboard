import { useContext } from 'react'
import { createContext } from 'react'
import { NavbarOptionsProps } from '@/types'

export type NavbarProviderProps = {
  children: React.ReactNode
  options: NavbarOptionsProps
}

export const NavbarContext = createContext<NavbarOptionsProps | undefined>(
  undefined
)

export const useNavbarContext = () => {
  const context = useContext(NavbarContext)

  if (!context) {
    throw new Error('useNavbarContext must be used within a Navbar')
  }

  return context
}

export const NavbarProvider = ({ children, options }: NavbarProviderProps) => {
  return (
    <NavbarContext.Provider value={{ ...options }}>
      {children}
    </NavbarContext.Provider>
  )
}
