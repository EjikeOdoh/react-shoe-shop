
import { useState } from 'react'
import './App.css'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import updatedItems from './data'
import { CartContext } from './contexts/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router'


function App() {

  const [shoes, setShoes] = useState(updatedItems)
  const cart = shoes.filter(shoe => shoe.selected === true)

  const addToCart = (id) => {
    setShoes(prev => {
      return prev.map(shoe => {
        if (shoe.id === id) {
          return { ...shoe, selected: true }
        } else {
          return shoe
        }
      })
    })
  }

  const increaseCount = (id) => {
    setShoes(prev => {
      return prev.map(shoe => {
        if (shoe.id === id) {
          return { ...shoe, qty: shoe.qty + 1 }
        } else {
          return shoe
        }
      })
    })
  }

  const decreaseCount = (id) => {
    setShoes(prev => {
      return prev.map(shoe => {
        if (shoe.id === id) {
          if (shoe.qty === 1) {
            return shoe
          } else {
            return { ...shoe, qty: shoe.qty - 1 }
          }
        } else {
          return shoe
        }
      })
    })
  }

  const removeFromCart = (id) => {
    setShoes(prev => {
      return prev.map(shoe => {
        if (shoe.id === id) {
          return { ...shoe, qty: 1, selected: false }
        } else {
          return shoe
        }
      })
    })
  }

  return (

    <CartContext value={{
      shoes: shoes,
      cart: cart
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart actions={
            {
              increase: increaseCount,
              decrease: decreaseCount,
              remove: removeFromCart
            }
          } />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>



    </CartContext>
  )
}

export default App
