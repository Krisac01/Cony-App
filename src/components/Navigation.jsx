import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Navigation = ({ user, onLogout }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/calendar', label: 'Calendario' },
    { path: '/profile', label: 'Perfil' }
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <h1 className="text-xl font-semibold text-gray-900">
              HamsterMood
            </h1>
          </div>

          {/* Navigation Items - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* User Menu - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm text-gray-700">{user.name}</span>
            <button
              onClick={onLogout}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Salir
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <span className="text-sm text-gray-700">{user.name}</span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="flex justify-around py-2">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-gray-900 bg-gray-50'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={onLogout}
            className="flex-1 py-3 text-center text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
          >
            Salir
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation