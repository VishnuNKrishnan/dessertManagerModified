import React, { useState, useContext } from 'react'
import { UserContext } from '../UserContext'
import './DesertsListPage.css'
import deleteLogo from '../uiAssets/delete.svg'

function DesertsListPage() {
  const { dessertList, setDessertList } = useContext(UserContext)
  return (
    <div className="holder">
      <h1>DESSERTS LIST</h1>
      <div className="listHolder">
        {dessertList.map((obj, index) => {
          return (
            <div className="listItem" key={index}>
              <h3 className="name">{obj.name}</h3>
              <h3 className="price">{obj.price}</h3>
              <div className="action">
                <img
                  src={deleteLogo}
                  alt="Delete"
                  onClick={() => {
                    //var newArray = dessertList.splice(index, 1)
                    var newArray = []
                    for (var i = 0; i < dessertList.length; i++) {
                      if (i != index) {
                        newArray.push(dessertList[i])
                      }
                    }
                    setDessertList(newArray)
                    console.log(dessertList)
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DesertsListPage
