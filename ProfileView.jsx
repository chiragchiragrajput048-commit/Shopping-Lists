import React from 'react'
import { User, Settings, Moon, LogOut, Sun } from 'lucide-react'

const ProfileView = ({ darkMode, setDarkMode, onNavigate, user, onLogout }) => {
    const handleAction = (action) => {
        if (action === 'Dark Mode') {
            setDarkMode(!darkMode)
        } else if (action === 'Settings') {
            onNavigate('Settings')
        } else if (action === 'Log Out') {
            const confirmed = confirm('Are you sure you want to log out?')
            if (confirmed) {
                onLogout()
            }
        } else {
            alert(`${action} feature coming soon!`)
        }
    }

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
                    margin: '0 auto 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '40px'
                }}>
                    👤
                </div>
                <h2 style={{ color: 'var(--text-main)' }}>{user?.name || 'John Doe'}</h2>
                <p style={{ color: 'var(--text-secondary)' }}>{user?.email || 'Premium Member'}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                    { icon: User, label: 'Edit Profile' },
                    { icon: Settings, label: 'Settings', action: 'Settings' },
                    { icon: darkMode ? Sun : Moon, label: darkMode ? 'Light Mode' : 'Dark Mode', action: 'Dark Mode' },
                    { icon: LogOut, label: 'Log Out', color: '#FF6B6B', action: 'Log Out' }
                ].map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleAction(item.action || item.label)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            padding: '16px',
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            width: '100%',
                            textAlign: 'left',
                            cursor: 'pointer',
                            color: item.color || 'var(--text-main)',
                            transition: 'transform 0.1s ease'
                        }}
                        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <item.icon size={20} />
                        <span style={{ fontWeight: '500' }}>{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ProfileView
