import React from 'react'

const EmotionSelector = ({ emotions, onSelect, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-medium text-gray-900">
            ¿Cómo te sientes?
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-3">
          {emotions.map((emotion) => (
            <button
              key={emotion.id}
              onClick={() => onSelect(emotion)}
              className="w-full p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center space-x-4"
            >
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: emotion.color }}
              ></div>
              <span className="text-gray-900 font-medium">{emotion.name}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Todas las emociones son válidas
          </p>
        </div>
      </div>
    </div>
  )
}

export default EmotionSelector