import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon } from 'lucide-react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns'
import { es } from 'date-fns/locale'
import Navigation from './Navigation'
import EmotionSelector from './EmotionSelector'

const EmotionCalendar = ({ user, onLogout }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [showEmotionSelector, setShowEmotionSelector] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [emotionData, setEmotionData] = useState({
    // Datos de ejemplo mejorados
    '2024-01-15': { id: 1, name: 'Muy Feliz', emoji: '😄', color: '#fef3c7', hamster: '🐹💕' },
    '2024-01-16': { id: 2, name: 'Feliz', emoji: '😊', color: '#fde68a', hamster: '🐹✨' },
    '2024-01-17': { id: 3, name: 'Neutral', emoji: '😐', color: '#e0e7ff', hamster: '🐹' },
    '2024-01-18': { id: 2, name: 'Feliz', emoji: '😊', color: '#fde68a', hamster: '🐹✨' },
    '2024-01-19': { id: 1, name: 'Muy Feliz', emoji: '😄', color: '#fef3c7', hamster: '🐹💕' },
  })

  const emotions = [
    { id: 1, name: 'Muy Feliz', emoji: '😄', color: '#fef3c7', hamster: '🐹💕' },
    { id: 2, name: 'Feliz', emoji: '😊', color: '#fde68a', hamster: '🐹✨' },
    { id: 3, name: 'Neutral', emoji: '😐', color: '#e0e7ff', hamster: '🐹' },
    { id: 4, name: 'Triste', emoji: '😢', color: '#bfdbfe', hamster: '🐹💙' },
    { id: 5, name: 'Muy Triste', emoji: '😭', color: '#c7d2fe', hamster: '🐹💔' }
  ]

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const handleDayClick = (date) => {
    setSelectedDate(date)
    setShowEmotionSelector(true)
  }

  const handleEmotionSelect = (emotion) => {
    if (selectedDate) {
      const dateKey = format(selectedDate, 'yyyy-MM-dd')
      setEmotionData({
        ...emotionData,
        [dateKey]: emotion
      })
    }
    setShowEmotionSelector(false)
    setSelectedDate(null)
  }

  const getEmotionForDate = (date) => {
    const dateKey = format(date, 'yyyy-MM-dd')
    return emotionData[dateKey]
  }

  return (
    <div className="min-h-screen safe-area-bottom">
      <Navigation user={user} onLogout={onLogout} />
      
      <div className="mobile-container max-w-6xl mx-auto">
        {/* Header optimizado para móvil */}
        <div className="mb-8 md:mb-12 text-center mobile-header">
          <div className="flex justify-center items-center mb-4 md:mb-6">
            <div className="text-4xl md:text-6xl hamster-float mr-2 md:mr-4">🐹</div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-1 md:mb-2">
                Calendario Emocional
              </h1>
              <p className="text-base md:text-xl text-gray-600 font-medium">Explora tu viaje emocional día a día</p>
            </div>
            <div className="text-4xl md:text-6xl hamster-float ml-2 md:ml-4">📅</div>
          </div>
        </div>

        {/* Calendar optimizado para móvil */}
        <div className="glass-effect rounded-2xl md:rounded-3xl p-4 md:p-10 mb-6 md:mb-8 mobile-calendar">
          {/* Calendar Header optimizado para móvil */}
          <div className="flex items-center justify-between mb-6 md:mb-10 mobile-calendar-header">
            <button
              onClick={handlePrevMonth}
              className="mobile-calendar-nav p-3 md:p-4 hover:bg-white/50 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-110 group"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-600 group-hover:text-pink-500" />
            </button>
            
            <div className="text-center">
              <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {format(currentDate, 'MMMM yyyy', { locale: es })}
              </h2>
              <div className="flex justify-center space-x-1 md:space-x-2 mt-1 md:mt-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
            
            <button
              onClick={handleNextMonth}
              className="mobile-calendar-nav p-3 md:p-4 hover:bg-white/50 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-110 group"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-600 group-hover:text-pink-500" />
            </button>
          </div>

          {/* Days of Week optimizado para móvil */}
          <div className="grid grid-cols-7 gap-1 md:gap-3 mb-4 md:mb-6">
            {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
              <div key={day} className="text-center text-sm md:text-lg font-bold text-gray-700 py-2 md:py-4 bg-white/30 rounded-lg md:rounded-xl">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days optimizado para móvil */}
          <div className="grid grid-cols-7 gap-1 md:gap-3">
            {days.map((day) => {
              const emotion = getEmotionForDate(day)
              const isCurrentMonth = isSameMonth(day, currentDate)
              const isTodayDate = isToday(day)

              return (
                <div
                  key={day.toString()}
                  onClick={() => handleDayClick(day)}
                  className={`calendar-day ${emotion ? 'has-emotion' : ''} ${
                    isTodayDate ? 'ring-2 md:ring-4 ring-pink-400 ring-opacity-50' : ''
                  } ${
                    isCurrentMonth ? 'text-gray-800' : 'text-gray-400'
                  }`}
                  style={{
                    backgroundColor: emotion ? emotion.color : 'rgba(255, 255, 255, 0.6)',
                    minHeight: '60px'
                  }}
                >
                  <div className="text-sm md:text-lg font-bold mb-1">
                    {format(day, 'd')}
                  </div>
                  {emotion && (
                    <div className="text-lg md:text-2xl mb-1 hamster-float">
                      {emotion.hamster}
                    </div>
                  )}
                  {!emotion && isCurrentMonth && (
                    <div className="text-gray-400 opacity-50 hover:opacity-100 transition-opacity">
                      <Plus className="w-3 h-3 md:w-5 md:h-5 mx-auto" />
                    </div>
                  )}
                  {isTodayDate && (
                    <div className="absolute top-1 right-1 md:top-2 md:right-2 w-2 h-2 md:w-3 md:h-3 bg-pink-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Legend y Stats optimizadas para móvil */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Legend optimizada para móvil */}
          <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 mobile-card">
            <div className="flex items-center mb-4 md:mb-6">
              <CalendarIcon className="w-6 h-6 md:w-8 md:h-8 text-pink-400 mr-2 md:mr-3" />
              <h3 className="text-lg md:text-2xl font-bold text-gray-800">Leyenda de Emociones</h3>
            </div>
            <div className="space-y-3 md:space-y-4">
              {emotions.map((emotion) => (
                <div key={emotion.id} className="flex items-center space-x-3 md:space-x-4 p-2 md:p-3 rounded-lg md:rounded-xl hover:bg-white/30 transition-all">
                  <div
                    className="w-4 h-4 md:w-6 md:h-6 rounded-full shadow-lg"
                    style={{ backgroundColor: emotion.color }}
                  ></div>
                  <div className="text-lg md:text-2xl">{emotion.hamster}</div>
                  <span className="text-sm md:text-lg font-semibold text-gray-700 flex-1">{emotion.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Stats optimizadas para móvil */}
          <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 mobile-card">
            <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center">
              <div className="text-2xl md:text-3xl mr-2 md:mr-3">📊</div>
              Estadísticas del Mes
            </h3>
            <div className="space-y-4 md:space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium text-sm md:text-base">Días registrados</span>
                <span className="text-xl md:text-2xl font-bold text-pink-500">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium text-sm md:text-base">Emoción más común</span>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <span className="text-lg md:text-xl">🐹✨</span>
                  <span className="font-bold text-purple-500 text-sm md:text-base">Feliz</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium text-sm md:text-base">Racha actual</span>
                <span className="text-xl md:text-2xl font-bold text-blue-500">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emotion Selector Modal */}
      {showEmotionSelector && (
        <EmotionSelector
          emotions={emotions}
          onSelect={handleEmotionSelect}
          onClose={() => {
            setShowEmotionSelector(false)
            setSelectedDate(null)
          }}
        />
      )}
    </div>
  )
}

export default EmotionCalendar