import React from 'react'
import { ChevronRight } from 'lucide-react'

const ShoppingListCard = ({ list }) => {
    const percentage = Math.round((list.completed / list.count) * 100) || 0;

    // Dynamic gradient based on list color prop (simplified for now)
    const getGradient = (color) => {
        const colors = {
            blue: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
            purple: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)',
            green: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
            orange: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)'
        }
        return colors[color] || colors.blue
    }

    return (
        <div style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(12px)',
            border: '1px solid var(--glass-border)',
            borderRadius: 'var(--card-radius)',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: 'var(--glass-shadow)',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
        }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* Progress Ring / Icon Placeholder */}
                <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: getGradient(list.color),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-main)',
                    fontWeight: '600',
                    fontSize: '14px',
                    position: 'relative'
                }}>
                    {percentage}%
                </div>

                <div>
                    <h3 style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: 'var(--text-main)',
                        marginBottom: '4px'
                    }}>
                        {list.name}
                    </h3>
                    <p style={{
                        fontSize: '13px',
                        color: 'var(--text-secondary)'
                    }}>
                        {list.completed}/{list.count} items
                    </p>
                </div>
            </div>

            <ChevronRight size={20} color="var(--text-secondary)" />
        </div>
    )
}

export default ShoppingListCard
