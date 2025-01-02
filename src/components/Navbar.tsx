import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#1f2937] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Website Name */}
          <Link href="/" className="text-xl font-bold text-white">
            Tired Ape
          </Link>
          
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/apps" className="text-gray-300 hover:text-white transition-colors">
              Apps
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}