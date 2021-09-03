import Link from 'next/link'
import CloseMenuIcon from '@src/components/CloseMenuIcon'

const MobileMenu = ({ closeMenu = null }) => {
  return (
    <div className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden bg-white">
      <div className="rounded-lg shadow-lg">
        <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src="/assets/logo.svg" alt="Workflow" />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  onClick={closeMenu}
                >
                  <CloseMenuIcon />
                </button>
              </div>
            </div>
            <div>
              <nav className="grid gap-8">
                <Link href="/" passHref>
                  <a className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
                    <img
                      className="flex-shrink-0 h-6 w-6 mr-3"
                      src="/assets/solutions.svg"
                      alt="solutions"
                    />
                    Solutions
                  </a>
                </Link>
                <Link href="/pricing" passHref>
                  <a className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
                    <img
                      className="flex-shrink-0 h-6 w-6 mr-3"
                      src="/assets/price.svg"
                      alt="solutions"
                    />
                    Pricing
                  </a>
                </Link>
                <Link href="/contact-us" passHref>
                  <a className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900">
                    <img
                      className="flex-shrink-0 h-6 w-6 mr-3"
                      src="/assets/demo.svg"
                      alt="solutions"
                    />
                    Request a demo
                  </a>
                </Link>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="space-y-6">
              <p className="text-center text-base leading-6 font-medium text-gray-500">
                Already have an account?{' '}
                <Link href="login" passHref>
                  <a className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                    Sign in
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
