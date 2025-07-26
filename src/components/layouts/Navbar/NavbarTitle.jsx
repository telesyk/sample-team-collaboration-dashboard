import { Link } from 'react-router'
import { PATHS } from '@/constants'
import { useNavbarContext } from './NavbarContext'

export default function NavbarTitle() {
  const { title } = useNavbarContext()

  if (!title) return null

  return (
    <div className="inline-flex items-center">
      <Link to={PATHS.home} className="text-xl text-base-content">
        {title}
      </Link>
    </div>
  )
}
