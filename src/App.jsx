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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-violet-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-light text-slate-800 mb-2">
              Bienvenido
            </h1>
            <p className="text-slate-500 text-sm">
              {isLogin ? 'Inicia sesión en tu cuenta' : 'Crea tu nueva cuenta'}
            </p>
          </div>

          {/* Toggle */}
          <div className="flex mb-6 bg-slate-100/50 rounded-2xl p-1">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all ${
                isLogin 
                  ? 'bg-white text-slate-800 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Iniciar Sesión
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all ${
                !isLogin 
                  ? 'bg-white text-slate-800 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Registrarse
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3 bg-white/50 border border-slate-200/50 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-all"
                  required={!isLogin}
                />
              </div>
            )}

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Correo electrónico"
                className="w-full px-4 py-3 bg-white/50 border border-slate-200/50 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-all"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Contraseña"
                className="w-full px-4 py-3 bg-white/50 border border-slate-200/50 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-rose-300 to-violet-300 text-white font-medium rounded-2xl hover:from-rose-400 hover:to-violet-400 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </button>
          </form>

          {/* Footer */}
          {isLogin && (
            <div className="text-center mt-6">
              <a href="#" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App