import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import AddDesertPage from './AddDesertPage'
import './AppWrapper.css'
import DesertsChart from './DesertsChart'
import DesertsListPage from './DesertsListPage'
import LeftBarTab from './LeftBarTab'
import menuSymbol from '../uiAssets/menu.svg'

function AppWrapper() {
  const { activePage, setActivePage, menuStatus, setMenuStatus } = useContext(
    UserContext,
  )

  return (
    <div className="appWrapper">
      <div className="leftBar">
        <LeftBarTab title={'New Dessert'} pageToSet={'addDessert'} />
        <LeftBarTab title={'Desserts List'} pageToSet={'dessertList'} />
        <LeftBarTab title={'Desserts Chart'} pageToSet={'dessertChart'} />
        <div
          className="menuActivator"
          onClick={() => {
            menuStatus == 'inactive'
              ? setMenuStatus('active')
              : setMenuStatus('inactive')
          }}
        >
          <img src={menuSymbol} alt="Menu" />
        </div>
      </div>
      <div className="rightContent">
        {activePage == 'addDessert' ? <AddDesertPage /> : null}
        {activePage == 'dessertList' ? <DesertsListPage /> : null}
        {activePage == 'dessertChart' ? <DesertsChart /> : null}
        {console.log(activePage)}
      </div>
    </div>
  )
}

export default AppWrapper
