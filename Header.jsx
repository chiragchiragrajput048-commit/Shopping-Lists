import React from 'react'

const Header = () => {
    return (
        <header style={{
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div>
                <h1 style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: 'var(--text-main)',
                    letterSpacing: '-0.5px'
                }}>
                    Shopping Lists
                </h1>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '14px',
                    marginTop: '4px'
                }}>
                    Keep track of your essentials
                </p>
            </div>
            <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px'
            }}>
                👤
            </div>
        </header>
    )
}

export default Header
