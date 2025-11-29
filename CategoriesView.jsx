import React from 'react'

const CategoriesView = ({ lists, onCategoryClick }) => {
    // Use actual lists as categories for now, or group them if we had item-level data
    // For this prototype, we'll map the lists directly to show dynamic data

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ marginBottom: '20px', color: 'var(--text-main)' }}>Categories</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {lists.map((list, index) => (
                    <div
                        key={list.id}
                        onClick={onCategoryClick}
                        style={{
                            background: 'var(--glass-bg)',
                            padding: '20px',
                            borderRadius: '16px',
                            border: '1px solid var(--glass-border)',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'transform 0.1s ease'
                        }}
                        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: `var(--${list.color}-gradient, #E3F2FD)`, // Fallback if gradient var missing
                            backgroundColor: list.color === 'blue' ? '#E3F2FD' :
                                list.color === 'purple' ? '#F3E5F5' :
                                    list.color === 'green' ? '#E8F5E9' : '#FFF3E0',
                            margin: '0 auto 12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '18px'
                        }}>
                            {/* Simple icon mapping based on color/name could go here */}
                            {list.name[0]}
                        </div>
                        <h3 style={{ fontSize: '16px', marginBottom: '4px', color: 'var(--text-main)' }}>{list.name}</h3>
                        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{list.count} items</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoriesView
