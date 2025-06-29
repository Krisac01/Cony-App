import React from 'react'
import { Calendar, Home, User, LogOut, Sparkles } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const Navigation = ({ user, onLogout }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { path: '/', icon: Home, label: 'Inicio' },
    { path: '/calendar', icon: Calendar, label: 'Calendario' },
    { path: '/profile', icon: User, label: 'Perfil' }
  ]

  return (
    <>
      {/* Navegación desktop */}
      <nav className="hidden md:block glass-effect border-b border-white/30 sticky top-0 z-50 safe-area-top">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => navigate('/')}>
              <div className="text-4xl hamster-float">🐹</div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  HamsterMood
                </h1>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-2 bg-white/20 rounded-2xl p-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`nav-item flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg scale-105 active'
                      : 'text-gray-700 hover:bg-white/40 hover:scale-105'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 bg-white/20 rounded-2xl p-3">
                <div className="text-3xl hamster-float">{user.avatar}</div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{user.name}</p>
                  <p className="text-xs text-gray-600 font-medium">{user.email}</p>
                </div>
              </div>
              <button
                onClick={onLogout}
                className="p-3 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all duration-300 hover:scale-110"
                title="Cerrar sesión"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Navegación móvil */}
      <nav className="md:hidden mobile-nav">
        <div className="flex justify-around items-center px-4">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`mobile-nav-item ${
                location.pathname === item.path ? 'active' : 'text-gray-600'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span>{item.label}</span>
            </button>
          ))}
          <button
            onClick={onLogout}
            className="mobile-nav-item text-red-500"
          >
            <LogOut className="w-6 h-6" />
            <span>Salir</span>
          </button>
        </div>
      </nav>

      {/* Header móvil */}
      <div className="md:hidden glass-effect border-b border-white/30 sticky top-0 z-40 safe-area-top">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3" onClick={() => navigate('/')}>
            <div className="text-2xl hamster-float">🐹</div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              HamsterMood
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-2xl hamster-float">{user.avatar}</div>
            <div>
              <p className="text-sm font-bold text-gray-800">{user.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation