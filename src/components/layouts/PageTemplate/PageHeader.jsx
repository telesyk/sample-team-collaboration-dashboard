import { useAuth } from '@/features'
import { Navbar, NavbarButtons, NavbarMenu, NavbarTitle } from '../Navbar'
import { MAIN_MENU } from '@/constants'

export default function PageHeader() {
  const { user } = useAuth()
  return (
    <Navbar
      options={{
        isProfile: true,
        menuList: MAIN_MENU,
      }}
    >
      <NavbarMenu />
      <NavbarTitle />
      {user && <NavbarButtons />}
    </Navbar>
  )
}
