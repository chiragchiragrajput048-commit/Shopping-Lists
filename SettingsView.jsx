import React, { useState } from 'react'
import { ArrowLeft, Bell, Globe, Lock, Trash2, ChevronRight } from 'lucide-react'

const SettingsView = ({ onBack, darkMode, setDarkMode }) => {
    const [notifications, setNotifications] = useState(true)
    const [language, setLanguage] = useState('English')
    const [showLanguageMenu, setShowLanguageMenu] = useState(false)

    const languages = ['English', 'Spanish', 'French', 'German', 'Hindi']

    const handleLanguageSelect = (lang) => {
        setLanguage(lang)
        setShowLanguageMenu(false)
    }

    const handleChangePassword = () => {
        const newPassword = prompt('Enter new password:')
        if (newPassword) {
            alert('Password changed successfully!')
        }
    }

    const handlePrivacyPolicy = () => {
        alert('Privacy Policy:\n\nWe respect your privacy and protect your data. All information is stored locally on your device.')
    }

    const handleClearData = () => {
        const confirmed = confirm('Are you sure you want to clear all data? This action cannot be undone.')
        if (confirmed) {
            alert('All data has been cleared!')
        }
    }

    return (
        <div style={{ padding: '20px', paddingBottom: '100px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <button
                    onClick={onBack}
                    style={{
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'var(--text-main)'
                    }}
                >
                    <ArrowLeft size={20} />
                </button>
                <h1 style={{ fontSize: '24px', color: 'var(--text-main)', margin: 0 }}>Settings</h1>
            </div>

            {/* Preferences Section */}
            <div style={{ marginBottom: '32px' }}>
                <h3 style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                }}>
                    Preferences
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {/* Notifications Toggle */}
                    <div
                        style={{
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            padding: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Bell size={20} color="var(--text-main)" />
                            <span style={{ fontSize: '16px', color: 'var(--text-main)' }}>
                                Notifications
                            </span>
                        </div>

                        <div
                            onClick={() => setNotifications(!notifications)}
                            style={{
                                width: '48px',
                                height: '28px',
                                borderRadius: '14px',
                                background: notifications ? 'var(--text-accent)' : '#CBD5E0',
                                position: 'relative',
                                cursor: 'pointer',
                                transition: 'background 0.2s ease'
                            }}
                        >
                            <div style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                background: 'white',
                                position: 'absolute',
                                top: '2px',
                                left: notifications ? '22px' : '2px',
                                transition: 'left 0.2s ease',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                            }} />
                        </div>
                    </div>

                    {/* Language Selector */}
                    <div
                        onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                        style={{
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            padding: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            position: 'relative'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Globe size={20} color="var(--text-main)" />
                            <span style={{ fontSize: '16px', color: 'var(--text-main)' }}>
                                Language
                            </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                                {language}
                            </span>
                            <ChevronRight size={16} color="var(--text-secondary)" />
                        </div>

                        {/* Language Dropdown */}
                        {showLanguageMenu && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                right: 0,
                                marginTop: '8px',
                                background: 'var(--glass-bg)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                                zIndex: 10,
                                overflow: 'hidden'
                            }}>
                                {languages.map((lang, index) => (
                                    <div
                                        key={lang}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleLanguageSelect(lang)
                                        }}
                                        style={{
                                            padding: '12px 16px',
                                            cursor: 'pointer',
                                            background: language === lang ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
                                            color: language === lang ? 'var(--text-accent)' : 'var(--text-main)',
                                            borderBottom: index < languages.length - 1 ? '1px solid var(--glass-border)' : 'none'
                                        }}
                                    >
                                        {lang}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Security Section */}
            <div style={{ marginBottom: '32px' }}>
                <h3 style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                }}>
                    Security
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div
                        onClick={handleChangePassword}
                        style={{
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            padding: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Lock size={20} color="var(--text-main)" />
                            <span style={{ fontSize: '16px', color: 'var(--text-main)' }}>
                                Change Password
                            </span>
                        </div>
                        <ChevronRight size={16} color="var(--text-secondary)" />
                    </div>

                    <div
                        onClick={handlePrivacyPolicy}
                        style={{
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            padding: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Lock size={20} color="var(--text-main)" />
                            <span style={{ fontSize: '16px', color: 'var(--text-main)' }}>
                                Privacy Policy
                            </span>
                        </div>
                        <ChevronRight size={16} color="var(--text-secondary)" />
                    </div>
                </div>
            </div>

            {/* Data Section */}
            <div style={{ marginBottom: '32px' }}>
                <h3 style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                }}>
                    Data
                </h3>

                <div
                    onClick={handleClearData}
                    style={{
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '12px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Trash2 size={20} color="#FF6B6B" />
                        <span style={{ fontSize: '16px', color: '#FF6B6B' }}>
                            Clear All Data
                        </span>
                    </div>
                    <ChevronRight size={16} color="var(--text-secondary)" />
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                marginTop: '40px',
                color: 'var(--text-secondary)',
                fontSize: '12px'
            }}>
                Version 1.0.0
            </div>
        </div>
    )
}

export default SettingsView
