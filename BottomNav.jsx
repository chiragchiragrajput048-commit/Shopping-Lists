import React from 'react'
import { List, Grid, Bell, User } from 'lucide-react'

const BottomNav = ({ activeTab, onTabChange }) => {
    const navItems = [
        { icon: List, label: 'Lists' },
        { icon: Grid, label: 'Categories' },
        { icon: Bell, label: 'Reminders' },
        { icon: User, label: 'Profile' },
    ]

    return (
        <nav style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.5)',
            padding: '16px 24px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 100
        }}>
            {navItems.map((item, index) => (
                <div
                    key={index}
                    onClick={() => onTabChange(item.label)}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                        color: activeTab === item.label ? '#667EEA' : '#A0AEC0',
                        cursor: 'pointer',
                        transition: 'color 0.2s ease'
                    }}
                >
                    <item.icon size={24} strokeWidth={activeTab === item.label ? 2.5 : 2} />
                    <span style={{ fontSize: '10px', fontWeight: '500' }}>{item.label}</span>
                </div>
            ))}
        </nav>
    )
}

export default BottomNav
