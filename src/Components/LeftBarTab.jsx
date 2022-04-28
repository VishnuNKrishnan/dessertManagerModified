import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import './LeftBarTab.css'

function LeftBarTab(props) {
  const { activePage, setActivePage, menuStatus, setMenuStatus } = useContext(
    UserContext,
  )
  return (
    <div
      className={`tab ${menuStatus}`}
      onClick={() => {
        setActivePage(props.pageToSet)
        setMenuStatus('inactive')
      }}
    >
      <h2>{props.title}</h2>
    </div>
  )
}

export default LeftBarTab
