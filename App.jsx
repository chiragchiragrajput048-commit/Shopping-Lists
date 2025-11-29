import { useState, useEffect } from 'react'
import Header from './components/Header'
import ShoppingListCard from './components/ShoppingListCard'
import BottomNav from './components/BottomNav'
import FloatingActionButton from './components/FloatingActionButton'
import CategoriesView from './components/CategoriesView'
import RemindersView from './components/RemindersView'
import ProfileView from './components/ProfileView'
import AddListModal from './components/AddListModal'
import ListDetailsView from './components/ListDetailsView'
import SettingsView from './components/SettingsView'
import LoginView from './components/LoginView'

function App() {
    // Load login state from localStorage
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true'
    })

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user')
        return savedUser ? JSON.parse(savedUser) : null
    })

    const [currentView, setCurrentView] = useState('Lists')

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true'
    })

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [activeList, setActiveList] = useState(null)

    const [lists, setLists] = useState(() => {
        const savedLists = localStorage.getItem('lists')
        return savedLists ? JSON.parse(savedLists) : [
            { id: 1, name: 'Groceries', count: 12, completed: 8, color: 'blue' },
            { id: 2, name: 'Home Decor', count: 5, completed: 2, color: 'purple' },
            { id: 3, name: 'Weekly Essentials', count: 24, completed: 24, color: 'green' },
            { id: 4, name: 'Party Prep', count: 8, completed: 0, color: 'orange' },
        ]
    })

    const [reminders, setReminders] = useState(() => {
        const savedReminders = localStorage.getItem('reminders')
        return savedReminders ? JSON.parse(savedReminders) : [
            { id: 1, text: 'Buy Milk', completed: false, time: 'Today, 5:00 PM' },
            { id: 2, text: 'Call Mom', completed: true, time: 'Yesterday' }
        ]
    })

    // Save to localStorage whenever data changes
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(lists))
    }, [lists])

    useEffect(() => {
        localStorage.setItem('reminders', JSON.stringify(reminders))
    }, [reminders])

    const handleLogin = (userData) => {
        setUser(userData)
        setIsLoggedIn(true)
        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('isLoggedIn', 'true')
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        setUser(null)
        setCurrentView('Lists')
        localStorage.removeItem('user')
        localStorage.setItem('isLoggedIn', 'false')
    }

    const handleAddList = (newList) => {
        setLists([...lists, { ...newList, id: Date.now(), count: 0, completed: 0 }])
    }

    const handleListClick = (list) => {
        setActiveList(list)
        setCurrentView('Details')
    }

    const handleUpdateList = (updatedList) => {
        setLists(lists.map(l => l.id === updatedList.id ? updatedList : l))
        setActiveList(updatedList)
    }

    const handleAddReminder = (newReminder) => {
        setReminders([...reminders, newReminder])
    }

    const handleToggleReminder = (id) => {
        setReminders(reminders.map(r => r.id === id ? { ...r, completed: !r.completed } : r))
    }

    const handleDeleteReminder = (id) => {
        setReminders(reminders.filter(r => r.id !== id))
    }

    if (!isLoggedIn) {
        return <LoginView onLogin={handleLogin} />
    }

    const renderContent = () => {
        switch (currentView) {
            case 'Lists':
                return (
                    <>
                        <Header />
                        <div className="lists-container" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {lists.map(list => (
                                <div key={list.id} onClick={() => handleListClick(list)}>
                                    <ShoppingListCard list={list} />
                                </div>
                            ))}
                        </div>
                        <FloatingActionButton onClick={() => setIsModalOpen(true)} />
                    </>
                )
            case 'Details':
                return (
                    <ListDetailsView
                        list={activeList}
                        onBack={() => setCurrentView('Lists')}
                        onUpdateList={handleUpdateList}
                    />
                )
            case 'Categories':
                return (
                    <CategoriesView
                        lists={lists}
                        onCategoryClick={() => setCurrentView('Lists')}
                    />
                )
            case 'Reminders':
                return (
                    <RemindersView
                        reminders={reminders}
                        onAddReminder={handleAddReminder}
                        onToggleReminder={handleToggleReminder}
                        onDeleteReminder={handleDeleteReminder}
                    />
                )
            case 'Profile':
                return <ProfileView darkMode={darkMode} setDarkMode={setDarkMode} onNavigate={setCurrentView} user={user} onLogout={handleLogout} />
            case 'Settings':
                return <SettingsView darkMode={darkMode} setDarkMode={setDarkMode} onBack={() => setCurrentView('Profile')} />
            default:
                return null
        }
    }

    return (
        <div className="app-container" style={{ padding: '20px' }}>
            {renderContent()}
            <BottomNav activeTab={currentView} onTabChange={setCurrentView} />
            <AddListModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddList}
            />
        </div>
    )
}

export default App
