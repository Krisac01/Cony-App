import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
import EmotionSelector from './EmotionSelector'

const Dashboard = ({ user, onLogout }) => {
  const navigate = useNavigate()
  const [showEmotionSelector, setShowEmotionSelector] = useState(false)
  const [todayEmotion, setTodayEmotion] = useState(null)

  const emotions = [
    { id: 1, name: 'Muy Feliz', color: '#10b981' },
    { id: 2, name: 'Feliz', color: '#3b82f6' },
    { id: 3, name: 'Neutral', color: '#6b7280' },
    { id: 4, name: 'Triste', color: '#f59e0b' },
    { id: 5, name: 'Muy Triste', color: '#ef4444' }
  ]

  const handleEmotionSelect = (emotion) => {
    setTodayEmotion(emotion)
    setShowEmotionSelector(false)
  }

  const stats = [
    { label: 'Días registrados', value: '15' },
    { label: 'Racha actual', value: '7' },
    { label: 'Emoción más común', value: 'Feliz' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation user={user} onLogout={onLogout} />
      
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-light text-gray-900 mb-2">
            Hola, {user.name}
          </h1>
          <p className="text-gray-600">¿Cómo te sientes hoy?</p>
        </div>

        {/* Today's Emotion */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            {todayEmotion ? (
              <div>
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                  style={{ backgroundColor: todayEmotion.color }}
                ></div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Te sientes {todayEmotion.name}
                </h3>
                <p className="text-gray-600 mb-6">Ya registraste tu emoción de hoy</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => setShowEmotionSelector(true)}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cambiar emoción
                  </button>
                  <button
                    onClick={() => navigate('/calendar')}
                    className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Ver calendario
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Registra tu emoción de hoy
                </h3>
                <p className="text-gray-600 mb-6">
                  Tómate un momento para reflexionar sobre cómo te sientes
                </p>
                <button
                  onClick={() => setShowEmotionSelector(true)}
                  className="px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  Registrar Emoción
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-2xl font-light text-gray-900 mb-1">{stat.value}</div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate('/calendar')}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">Ver Calendario</h3>
            <p className="text-gray-600 text-sm">
              Explora tu historial emocional y descubre patrones
            </p>
          </div>

          <div 
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate('/profile')}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">Mi Perfil</h3>
            <p className="text-gray-600 text-sm">
              Personaliza tu experiencia y ajusta tus preferencias
            </p>
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