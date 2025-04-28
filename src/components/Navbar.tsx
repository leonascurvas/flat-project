import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>

      <nav className="bg-black p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 w-30">
            <img src="assets/logo-flat-sem-fundo.svg" alt="Logo Flat" />
          </div>


          <div className="flex-grow hidden md:flex justify-end space-x-8 text-xl">
            <Link href="/" className="text-gray-50 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
            <Link href="/about" className="text-gray-50 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Sobre</Link>
            <Link href="/services" className="text-gray-50 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Quem Somos</Link>
            <Link href="/contact" className="text-gray-50 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Contato</Link>
          </div>

{/* 
          <div className="hidden md:block">
            <Link href="/login" className="text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400">Saiba Mais</Link>
          </div>
*/}

          <div className="md:hidden">
            <input type="checkbox" id="menu-toggle-2" className="hidden" />
            <label htmlFor="menu-toggle-2" className="text-gray-800 dark:text-white cursor-pointer">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
            <div id="menu-2" className="hidden">
              <div className="flex flex-col space-y-4 mt-2 bg-white dark:bg-gray-800 p-4 rounded-md">
                <Link href="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
                <Link href="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">About</Link>
                <Link href="/services" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Services</Link>
                <Link href="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Contact</Link>
                <Link href="/login" className="text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 px-4 py-2 rounded">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar