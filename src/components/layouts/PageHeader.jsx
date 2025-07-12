import Navbar from './Navbar'
import NavbarButtons from './Navbar/NavbarButtons'
import NavbarMenu from './Navbar/NavbarMenu'
import NavbarTitle from './Navbar/NavbarTitle'

export default function PageHeader() {
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
      <NavbarMenu />
      <NavbarTitle />
      <NavbarButtons />
    </Navbar>
  )
}
