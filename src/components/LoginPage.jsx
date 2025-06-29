import React, { useState } from 'react'
import { Heart, Star, Sparkles } from 'lucide-react'

const LoginPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simular llamada a API
    setTimeout(() => {
      const userData = {
        id: 1,
        name: formData.name || 'Usuario Demo',
        email: formData.email,
        avatar: '🐹'
      }
      onLogin(userData)
      setLoading(false)
    }, 1500)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden safe-area-top safe-area-bottom">
      {/* Elementos decorativos flotantes optimizados para móvil */}
      <div className="absolute top-8 left-8 text-3xl md:text-5xl hamster-float" style={{ animationDelay: '0s' }}>🐹</div>
      <div className="absolute top-12 right-12 text-2xl md:text-4xl hamster-float" style={{ animationDelay: '1s' }}>💕</div>
      <div className="absolute bottom-12 left-12 text-2xl md:text-4xl hamster-float" style={{ animationDelay: '2s' }}>🌸</div>
      <div className="absolute bottom-8 right-8 text-3xl md:text-5xl hamster-float" style={{ animationDelay: '0.5s' }}>🐹</div>
      <div className="hidden md:block absolute top-1/2 left-4 text-3xl hamster-float" style={{ animationDelay: '1.5s' }}>✨</div>
      <div className="hidden md:block absolute top-1/3 right-4 text-3xl hamster-float" style={{ animationDelay: '2.5s' }}>🎀</div>

      <div className="w-full max-w-sm md:max-w-lg relative z-10 mobile-container">
        {/* Logo y título optimizado para móvil */}
        <div className="text-center mb-8 md:mb-12 mobile-header">
          <div className="text-6xl md:text-9xl mb-4 md:mb-6 hamster-float">🐹</div>
          <h1 className="mobile-title md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 md:mb-4">
            HamsterMood
          </h1>
          <p className="text-gray-600 mobile-subtitle md:text-xl font-medium">
            Rastrea tus emociones con amor 💕
          </p>
          <div className="mt-3 md:mt-4 flex justify-center space-x-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Formulario optimizado para móvil */}
        <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl mobile-card">
          <div className="flex mb-6 md:mb-8 bg-white/20 rounded-xl md:rounded-2xl p-1 md:p-2">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
                isLogin 
                  ? 'btn-primary text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-white/30'
              }`}
            >
              Iniciar Sesión
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
                !isLogin 
                  ? 'btn-primary text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-white/30'
              }`}
            >
              Registrarse
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 mobile-form">
            {!isLogin && (
              <div className="transform transition-all duration-300 mobile-form-group">
                <label className="mobile-form-label text-gray-700">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full input-field"
                  placeholder="Tu nombre"
                  required={!isLogin}
                />
              </div>
            )}

            <div className="mobile-form-group">
              <label className="mobile-form-label text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full input-field"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="mobile-form-group">
              <label className="mobile-form-label text-gray-700">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full input-field"
                placeholder="••••••••"
                required
              />
            </div>

            {!isLogin && (
              <div className="transform transition-all duration-300 mobile-form-group">
                <label className="mobile-form-label text-gray-700">
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full input-field"
                  placeholder="••••••••"
                  required={!isLogin}
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mobile-button btn-primary rounded-xl md:rounded-2xl text-base md:text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 md:h-6 md:w-6 border-b-2 border-white mr-2 md:mr-3"></div>
                  {isLogin ? 'Iniciando sesión...' : 'Registrando...'}
                </div>
              ) : (
                <>
                  {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                  <span className="ml-2 md:ml-3 text-lg md:text-xl">🐹</span>
                </>
              )}
            </button>
          </form>

          {isLogin && (
            <div className="mt-6 md:mt-8 text-center">
              <a href="#" className="text-sm text-pink-500 hover:text-pink-600 transition-colors font-medium">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          )}

          {/* Demo credentials optimizado para móvil */}
          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-pink-50/80 to-purple-50/80 rounded-xl md:rounded-2xl border border-pink-200/50">
            <div className="text-center">
              <div className="text-xl md:text-2xl mb-2">🎮</div>
              <p className="text-xs md:text-sm text-gray-700 font-medium">
                <strong>Modo Demo:</strong> Usa cualquier email y contraseña para probar
              </p>
            </div>
          </div>
        </div>

        {/* Footer optimizado para móvil */}
        <div className="text-center mt-6 md:mt-10 text-gray-500">
          <p className="text-sm md:text-lg font-medium">Hecho con 💕 para cuidar tu bienestar emocional</p>
          <div className="mt-3 md:mt-4 flex justify-center space-x-3 md:space-x-4 text-xl md:text-2xl">
            <span className="hamster-float" style={{ animationDelay: '0s' }}>🐹</span>
            <span className="hamster-float" style={{ animationDelay: '0.5s' }}>💖</span>
            <span className="hamster-float" style={{ animationDelay: '1s' }}>🌈</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage