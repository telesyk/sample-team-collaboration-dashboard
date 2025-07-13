import { useAuth } from '@/features/auth/AuthContext'
import { Navbar, NavbarButtons, NavbarMenu, NavbarTitle } from '../Navbar'

export default function PageHeader() {
  const { user } = useAuth()
  return (
    <Navbar
      options={{
        isProfile: true,
        menuList: [
          {
            url: '/settings',
            title: 'Settings',
          },
          {
            url: '/',
            title: 'Home',
          },
        ],
      }}
    >
      {user && <NavbarMenu />}
      <NavbarTitle />
      {user && <NavbarButtons />}
    </Navbar>
  )
}
