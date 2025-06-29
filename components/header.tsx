import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-200/50">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="#home" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-gray-800 hover:text-gray-600">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-gray-800 hover:text-gray-600">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-gray-800 hover:text-gray-600">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#resume" className="text-gray-800 hover:text-gray-600">
              Resume
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-800 hover:text-gray-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
