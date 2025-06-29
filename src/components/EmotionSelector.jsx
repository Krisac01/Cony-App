import React from 'react'
import { X, Heart } from 'lucide-react'

const EmotionSelector = ({ emotions, onSelect, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 md:p-6 z-50 backdrop-blur-sm">
      <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-10 max-w-sm md:max-w-lg w-full shadow-2xl mobile-modal mobile-emotion-selector">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="text-2xl md:text-3xl hamster-float">🐹</div>
            <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              ¿Cómo te sientes?
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 md:p-3 hover:bg-white/50 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-110"
          >
            <X className="w-5 h-5 md:w-7 md:h-7 text-gray-600" />
          </button>
        </div>

        <div className="space-y-3 md:space-y-4">
          {emotions.map((emotion) => (
            <button
              key={emotion.id}
              onClick={() => onSelect(emotion)}
              className="mobile-emotion-button w-full p-4 md:p-6 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-4 md:space-x-6 group relative overflow-hidden"
              style={{ backgroundColor: emotion.color }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                {emotion.hamster}
              </div>
              <div className="text-left flex-1 relative z-10">
                <p className="font-bold text-gray-800 text-lg md:text-xl">{emotion.name}</p>
                <p className="text-xs md:text-sm text-gray-600 font-medium">Toca para seleccionar</p>
              </div>
              <div className="relative z-10">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 md:mt-8 text-center">
          <div className="bg-gradient-to-r from-pink-50/80 to-purple-50/80 rounded-xl md:rounded-2xl p-4 md:p-6 border border-pink-200/50">
            <div className="text-xl md:text-2xl mb-2">💕</div>
            <p className="text-xs md:text-sm text-gray-700 font-medium">
              Recuerda: no hay emociones buenas o malas, todas son válidas
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmotionSelector