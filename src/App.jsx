import React, { useState } from 'react'

function App() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">
        {/* Logo/Brand */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
            <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"></div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            MiApp
          </h1>
          <p className="text-slate-500">
            Tu experiencia comienza aquí
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
          {/* Toggle */}
          <div className="flex mb-8 bg-slate-50 rounded-2xl p-1">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                isLogin 
                  ? 'bg-white text-slate-800 shadow-sm transform scale-105' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Iniciar Sesión
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                !isLogin 
                  ? 'bg-white text-slate-800 shadow-sm transform scale-105' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Registrarse
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="transform transition-all duration-300">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ingresa tu nombre"
                  className="w-full px-4 py-4 bg-slate-50 border-0 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-300"
                  required={!isLogin}
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@email.com"
                className="w-full px-4 py-4 bg-slate-50 border-0 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="w-full px-4 py-4 bg-slate-50 border-0 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-300"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 border-t border-slate-200"></div>
            <span className="px-4 text-sm text-slate-400">o continúa con</span>
            <div className="flex-1 border-t border-slate-200"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center py-3 px-4 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all duration-300 group">
              <div className="w-5 h-5 bg-blue-500 rounded mr-2"></div>
              <span className="text-sm font-medium text-slate-700 group-hover:text-slate-800">Google</span>
            </button>
            <button className="flex items-center justify-center py-3 px-4 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all duration-300 group">
              <div className="w-5 h-5 bg-slate-800 rounded mr-2"></div>
              <span className="text-sm font-medium text-slate-700 group-hover:text-slate-800">Apple</span>
            </button>
          </div>

          {/* Footer */}
          {isLogin && (
            <div className="text-center mt-8">
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          )}
        </div>

        {/* Terms */}
        <p className="text-center text-xs text-slate-400 mt-8 leading-relaxed">
          Al continuar, aceptas nuestros{' '}
          <a href="#" className="text-indigo-600 hover:text-indigo-700">Términos de Servicio</a>
          {' '}y{' '}
          <a href="#" className="text-indigo-600 hover:text-indigo-700">Política de Privacidad</a>
        </p>
      </div>
    </div>
  )
}

export default App