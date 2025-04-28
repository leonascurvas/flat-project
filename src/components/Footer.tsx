import React from 'react'

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Company Logo */}
          <div className="mb-8 md:mb-0">
            <div className="p-4 inline-block w-50">
              <img src="assets/logo-flat.svg" alt="Logo Flat" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mb-8 md:mb-0">
            <a href="/home" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">Home</a>
            <a href="/services" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">Sobre</a>
            <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">Quem Somos</a>
            <a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">Contato</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.066-1.867-3.066-1.867 0-2.153 1.459-2.153 2.967v5.703h-3v-10h2.88v1.366h.041c.401-.761 1.38-1.562 2.841-1.562 3.04 0 3.6 2.0 3.6 4.605v5.604z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.568.073-3.006.414-4.095 1.503-1.089 1.089-1.43 2.527-1.503 4.095-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.073 1.568.414 3.006 1.503 4.095 1.089 1.089 2.527 1.43 4.095 1.503 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.568-.073 3.006-.414 4.095-1.503 1.089-1.089 1.43-2.527 1.503-4.095.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.073-1.568-.414-3.006-1.503-4.095-1.089-1.089-2.527-1.43-4.095-1.503-1.28-.058-1.688-.07-4.947-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.596 0 0 .593 0 1.326v21.348C0 23.407.596 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.917c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.404 24 24 23.407 24 22.674V1.326C24 .593 23.404 0 22.675 0z" />
              </svg>
            </a>

            {/* TikTok */}
            <a href="#" aria-label="TikTok" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c1.043 0 2.042.113 3 .332v4.694a5.26 5.26 0 0 0 3.68 1.523V9.67a9.096 9.096 0 0 1-3.68-.786v6.677c0 3.55-2.884 6.44-6.44 6.44-1.29 0-2.495-.376-3.503-1.016a6.443 6.443 0 0 1-2.937-5.424c0-3.558 2.89-6.448 6.448-6.448.208 0 .414.01.618.03v3.742a2.723 2.723 0 0 0-.618-.07c-1.543 0-2.8 1.258-2.8 2.8 0 1.04.537 1.96 1.35 2.5.46.303 1.002.48 1.588.48 1.543 0 2.8-1.258 2.8-2.8V0z" />
              </svg>
            </a>
          </div>

        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 text-center">
          <p>&copy; 2025 Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer