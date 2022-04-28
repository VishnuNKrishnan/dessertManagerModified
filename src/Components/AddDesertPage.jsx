import React, { useState, useContext } from 'react'
import { UserContext } from '../UserContext'
import './AddDesertPage.css'

function AddDesertPage() {
  const { activePage, setActivePage, dessertList, setDessertList } = useContext(
    UserContext,
  )

  const [errorMessage, setErrorMessage] = useState('')
  const [desertNameInput, setDesertNameInput] = useState('')
  const [desertPriceInput, setDesertPriceInput] = useState('')

  function handleForm(e) {
    e.preventDefault()
    if (desertNameInput == '' || desertPriceInput == '') {
      setErrorMessage('Please fill in all the fields...')
      return
    }
    const dessertObject = {
      name: desertNameInput,
      price: desertPriceInput,
    }
    var existingDessertList = dessertList
    existingDessertList.push(dessertObject)
    setDessertList(existingDessertList)
    setDesertNameInput('')
    setDesertPriceInput('')
    console.log(dessertList)
  }
  return (
    <div className="holder">
      <h1>ADD A NEW DESSERT</h1>
      <form action="">
        <input
          type="text"
          name=""
          id="dessertName"
          placeholder="Dessert Name"
          value={desertNameInput}
          onChange={(e) => {
            setErrorMessage('')
            setDesertNameInput(e.target.value)
          }}
        />
        <input
          type="number"
          name=""
          id="dessertProce"
          placeholder="Price"
          value={desertPriceInput}
          onChange={(e) => {
            setErrorMessage('')
            setDesertPriceInput(e.target.value)
          }}
        />
        <button type="submit" className="primaryBtn" onClick={handleForm}>
          ADD
        </button>
        <p className="error">{errorMessage}</p>
      </form>
    </div>
  )
}

export default AddDesertPage
