import Link from 'next/link'
import { BeakerIcon, CakeIcon } from '@heroicons/react/24/solid'

export const Header = () => {
  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center rounded-b-3xl shadow-lg">
      <nav>
        <Link href="/menu" className="text-white font-bold text-xl hover:text-yellow-300 transition-colors">
          Menu
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <BeakerIcon className="h-12 w-12 text-yellow-300" />
        <h1 className="text-4xl font-bold text-white">Your Openspace</h1>
        <CakeIcon className="h-12 w-12 text-yellow-300" />
      </div>
      <nav>
        <Link href="/user" className="text-white font-bold text-xl hover:text-yellow-300 transition-colors">
          User Area
        </Link>
        <Link href="/info" className="text-white font-bold text-xl hover:text-yellow-300 transition-colors">
          Info Box
        </Link>
      </nav>
    </header>
  )
} 