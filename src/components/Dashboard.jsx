import React, { useState } from 'react'
import { Calendar, Heart, TrendingUp, Settings, LogOut, Plus, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
import EmotionSelector from './EmotionSelector'

const Dashboard = ({ user, onLogout }) => {
  const navigate = useNavigate()
  const [showEmotionSelector, setShowEmotionSelector] = useState(false)
  const [todayEmotion, setTodayEmotion] = useState(null)

  const emotions = [
    { id: 1, name: 'Muy Feliz', emoji: '😄', color: '#fef3c7', hamster: '🐹💕', gradient: 'from-yellow-200 to-pink-200' },
    { id: 2, name: 'Feliz', emoji: '😊', color: '#fde68a', hamster: '🐹✨', gradient: 'from-green-200 to-blue-200' },
    { id: 3, name: 'Neutral', emoji: '😐', color: '#e0e7ff', hamster: '🐹', gradient: 'from-gray-200 to-purple-200' },
    { id: 4, name: 'Triste', emoji: '😢', color: '#bfdbfe', hamster: '🐹💙', gradient: 'from-blue-200 to-indigo-200' },
    { id: 5, name: 'Muy Triste', emoji: '😭', color: '#c7d2fe', hamster: '🐹💔', gradient: 'from-purple-200 to-pink-200' }
  ]

  const handleEmotionSelect = (emotion) => {
    setTodayEmotion(emotion)
    setShowEmotionSelector(false)
  }

  const stats = [
    { label: 'Días registrados', value: '15', icon: Calendar, color: 'from-pink-400 to-pink-600', bgColor: 'bg-pink-100' },
    { label: 'Racha actual', value: '7', icon: TrendingUp, color: 'from-purple-400 to-purple-600', bgColor: 'bg-purple-100' },
    { label: 'Emoción más común', value: 'Feliz', icon: Heart, color: 'from-blue-400 to-blue-600', bgColor: 'bg-blue-100' }
  ]

  return (
    <div className="min-h-screen safe-area-bottom">
      <Navigation user={user} onLogout={onLogout} />
      
      <div className="mobile-container max-w-7xl mx-auto">
        {/* Header optimizado para móvil */}
        <div className="mb-8 md:mb-12 text-center mobile-header">
          <div className="flex justify-center items-center mb-4 md:mb-6">
            <div className="text-4xl md:text-6xl hamster-float mr-2 md:mr-4">🐹</div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-1 md:mb-2">
                ¡Hola, {user.name}!
              </h1>
              <p className="text-base md:text-xl text-gray-600 font-medium">¿Cómo te sientes hoy?</p>
            </div>
            <div className="text-4xl md:text-6xl hamster-float ml-2 md:ml-4">💕</div>
          </div>
        </div>

        {/* Today's Emotion optimizado para móvil */}
        <div className="mb-8 md:mb-12">
          <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-12 text-center relative overflow-hidden mobile-card">
            <div className="absolute top-3 right-3 md:top-4 md:right-4">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-pink-400 animate-pulse" />
            </div>
            {todayEmotion ? (
              <div>
                <div className="text-6xl md:text-8xl mb-4 md:mb-6 bounce">{todayEmotion.hamster}</div>
                <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
                  Te sientes {todayEmotion.name}
                </h3>
                <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 font-medium">¡Genial! Ya registraste tu emoción de hoy</p>
                <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-4">
                  <button
                    onClick={() => setShowEmotionSelector(true)}
                    className="btn-secondary px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold"
                  >
                    Cambiar emoción
                  </button>
                  <button
                    onClick={() => navigate('/calendar')}
                    className="btn-primary px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold"
                  >
                    Ver calendario
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-6xl md:text-8xl mb-4 md:mb-6 hamster-float">🐹❓</div>
                <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
                  Registra tu emoción de hoy
                </h3>
                <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 font-medium">
                  Tómate un momento para reflexionar sobre cómo te sientes
                </p>
                <button
                  onClick={() => setShowEmotionSelector(true)}
                  className="btn-primary px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl text-lg md:text-xl font-semibold inline-flex items-center shadow-2xl"
                >
                  <Plus className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                  Registrar Emoción
                  <span className="ml-2 md:ml-3 text-xl md:text-2xl">🐹</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Stats optimizadas para móvil */}
        <div className="mobile-stats md:grid md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="mobile-stat-card glass-effect rounded-2xl md:rounded-3xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg`}>
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-2xl md:text-4xl font-bold text-gray-800">{stat.value}</div>
              </div>
              <p className="text-gray-600 font-semibold text-base md:text-lg">{stat.label}</p>
              <div className="mt-3 md:mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${stat.color} rounded-full`} style={{ width: '70%' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions optimizadas para móvil */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div 
            className="emotion-card cursor-pointer group mobile-card"
            onClick={() => navigate('/calendar')}
          >
            <div className="flex items-center mb-4 md:mb-6">
              <div className="p-3 md:p-4 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl md:rounded-2xl mr-3 md:mr-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-800">Ver Calendario</h3>
            </div>
            <p className="text-gray-600 text-sm md:text-lg font-medium mb-4 md:mb-6">
              Explora tu historial emocional y descubre patrones
            </p>
            <div className="flex justify-between items-center">
              <div className="text-2xl md:text-4xl hamster-float">🐹📅</div>
              <div className="text-pink-400 font-semibold text-sm md:text-base">Explorar →</div>
            </div>
          </div>

          <div 
            className="emotion-card cursor-pointer group mobile-card"
            onClick={() => navigate('/profile')}
          >
            <div className="flex items-center mb-4 md:mb-6">
              <div className="p-3 md:p-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl md:rounded-2xl mr-3 md:mr-4 group-hover:scale-110 transition-transform">
                <Settings className="w-6 h-6 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-800">Mi Perfil</h3>
            </div>
            <p className="text-gray-600 text-sm md:text-lg font-medium mb-4 md:mb-6">
              Personaliza tu experiencia y ajusta tus preferencias
            </p>
            <div className="flex justify-between items-center">
              <div className="text-2xl md:text-4xl hamster-float">🐹⚙️</div>
              <div className="text-purple-400 font-semibold text-sm md:text-base">Configurar →</div>
            </div>
          </div>
        </div>

        {/* Motivational quote optimizada para móvil */}
        <div className="mt-8 md:mt-12 text-center">
          <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-2xl mx-auto mobile-card">
            <div className="text-2xl md:text-4xl mb-3 md:mb-4">🌟</div>
            <p className="text-base md:text-xl text-gray-700 font-medium italic">
              "Cada emoción es válida y nos enseña algo sobre nosotros mismos"
            </p>
            <div className="mt-3 md:mt-4 flex justify-center space-x-2">
              <span className="hamster-float text-xl md:text-2xl">🐹</span>
              <span className="hamster-float text-xl md:text-2xl" style={{ animationDelay: '0.5s' }}>💕</span>
              <span className="hamster-float text-xl md:text-2xl" style={{ animationDelay: '1s' }}>🌈</span>
            </div>
          </div>
        </div>
      </div>

      {/* Emotion Selector Modal */}
      {showEmotionSelector && (
        <EmotionSelector
          emotions={emotions}
          onSelect={handleEmotionSelect}
          onClose={() => setShowEmotionSelector(false)}
        />
      )}
    </div>
  )
}

export default Dashboard