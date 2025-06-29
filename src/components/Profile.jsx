import React, { useState } from 'react'
import { User, Mail, Calendar, Heart, Settings, Save } from 'lucide-react'
import Navigation from './Navigation'

const Profile = ({ user, onLogout }) => {
  const [profileData, setProfileData] = useState({
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    joinDate: '15 de Enero, 2024',
    favoriteEmotion: 'Feliz',
    notifications: true,
    darkMode: false
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleSave = () => {
    setIsEditing(false)
    // Aquí se guardarían los cambios
  }

  const handleInputChange = (field, value) => {
    setProfileData({
      ...profileData,
      [field]: value
    })
  }

  const stats = [
    { label: 'Días registrados', value: '15', color: 'from-pink-400 to-pink-600' },
    { label: 'Racha más larga', value: '12', color: 'from-purple-400 to-purple-600' },
    { label: 'Emoción favorita', value: 'Feliz 😊', color: 'from-blue-400 to-blue-600' },
    { label: 'Promedio semanal', value: '6.2/7', color: 'from-green-400 to-green-600' }
  ]

  return (
    <div className="min-h-screen safe-area-bottom">
      <Navigation user={user} onLogout={onLogout} />
      
      <div className="mobile-container max-w-4xl mx-auto">
        {/* Header optimizado para móvil */}
        <div className="mb-8 md:mb-12 text-center mobile-header">
          <div className="flex justify-center items-center mb-4 md:mb-6">
            <div className="text-4xl md:text-6xl hamster-float mr-2 md:mr-4">🐹</div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-1 md:mb-2">
                Mi Perfil
              </h1>
              <p className="text-base md:text-xl text-gray-600 font-medium">Gestiona tu información y preferencias</p>
            </div>
            <div className="text-4xl md:text-6xl hamster-float ml-2 md:ml-4">👤</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Profile Info optimizado para móvil */}
          <div className="lg:col-span-2">
            <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 mobile-card">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 space-y-4 md:space-y-0">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Información Personal</h2>
                <button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className="btn-primary px-4 md:px-6 py-2 md:py-3 rounded-xl flex items-center justify-center space-x-2"
                >
                  {isEditing ? <Save className="w-4 h-4" /> : <Settings className="w-4 h-4" />}
                  <span>{isEditing ? 'Guardar' : 'Editar'}</span>
                </button>
              </div>

              <div className="space-y-6 md:space-y-8">
                {/* Avatar optimizado para móvil */}
                <div className="text-center mobile-profile-header">
                  <div className="mobile-profile-avatar text-6xl md:text-8xl mb-4 hamster-float">{profileData.avatar}</div>
                  {isEditing && (
                    <div className="flex justify-center space-x-2 flex-wrap">
                      {['🐹', '🐹💕', '🐹✨', '🐹🌸', '🐹💙'].map((emoji) => (
                        <button
                          key={emoji}
                          onClick={() => handleInputChange('avatar', emoji)}
                          className={`text-2xl md:text-3xl p-2 md:p-3 rounded-xl transition-all ${
                            profileData.avatar === emoji ? 'bg-pink-200' : 'hover:bg-white/50'
                          }`}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Form Fields optimizados para móvil */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="mobile-form-group">
                    <label className="mobile-form-label text-gray-700 flex items-center">
                      <User className="w-4 h-4 inline mr-2" />
                      Nombre
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full input-field"
                      />
                    ) : (
                      <p className="text-gray-800 font-medium text-base md:text-lg">{profileData.name}</p>
                    )}
                  </div>

                  <div className="mobile-form-group">
                    <label className="mobile-form-label text-gray-700 flex items-center">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full input-field"
                      />
                    ) : (
                      <p className="text-gray-800 font-medium text-base md:text-lg">{profileData.email}</p>
                    )}
                  </div>

                  <div className="mobile-form-group">
                    <label className="mobile-form-label text-gray-700 flex items-center">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Miembro desde
                    </label>
                    <p className="text-gray-800 font-medium text-base md:text-lg">{profileData.joinDate}</p>
                  </div>

                  <div className="mobile-form-group">
                    <label className="mobile-form-label text-gray-700 flex items-center">
                      <Heart className="w-4 h-4 inline mr-2" />
                      Emoción favorita
                    </label>
                    <p className="text-gray-800 font-medium text-base md:text-lg">{profileData.favoriteEmotion}</p>
                  </div>
                </div>

                {/* Preferences optimizadas para móvil */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Preferencias</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/30 rounded-xl">
                      <div>
                        <p className="font-medium text-gray-800">Notificaciones</p>
                        <p className="text-sm text-gray-600">Recibir recordatorios diarios</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={profileData.notifications}
                          onChange={(e) => handleInputChange('notifications', e.target.checked)}
                          className="sr-only peer"
                          disabled={!isEditing}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-400"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-white/30 rounded-xl">
                      <div>
                        <p className="font-medium text-gray-800">Modo oscuro</p>
                        <p className="text-sm text-gray-600">Cambiar a tema oscuro</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={profileData.darkMode}
                          onChange={(e) => handleInputChange('darkMode', e.target.checked)}
                          className="sr-only peer"
                          disabled={!isEditing}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-400"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Sidebar optimizado para móvil */}
          <div className="space-y-6">
            <div className="glass-effect rounded-2xl md:rounded-3xl p-6 mobile-card">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Estadísticas</h3>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/30 rounded-xl">
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="font-semibold text-gray-800">{stat.value}</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${stat.color}`}></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl md:rounded-3xl p-6 mobile-card">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Logros 🏆</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-white/30 rounded-xl">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">Primera semana</p>
                    <p className="text-xs text-gray-600">7 días consecutivos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/30 rounded-xl">
                  <div className="text-2xl">💝</div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">Autoconocimiento</p>
                    <p className="text-xs text-gray-600">15 días registrados</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/30 rounded-xl opacity-50">
                  <div className="text-2xl">🌟</div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">Constancia</p>
                    <p className="text-xs text-gray-600">30 días consecutivos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile