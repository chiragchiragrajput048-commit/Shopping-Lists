import React, { useState } from 'react'
import { Bell, Plus, Check, Trash2, Calendar } from 'lucide-react'

const RemindersView = ({ reminders, onAddReminder, onToggleReminder, onDeleteReminder }) => {
    const [newReminderText, setNewReminderText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newReminderText.trim()) {
            onAddReminder({
                id: Date.now(),
                text: newReminderText,
                completed: false,
                time: 'Today, 10:00 AM' // Mock time for now
            })
            setNewReminderText('')
        }
    }

    return (
        <div style={{ padding: '20px', paddingBottom: '100px' }}>
            <h2 style={{ marginBottom: '20px', color: 'var(--text-main)' }}>Reminders</h2>

            {reminders.length === 0 ? (
                <div style={{ padding: '20px', textAlign: 'center', marginTop: '40px' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'var(--glass-bg)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                    }}>
                        <Bell size={40} color="var(--text-accent)" />
                    </div>
                    <h3 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>No Reminders</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Add a reminder so you don't forget!</p>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {reminders.map(reminder => (
                        <div key={reminder.id} style={{
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '16px',
                            padding: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            transition: 'all 0.2s ease',
                            opacity: reminder.completed ? 0.6 : 1
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div
                                    onClick={() => onToggleReminder(reminder.id)}
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        border: `2px solid ${reminder.completed ? 'var(--text-accent)' : 'var(--text-secondary)'}`,
                                        background: reminder.completed ? 'var(--text-accent)' : 'transparent',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        flexShrink: 0
                                    }}
                                >
                                    {reminder.completed && <Check size={14} color="white" />}
                                </div>
                                <div>
                                    <span style={{
                                        fontSize: '16px',
                                        color: 'var(--text-main)',
                                        textDecoration: reminder.completed ? 'line-through' : 'none',
                                        display: 'block'
                                    }}>
                                        {reminder.text}
                                    </span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                                        <Calendar size={12} color="var(--text-secondary)" />
                                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{reminder.time}</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => onDeleteReminder(reminder.id)}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FF6B6B', padding: '4px' }}
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <form
                onSubmit={handleSubmit}
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
                    value={newReminderText}
                    onChange={(e) => setNewReminderText(e.target.value)}
                    placeholder="Add a reminder..."
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

export default RemindersView
