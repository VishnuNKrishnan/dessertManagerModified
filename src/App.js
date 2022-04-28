import { useState, useContext } from 'react'
import './App.css'
import AppWrapper from './Components/AppWrapper'
import { UserContext } from './UserContext'

function App() {
  const [dessertList, setDessertList] = useState([])
  const [activePage, setActivePage] = useState('addDesert')
  const [menuStatus, setMenuStatus] = useState('active')
  return (
    <UserContext.Provider
      value={{
        activePage,
        setActivePage,
        dessertList,
        setDessertList,
        menuStatus,
        setMenuStatus,
      }}
    >
      <div className="App">
        <AppWrapper />
      </div>
    </UserContext.Provider>
  )
}

export default App
