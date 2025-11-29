import React from 'react'
import { Plus } from 'lucide-react'

const FloatingActionButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                position: 'fixed',
                bottom: '90px',
                right: '24px',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--primary-gradient)',
                border: 'none',
                boxShadow: '0 10px 25px rgba(102, 126, 234, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
                zIndex: 90,
                transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <Plus size={28} strokeWidth={3} />
        </button>
    )
}

export default FloatingActionButton
