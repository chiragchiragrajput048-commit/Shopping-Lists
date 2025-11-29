import React, { useState } from 'react'
import { ArrowLeft, Plus, Check, Trash2 } from 'lucide-react'

const ListDetailsView = ({ list, onBack, onUpdateList }) => {
    const [newItemText, setNewItemText] = useState('')
    // Mock items for now since we don't have a backend
    const [items, setItems] = useState([
        { id: 1, text: 'Milk', completed: false },
        { id: 2, text: 'Eggs', completed: true },
        { id: 3, text: 'Bread', completed: false },
        { id: 4, text: 'Cheese', completed: false },
    ])

    const handleToggleItem = (id) => {
        const updatedItems = items.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
        )
        setItems(updatedItems)
        // Update parent list count (mock logic)
        const completedCount = updatedItems.filter(i => i.completed).length
        onUpdateList({ ...list, completed: completedCount, count: updatedItems.length })
    }

    const handleAddItem = (e) => {
        e.preventDefault()
        if (newItemText.trim()) {
            const newItem = { id: Date.now(), text: newItemText, completed: false }
            const updatedItems = [...items, newItem]
            setItems(updatedItems)
            setNewItemText('')
            onUpdateList({ ...list, count: updatedItems.length })
        }
    }

    const handleDeleteItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id)
        setItems(updatedItems)
        const completedCount = updatedItems.filter(i => i.completed).length
        onUpdateList({ ...list, completed: completedCount, count: updatedItems.length })
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
                <h1 style={{ fontSize: '24px', color: 'var(--text-main)', margin: 0 }}>{list.name}</h1>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {items.map(item => (
                    <div key={item.id} style={{
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '16px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s ease',
                        opacity: item.completed ? 0.6 : 1
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div
                                onClick={() => handleToggleItem(item.id)}
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    border: `2px solid ${item.completed ? 'var(--text-accent)' : 'var(--text-secondary)'}`,
                                    background: item.completed ? 'var(--text-accent)' : 'transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                {item.completed && <Check size={14} color="white" />}
                            </div>
                            <span style={{
                                fontSize: '16px',
                                color: 'var(--text-main)',
                                textDecoration: item.completed ? 'line-through' : 'none'
                            }}>
                                {item.text}
                            </span>
                        </div>
                        <button
                            onClick={() => handleDeleteItem(item.id)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FF6B6B', padding: '4px' }}
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}
            </div>

            <form
                onSubmit={handleAddItem}
                style={{
                    position: 'fixed',
                    bottom: '90px',
                    left: '20px',
                    right: '20px',
                    display: 'flex',
                    gap: '12px'
                }}
            >
                <input
                    type="text"
                    value={newItemText}
                    onChange={(e) => setNewItemText(e.target.value)}
                    placeholder="Add an item..."
                    style={{
                        flex: 1,
                        padding: '16px',
                        borderRadius: '16px',
                        border: 'none',
                        background: 'rgba(255, 255, 255, 0.9)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        fontSize: '16px',
                        outline: 'none'
                    }}
                />
                <button
                    type="submit"
                    style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        background: 'var(--primary-gradient)',
                        border: 'none',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
                    }}
                >
                    <Plus size={24} />
                </button>
            </form>
        </div>
    )
}

export default ListDetailsView
