import React, { useState } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns'
import { es } from 'date-fns/locale'
import Navigation from './Navigation'
import EmotionSelector from './EmotionSelector'

const EmotionCalendar = ({ user, onLogout }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [showEmotionSelector, setShowEmotionSelector] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [emotionData, setEmotionData] = useState({
    '2024-01-15': { id: 1, name: 'Muy Feliz', color: '#10b981' },
    '2024-01-16': { id: 2, name: 'Feliz', color: '#3b82f6' },
    '2024-01-17': { id: 3, name: 'Neutral', color: '#6b7280' },
    '2024-01-18': { id: 2, name: 'Feliz', color: '#3b82f6' },
    '2024-01-19': { id: 1, name: 'Muy Feliz', color: '#10b981' },
  })

  const emotions = [
    { id: 1, name: 'Muy Feliz', color: '#10b981' },
    { id: 2, name: 'Feliz', color: '#3b82f6' },
    { id: 3, name: 'Neutral', color: '#6b7280' },
    { id: 4, name: 'Triste', color: '#f59e0b' },
    { id: 5, name: 'Muy Triste', color: '#ef4444' }
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
    <div className="min-h-screen bg-gray-50">
      <Navigation user={user} onLogout={onLogout} />
      
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-light text-gray-900 mb-2">
            Calendario Emocional
          </h1>
          <p className="text-gray-600">Explora tu viaje emocional día a día</p>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={handlePrevMonth}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <h2 className="text-xl font-medium text-gray-900">
              {format(currentDate, 'MMMM yyyy', { locale: es })}
            </h2>
            
            <button
              onClick={handleNextMonth}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day) => {
              const emotion = getEmotionForDate(day)
              const isCurrentMonth = isSameMonth(day, currentDate)
              const isTodayDate = isToday(day)

              return (
                <div
                  key={day.toString()}
                  onClick={() => handleDayClick(day)}
                  className={`aspect-square flex flex-col items-center justify-center p-2 rounded-md cursor-pointer transition-all ${
                    isTodayDate ? 'ring-2 ring-blue-500' : ''
                  } ${
                    isCurrentMonth ? 'text-gray-900 hover:bg-gray-50' : 'text-gray-400'
                  }`}
                  style={{
                    backgroundColor: emotion ? emotion.color + '20' : 'transparent',
                  }}
                >
                  <div className="text-sm font-medium">
                    {format(day, 'd')}
                  </div>
                  {emotion && (
                    <div 
                      className="w-2 h-2 rounded-full mt-1"
                      style={{ backgroundColor: emotion.color }}
                    ></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Legend and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Legend */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Leyenda de Emociones</h3>
            <div className="space-y-3">
              {emotions.map((emotion) => (
                <div key={emotion.id} className="flex items-center space-x-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: emotion.color }}
                  ></div>
                  <span className="text-sm text-gray-700">{emotion.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Stats */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Estadísticas del Mes</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Días registrados</span>
                <span className="font-medium text-gray-900">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Emoción más común</span>
                <span className="font-medium text-gray-900">Feliz</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Racha actual</span>
                <span className="font-medium text-gray-900">3</span>
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