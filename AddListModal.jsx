import React, { useState } from 'react'
import { X } from 'lucide-react'

const AddListModal = ({ isOpen, onClose, onAdd }) => {
    const [listName, setListName] = useState('')
    const [selectedColor, setSelectedColor] = useState('blue')

    const colors = ['blue', 'purple', 'green', 'orange', 'pink']

    if (!isOpen) return null

    const handleSubmit = (e) => {
        e.preventDefault()
        if (listName.trim()) {
            onAdd({ name: listName, color: selectedColor })
            setListName('')
            onClose()
        }
    }

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
        }}>
            <div style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '24px',
                padding: '24px',
                width: '100%',
                maxWidth: '340px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '20px', color: 'var(--text-main)' }}>New List</h2>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Name</label>
                        <input
                            type="text"
                            value={listName}
                            onChange={(e) => setListName(e.target.value)}
                            placeholder="e.g., Weekend Party"
                            autoFocus
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                borderRadius: '12px',
                                border: '1px solid var(--glass-border)',
                                background: 'rgba(255,255,255,0.5)',
                                fontSize: '16px',
                                outline: 'none',
                                color: 'var(--text-main)'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={{ display: 'block', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>Color</label>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            {colors.map(color => (
                                <div
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: `var(--${color}-gradient, ${color})`,
                                        backgroundColor: color === 'blue' ? '#667EEA' :
                                            color === 'purple' ? '#764BA2' :
                                                color === 'green' ? '#48bb78' :
                                                    color === 'orange' ? '#ed8936' : '#ed64a6',
                                        cursor: 'pointer',
                                        border: selectedColor === color ? '2px solid var(--text-main)' : '2px solid transparent',
                                        transform: selectedColor === color ? 'scale(1.1)' : 'scale(1)',
                                        transition: 'all 0.2s ease'
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '16px',
                            borderRadius: '12px',
                            background: 'var(--primary-gradient)',
                            border: 'none',
                            color: 'white',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
                        }}
                    >
                        Create List
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddListModal
