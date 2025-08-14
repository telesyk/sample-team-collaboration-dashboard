import { NavbarProvider, NavbarProviderProps } from './NavbarContext'

export default function Navbar({ children, options }: NavbarProviderProps) {
  return (
    <NavbarProvider options={options}>
      <div className="navbar justify-between bg-base-100 shadow-sm">
        {children}
      </div>
    </NavbarProvider>
  )
}
