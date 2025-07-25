import { useNavbarContext } from './NavbarContext'
import { FaUserAlt, FaSignOutAlt } from 'react-icons/fa'

export default function NavbarButtons() {
  const { isProfile, profileImage, profileName, logout } = useNavbarContext()

  return (
    <div className="inline-flex items-center gap-2">
      <button className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {' '}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />{' '}
          </svg>
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
      {isProfile && (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {profileImage ? (
                <img title="user avatar" src={profileImage} />
              ) : (
                <FaUserAlt className="w-full h-auto" />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="w-full">
              <a className="inline-flex justify-between max-w-full">
                <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
                  {profileName}
                </span>
                <FaUserAlt />
              </a>
            </li>
            <li>
              <button onClick={logout} className="inline-flex justify-between">
                Logout <FaSignOutAlt />
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
