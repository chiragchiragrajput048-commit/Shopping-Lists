import React, { useState } from 'react'
import { User, Lock, Mail } from 'lucide-react'

const LoginView = ({ onLogin }) => {
    const [isSignup, setIsSignup] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignup) {
            if (email && password && name) {
                alert(`Welcome ${name}! Account created successfully.`)
                onLogin({ name, email })
            } else {
                alert('Please fill in all fields')
            }
        } else {
            if (email && password) {
                onLogin({ name: email.split('@')[0], email })
            } else {
                alert('Please enter email and password')
            }
        }
    }

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '20px'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '400px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '24px',
                padding: '40px 32px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        margin: '0 auto 16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '40px'
                    }}>
                        🛒
                    </div>
                    <h1 style={{ fontSize: '28px', color: '#2D3748', marginBottom: '8px' }}>
                        {isSignup ? 'Create Account' : 'Welcome Back'}
                    </h1>
                    <p style={{ color: '#718096', fontSize: '14px' }}>
                        {isSignup ? 'Sign up to get started' : 'Sign in to your account'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {isSignup && (
                        <div>
                            <label style={{ display: 'block', fontSize: '14px', color: '#718096', marginBottom: '8px' }}>
                                Name
                            </label>
                            <div style={{ position: 'relative' }}>
                                <User size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#718096' }} />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    style={{
                                        width: '100%',
                                        padding: '14px 16px 14px 48px',
                                        borderRadius: '12px',
                                        border: '1px solid #E2E8F0',
                                        background: 'white',
                                        fontSize: '16px',
                                        outline: 'none',
                                        color: '#2D3748'
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    <div>
                        <label style={{ display: 'block', fontSize: '14px', color: '#718096', marginBottom: '8px' }}>
                            Email
                        </label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#718096' }} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                style={{
                                    width: '100%',
                                    padding: '14px 16px 14px 48px',
                                    borderRadius: '12px',
                                    border: '1px solid #E2E8F0',
                                    background: 'white',
                                    fontSize: '16px',
                                    outline: 'none',
                                    color: '#2D3748'
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '14px', color: '#718096', marginBottom: '8px' }}>
                            Password
                        </label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#718096' }} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                style={{
                                    width: '100%',
                                    padding: '14px 16px 14px 48px',
                                    borderRadius: '12px',
                                    border: '1px solid #E2E8F0',
                                    background: 'white',
                                    fontSize: '16px',
                                    outline: 'none',
                                    color: '#2D3748'
                                }}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '16px',
                            borderRadius: '12px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            border: 'none',
                            color: 'white',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                            marginTop: '8px'
                        }}
                    >
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '24px' }}>
                    <p style={{ fontSize: '14px', color: '#718096' }}>
                        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
                        <button
                            onClick={() => setIsSignup(!isSignup)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#667eea',
                                fontSize: '14px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                textDecoration: 'underline'
                            }}
                        >
                            {isSignup ? 'Sign In' : 'Sign Up'}
                        </button>
                    </p>

                    <button
                        onClick={() => onLogin({ name: 'Guest User', email: 'guest@example.com' })}
                        style={{
                            marginTop: '12px',
                            background: 'none',
                            border: 'none',
                            color: '#A0AEC0',
                            fontSize: '12px',
                            cursor: 'pointer',
                            textDecoration: 'underline'
                        }}
                    >
                        Skip Login (Demo Mode)
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginView
