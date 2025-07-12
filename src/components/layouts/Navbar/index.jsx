import { NavbarProvider } from './NavbarContext'

export default function Navbar({ children, options }) {
  return (
    <NavbarProvider options={options}>
      <div className="navbar justify-between bg-base-100 shadow-sm">
        {children}
      </div>
    </NavbarProvider>
  )
}
