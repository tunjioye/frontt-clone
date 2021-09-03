import React, { useState } from 'react'
import Link from 'next/link'
import MenuIcon from '@src/components/MenuIcon'
import MobileMenu from '@src/components/MobileMenu'

const PublicPageHeader = () => {
  const [showMenu, setShowMenu] = useState(false)
  const openMenu = () => setShowMenu(true)
  const closeMenu = () => setShowMenu(false)

  const mappedHeaderNavLinks = headerNavLinks.map(mapHeaderNavLinks)

  return (
    <header className="relative bg-gray-50">
      <div className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="w-0 flex-1 flex">
              <Link href="/" passHref className="inline-flex">
                <a>
                  <img src="/assets/logo.svg" className="h-6 w-auto sm:h-7" alt="frontt" />
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                onClick={openMenu}
              >
                <MenuIcon />
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">{mappedHeaderNavLinks}</nav>
            <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
              <Link
                href="/login"
                passHref
                className="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 transition ease-in-out duration-150"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>

      {showMenu && <MobileMenu closeMenu={closeMenu} />}
    </header>
  )
}

const headerNavLinks = [
  {
    title: 'Solutions',
    url: '/#solutions',
  },
  {
    title: 'Pricing',
    url: '/pricing',
  },
  {
    title: 'Request a demo',
    url: '/contact-us',
    role: 'button',
  },
]

const mapHeaderNavLinks = (link, index) => {
  const { title, url, role } = link || {}

  if (role === 'button') {
    return (
      <Link key={index} href={url} passHref>
        <a>
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-blue-100 text-gray-800">
            {title}
          </span>
        </a>
      </Link>
    )
  }

  return (
    <Link
      key={index}
      href={url}
      passHref
      className="cursor-pointer text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150"
    >
      {title}
    </Link>
  )
}

export default PublicPageHeader
